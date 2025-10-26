import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Clock, MapPin } from "lucide-react";
const EventCard = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#2a04047f] backdrop-blur-[2px] flex items-center justify-center z-999 transition-all duration-500"
          onClick={onClickHandler}
        >
          <div
            className="relative w-[340px] overflow-y-auto  md:w-[850px] h-[550px] flex flex-col md:flex-row items-center justify-start py-4 px-10 bg-[#2a0404fa] border border-[#FF9500] rounded-4xl shadow-lg transition-all duration-500"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >
            <div className="relative w-[200px] h-[300px] md:w-[275px] md:h-[400px] overflow-hidden rounded-xl">
              <Image
                src={event.poster}
                fill
                className="object-cover w-full h-full"
                alt="thumbnail"
              />
            </div>
            <div className="w-[340px] md:w-[850px] h-[400px] flex flex-col items-start justify-between pl-3 py-5">
              <div>
                <div className="font-bold text-white">{event.name}</div>
                <div className="text-base font-semibold mt-1 text-neutral-200">
                  Time: {event.time}
                </div>
              </div>
              <div className="w-full  h-[100px] md:h-[250px] text-wrap  font-normal text-xs text-neutral-400 overflow-y-auto pt-4">
                {event.description}
              </div>
              <button
                className="font-semibold text-base text-black bg-[#FF9500] mt-3 py-3 px-4 rounded-lg"
                onClick={() => onClickHandler()}
              >
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register
                </a>
              </button>
            </div>
          </div>
        </div>
      )}

      <CardContainer className="inter-var">
        <CardBody className="bg-[#2a04047f] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[340px] h-[540px] rounded-xl p-6 border shadow-[0px_0px_5px_4px_rgba(217,119,6,0.5)] flex flex-col justify-between">
          <CardItem
            translateZ="50"
            className="w-full text-center text-base  font-bold "
          >
            {event.name}
          </CardItem>
          <CardItem
            as="div"
            translateZ="60"
            className="text-[10px] md:text-sm text-nowrap max-w-sm mt-1 text-neutral-100"
          >
            <div className="w-full h-fit flex items-center justify-between">
              <span className="flex items-center">
                <span className="mr-1.5 md:mr-3">
                  <Clock />
                </span>
                <span>{event.time}</span>
              </span>
              <span className="flex items-center justify-center">
                <span className="mr-1.5 md:mr-3">{event.venue}</span>
                <span>
                  <MapPin />
                </span>
              </span>
            </div>
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-2">
            <Image
              src={event.poster}
              height="1000"
              width="1000"
              className="h-85 w- w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="w-full flex justify-between items-center mt-4 sm:mt-4 text-nowrap text-[9px] md:text-xs font-bold">
            <CardItem
              translateZ={20}
              as="button"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-[#E38501]"
              onClick={onClickHandler}
            >
              Know more
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-[#E38501]"
            >
              <a href={event.registrationLink} target="_blank" rel="noreferrer">
                Register
              </a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default EventCard;
