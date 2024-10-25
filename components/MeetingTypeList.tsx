"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import {
  BadgeCheck,
  CalendarPlus,
  CheckIcon,
  Copy,
  PlusIcon,
  UserPlusIcon,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import Loader from "./Loader";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoinningMeeting" | "isInstantMeeting" | undefined
  >();
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({ title: "Please select a date and time" });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create meeting");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: "Meeting Created",
      });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed to create Meeting" });
    }
  };

  if (!client || !user) return <Loader />;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  return (
    <section className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        Icon={PlusIcon}
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-orange-500 hover:bg-orange-700"
      />
      <HomeCard
        Icon={CalendarPlus}
        title="Schedule meeting"
        description="Plan a future meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-purple-700 hover:bg-purple-900"
      />
      <HomeCard
        Icon={VideoIcon}
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => router.push("/recordings")}
        className="bg-green-500 hover:bg-green-700"
      />
      <HomeCard
        Icon={UserPlusIcon}
        title="Join Meeting"
        description="via an invitation link"
        handleClick={() => setMeetingState("isJoinningMeeting")}
        className="bg-blue-500 hover:bg-blue-700"
      />

      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2">
            <label className="text-base text-normal leading-5 text-gray-300">
              Add a description
            </label>
            <Textarea
              placeholder="Enter a meeting description"
              className="outline-none border-none bg-slate-700 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label className="text-base text-normal leading-5 text-gray-300">
              Select date and time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-slate-700 p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Meeting created"
          className="text-center"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link copied" });
          }}
          Icon={BadgeCheck}
          ButtonIcon={Copy}
          buttonText="Copy Meeting Link"
        />
      )}
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant meeting"
        className="text-center"
        buttonText="Start meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
