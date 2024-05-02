import clsx from "clsx";
import { FC, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface BookingSliderProps {
  // Add props if needed
}

const CalenderSlot: FC<{
  isSelected?: boolean;
  noOfSlotAvailable: number;
  datetime: string;
}> = ({ isSelected, noOfSlotAvailable, datetime }) => {
  return (
    <div
      data-selected={isSelected}
      className={clsx(
        "flex border-b-5 flex-col cursor-pointer grow justify-center items-center px-6 py-2 data-[selected=true]:border-b-primary data-[selected=false]: border-b-gray-300"
      )}
    >
      <span>{datetime}</span>
      <p className="text-success">{noOfSlotAvailable} slots available</p>
    </div>
  );
};

const BookingSlider: FC<BookingSliderProps> = () => {
  const [dates] = useState(
    [...Array(7).keys()].map((i) => new Date(Date.now() + i * 86400000))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleDates] = useState(3);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
      }, 500);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < dates.length - visibleDates) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 500);
    }
  };

  return (
    <div className="flex justify-center mb-4 items-center gap-4">
      <div
        className="rounded-full h-fit p-2 text-primary border block cursor-pointer hover:bg-blue-50"
        onClick={handlePrevClick}
      >
        <FaAngleLeft />
      </div>
      <div className={"grow flex justify-center"}>
        {dates
          .slice(currentIndex, currentIndex + visibleDates)
          .map((date, i) => {
            let time = date.toLocaleString("default", {
              month: "short",
              day: "numeric",
              weekday: "short",
            });
            let currentDate = new Date();
            let diff =
              Math.floor(
                (date.getTime() - currentDate.getTime()) / (24 * 3600 * 1000)
              ) + 1;
            return (
              <CalenderSlot
                noOfSlotAvailable={11}
                datetime={diff == 0 ? "Today" : diff > 1 ? time : "Tomorrow"}
                isSelected={i == 0}
              />
            );
          })}
      </div>
      <div
        className="rounded-full h-fit p-2 text-primary border block cursor-pointer hover:bg-blue-50"
        onClick={handleNextClick}
      >
        <FaAngleRight />
      </div>
    </div>
  );
};

export default BookingSlider;
