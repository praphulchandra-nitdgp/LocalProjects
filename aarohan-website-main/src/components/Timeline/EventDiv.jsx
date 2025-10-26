import EventTime from "./EventTime";
import { useEffect, useRef } from "react";

export default function EventDiv({ events }) {
    const scrollableRef = useRef(null);

    useEffect(() => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTop = 0;
        }
    }, [events]);

    return (
        <div 
            className={"w-[330px] sm:w-[90%] h-[600px] sm:h-[760px] bg-cover bg-center relative right-[20px] overflow-hidden"} 
            style={{ 
                backgroundImage: `url("./assets/Images/scheduleBg.jpg")`
            }}
        >
            <div className="absolute inset-0 bg-black opacity-75"></div>

            <div ref={scrollableRef} className="w-full h-full flex flex-col items-center space-y-[12px] relative overflow-y-auto py-4">
                {events ? (
                    Object.entries(events).map(([slot, eventList]) => (
                        <div key={slot} className="text-white w-full px-5">
                            <h2 className=" text-[20px] md:text-[35px] mb-[20px] mt-[20px]">{slot.substring(0, 6)}</h2>
                            <div className="flex flex-col space-y-[12px] w-full justify-items-stretch">
                                {eventList.map((event, index) => (
                                    <EventTime event={event} key={index} time={slot.substring(6)}/>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-xl">Select a date to view events</p>
                )}
            </div>
        </div>
    );
}
