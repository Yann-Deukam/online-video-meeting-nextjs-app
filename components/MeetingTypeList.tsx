"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { CalendarPlus, PlusIcon, UserPlusIcon, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoinningMeeting" | "isInstantMeeting" | undefined
  >();
  return (
    <section className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        Icon={PlusIcon}
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isJoinningMeeting")}
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

      <MeetingModal />
    </section>
  );
};

export default MeetingTypeList;
