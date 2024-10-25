import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
  }).format(now);
  return (
    <section className="flex size-full flex-col gap-10 text-white mt-2 sm:-mx-10">
      <div className="h-72 w-full rounded-lg bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="max-w-[270px] rounded-md py-2 text-center bg-gray-500/30 backdrop-blur-sm">
            Up comming event at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-blue-200 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
