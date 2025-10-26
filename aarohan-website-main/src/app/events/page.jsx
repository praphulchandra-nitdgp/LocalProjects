"use client";
import React, { useEffect, useState } from "react";
import EventCard from "@/components/EventCard/page";
import EventData from "./events.json";

const events = () => {
  const [day, setDay] = useState(0);
  const [dataE, setDataE] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [eventToggle, setEventToggle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const processSheetData = (data) => {
    if (!data || data.length === 0) return [];

    const headers = data[0];
    const rows = data.slice(1);
    const referenceDate = new Date(2024, 2, 20);
    const schedule = [];
    const eventSet = new Set();

    rows.forEach((row) => {
      const entry = Object.fromEntries(
        headers.map((key, index) => [key, row[index] || ""])
      );

      if (!entry["Date"]) return;

      const eventDateStr = entry?.["Date"];
      if (!eventDateStr) {
        console.error("Invalid date string:", entry);
        return;
      }

      const [day, month, year] = eventDateStr.split("/");
      const formattedDateStr = `${year}-${month}-${day}`;
      const eventDate = new Date(formattedDateStr);

      if (isNaN(eventDate.getTime())) {
        console.error("Invalid Date object:", eventDateStr);
        return;
      }

      const referenceDate = new Date("2025-03-20");
      const dayIndex = Math.floor(
        (eventDate - referenceDate) / (1000 * 60 * 60 * 24)
      );

      if (dayIndex < 0) return;
      
      const formattedEntry = {
        name: entry["Event/Workshop Name"],
        poster: entry["Poster"].replace("open?id=", "uc?export=view&id="),
        venue: entry["Venue"],
        time: entry["Time"],
        description: entry["Description"],
        registrationLink: entry["Registration Link"],
      };

      const eventKey = `${formattedEntry.name}-${formattedEntry.time}-${formattedEntry.venue}`;
      if (eventSet.has(eventKey)) return;
      eventSet.add(eventKey);

      if (!schedule[dayIndex]) {
        schedule[dayIndex] = { events: [], workshops: [] };
      }

      if (entry["Type"].toLowerCase() === "event") {
        schedule[dayIndex].events.push(formattedEntry);
      } else if (entry["Type"].toLowerCase() === "workshop") {
        schedule[dayIndex].workshops.push(formattedEntry);
      }
    });
    return schedule;
  };

  const fetchGoogleSheetData = async () => {
    try {
      const response = await fetch("/api/sheets");
      const data = await response.json();
      setRawData(processSheetData(data.data));
      console.log(processSheetData(data.data));
    } catch (error) {
      setError("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRawData(processSheetData(EventData.data));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="w-screen min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }
  return (
    <div className="w-screen min-h-screen text-base md:text-xl lg:text-2xl select-none bg-[url('/assets/MainBG.png')] bg-cover bg-center ">
      <div className="mt-24 mb-5">
        <ul className="w-[350px] sm:w-[640px] md:w-[700px] lg:w-[800px] xl:w-[900px] h-fit mx-auto flex items-center justify-evenly text-nowrap">
          {rawData.map((_, index) => (
            <li
              key={index}
              className={`${
                day === index ? "text-[#FF9500]" : ""
              } transition-all duration-300 cursor-pointer`}
              onClick={() => setDay(index)}
            >
              DAY {index + 1}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[36px] tracking-tighter sm:tracking-tight md:tracking-normal text-[10px] sm:text-sm lg:text-base cursor-default">
        <div className="relative box-border h-full w-[200px] sm:w-[280px] md:w-[320px] lg:w-[340px] xl:w-[380px] mx-auto flex items-center justify-between px-5 py-1 border border-x-2 border-[#FF9500] rounded-4xl">
          <span
            className={`absolute w-1/2 h-[calc(100%-6px)] top-[3px] left-[3px] bg-[#C07A00] border rounded-4xl ${
              !eventToggle ? "translate-x-[calc(100%-6px)]" : ""
            } z-0 transition-all duration-500 ease-out`}
          ></span>
          <div
            className="inline-block w-1/2 text-left pl-2 sm:pl-4 md:pl-6.5 lg:pl-7 xl:pl-9 text-nowrap z-10 cursor-pointer"
            onClick={() => setEventToggle(true)}
          >
            EVENTS
          </div>
          <div
            className="inline-block w-1/2 text-right pr-3 text-nowrap pl-2 sm:pl-3 md:pl-5 lg:pl-4.5 xl:pl-5.5 z-10 cursor-pointer"
            onClick={() => setEventToggle(false)}
          >
            WORKSHOPS
          </div>
        </div>
      </div>

      <div className="mt-16 w-screen flex items-center justify-center  md:p-5 lg:p-0">
        <ul className="w-full grid gap-x-[20px] md:grid-cols-2 xl:grid-cols-3">
          {rawData.length > 0 && rawData[day] ? (
            (eventToggle ? rawData[day].events : rawData[day].workshops).map(
              (event, key) => (
                <li key={key}>
                  <EventCard event={event}  />
                </li>
              )
            )
          ) : (
            <li className="text-center col-span-full">No events available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default events;
