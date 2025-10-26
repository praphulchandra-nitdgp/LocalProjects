export default function EventTime({ event, time }){
    return(
        <div className=" z-10 h-[30px] sm:h-[45px] w-full self-stretch  border-[1.3px] sm:border-[2px] border-[#FF9500] border-b-[#924E00] text-white rounded-[7px] px-[10px] flex justify-between items-center text-[8px] sm:text-[15px] md:text-[24px] font-[600] overflow-x-auto">
            <span>{event}</span>
            <span>{time}</span>
        </div>
    )
}