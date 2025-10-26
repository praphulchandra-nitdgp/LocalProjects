"use client"

import EventDate from "@/components/Timeline/EventDate";
import EventData from "../../components/Timeline/data"
import { useState } from "react";
import EventDiv from "@/components/Timeline/EventDiv";

export default function Timeline(){

  const [events, setEvents] = useState((EventData)["MARCH 20"]);

    const handleDateClick = (date) => {
        const dateKey = `MARCH ${date}`;
        const dateEvents = (EventData)[dateKey];
        setEvents(dateEvents);
    };

    return (
      <>
        <div className="min-h-screen w-screen \ flex flex-col px-2 md:px-16 items-center mb-10">
          <h1 className="text-[40px] sm:text-[75px] text-[#DC7D00] py-[10px] mt-[50px] sm:mt-[30px]">TIMELINE</h1>
          <div className="h-full w-full flex mt-[-10px] justify-center ">
            <div className="flex flex-col space-y-[115px] sm:space-y-[145px] pt-[60px] sm:pt-[65px] ml-[-45px] sm:ml-[-30px] ">
              <EventDate date={20} onClick={() => handleDateClick(20)}/>
              <EventDate date={21} onClick={() => handleDateClick(21)}/>
              <EventDate date={22} onClick={() => handleDateClick(22)}/>
              <EventDate date={23} onClick={() => handleDateClick(23)}/>
            </div>
            <EventDiv events={events} />
          </div>
        </div>
      </>
    );
  }
