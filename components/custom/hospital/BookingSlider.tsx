import { TimeType } from "@/config/types";
import { Button } from "@nextui-org/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import clsx from "clsx";
import { FC, MouseEvent, MouseEventHandler, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface BookingSliderProps {
  dates: Array<Date>;
  datesPerSlide?: number;
  bookingHandler: (date: Date, time: string, timeType: TimeType) => void;
}

const CalenderSlot: FC<{
  isSelected?: boolean;
  noOfSlotAvailable: number;
  label: string;
  date: Date;
  onClick?: MouseEventHandler<HTMLDivElement>;
}> = ({ isSelected, noOfSlotAvailable, label, onClick, date }) => {
  return (
    <div
      data-selected={isSelected}
      className={clsx(
        "flex border-b-5 flex-col cursor-pointer grow justify-center items-center px-6 py-2 data-[selected=true]:border-b-primary data-[selected=false]: border-b-gray-300"
      )}
      data-date={date}
      onClick={onClick}
    >
      <span>{label}</span>
      <p className="text-success">{noOfSlotAvailable} slots available</p>
    </div>
  );
};

const timeSlot = {
  morning: ["11:30"],
  afternoon: ["12:00 ", "12:30 ", "1:30 ", "2:00 ", "2:30 "],
  evening: ["06:00 ", "06:30 ", "07:00 ", "07:30 "],
};

const BookingSlider: FC<BookingSliderProps> = ({
  dates,
  datesPerSlide = 3,
  bookingHandler,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
      }, 500);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < dates.length - datesPerSlide) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 500);
    }
  };

  const handleDateClick = (e: MouseEvent<HTMLDivElement>) => {
    let target = e.target as HTMLElement;
    if (target.nodeName !== "DIV") {
      target = target.parentElement!;
    }
    const datestring = target.dataset.date;
    if (!datestring) return;
    setSelectedDate(() => new Date(datestring));
  };

  const handleBookingClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const selectedtime = button.dataset.time?.trim();
    const selectedTimeType = button.dataset.timetype;
    if (!selectedtime || !selectedTimeType) return;
    bookingHandler(selectedDate, selectedtime, selectedTimeType as TimeType);
  };

  return (
    <div>
      <div className="flex justify-center mb-4 items-center gap-4">
        <div
          className="rounded-full h-fit p-2 text-primary border block cursor-pointer hover:bg-blue-50"
          onClick={handlePrevClick}
        >
          <FaAngleLeft />
        </div>
        <div className={"grow flex justify-center"}>
          {dates
            .slice(currentIndex, currentIndex + datesPerSlide)
            .map((date, i) => {
              let time = date.toLocaleString("default", {
                month: "short",
                day: "numeric",
                weekday: "short",
              });
              return (
                <CalenderSlot
                  key={`calender-${time}-i`}
                  noOfSlotAvailable={11}
                  label={
                    currentIndex == 0 && i == 0
                      ? "Today"
                      : (currentIndex == 1 && i == 0) ||
                        (currentIndex == 0 && i == 1)
                      ? "Tomorrow"
                      : time
                  }
                  date={date}
                  onClick={handleDateClick}
                  isSelected={date.getDate() === selectedDate.getDate()}
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
      <div className="flex flex-col divide-y divide-solid px-4">
        <div className="grid grid-cols-6 gap-6 p-3 grid-rows-1">
          <div className="col-end-2">Morning</div>
          <div className="grid col-span-4 grid-cols-5 gap-4">
            {timeSlot.morning.map((time) => (
              <Popover
                key={`${selectedDate}-${time}-morning`}
                placement="bottom"
                showArrow={true}
              >
                <PopoverTrigger>
                  <Button variant="ghost" size="sm" radius="sm" color="primary">
                    {time} AM
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  {(titleProps) => (
                    <div className="px-1 py-2 w-full">
                      <p
                        className="text-small font-bold text-foreground"
                        {...titleProps}
                      >
                        Are you sure to book ?
                      </p>
                      <div className="mt-2 flex flex-col gap-2 w-full">
                        <Button
                          color="primary"
                          size="sm"
                          onClick={handleBookingClick}
                          data-time={time}
                          data-timetype={TimeType.Morning}
                        >
                          Yes
                        </Button>
                      </div>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6 p-3 grid-rows-1">
          <div className="col-end-2">Afternoon</div>
          <div className="grid col-span-4 grid-cols-5 gap-4">
            {timeSlot.afternoon.map((time) => (
              <Popover
                key={`${selectedDate}-${time}-afternoon`}
                placement="bottom"
                showArrow={true}
              >
                <PopoverTrigger>
                  <Button variant="ghost" size="sm" radius="sm" color="primary">
                    {time} PM
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  {(titleProps) => (
                    <div className="px-1 py-2 w-full">
                      <p
                        className="text-small font-bold text-foreground"
                        {...titleProps}
                      >
                        Are you sure to book ?
                      </p>
                      <div className="mt-2 flex flex-col gap-2 w-full">
                        <Button
                          color="primary"
                          size="sm"
                          onClick={handleBookingClick}
                          data-time={time}
                          data-timetype={TimeType.Afternoon}
                        >
                          Yes
                        </Button>
                      </div>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6 p-3 grid-rows-1">
          <div className="col-end-2">Evening</div>
          <div className="grid col-span-4 grid-cols-5 gap-4">
            {timeSlot.evening.map((time) => (
              <Popover
                key={`${selectedDate}-${time}-evening`}
                placement="bottom"
                showArrow={true}
              >
                <PopoverTrigger>
                  <Button variant="ghost" size="sm" radius="sm" color="primary">
                    {time} PM
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  {(titleProps) => (
                    <div className="px-1 py-2 w-full">
                      <p
                        className="text-small font-bold text-foreground"
                        {...titleProps}
                      >
                        Are you sure to book ?
                      </p>
                      <div className="mt-2 flex flex-col gap-2 w-full">
                        <Button
                          color="primary"
                          size="sm"
                          onClick={handleBookingClick}
                          data-time={time}
                          data-timetype={TimeType.Evening}
                        >
                          Yes
                        </Button>
                      </div>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSlider;
