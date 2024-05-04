import { VerifiedHospital } from "@/components/icons";
import { Hospital, HospitalEntity, TimeType } from "@/config/types";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/react";
import clsx from "clsx";
import { FC, useState } from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { toast } from "react-toastify";
import BookingSlider from "../hospital/BookingSlider";

const HospitalCard: FC<{
  hospital: Hospital;
  className?: string;
  slotDates?: Array<Date>;
  showBooked?: boolean;
  bookedDate?: string;
  bookedTime?: string;
}> = ({
  hospital,
  className,
  slotDates,
  showBooked,
  bookedDate,
  bookedTime,
}) => {
  const [showSlot, setShowSlot] = useState(false);

  const bookAppointment = (date: Date, time: string, timeType: TimeType) => {
    try {
      const data: HospitalEntity = { hospital, date, time, timeType };
      let myBooking = localStorage.getItem("mybooking");
      if (!myBooking) {
        localStorage.setItem("mybooking", JSON.stringify([data]));
        return;
      }
      const booking: Array<HospitalEntity> = JSON.parse(myBooking);
      booking.push(data);
      localStorage.setItem("mybooking", JSON.stringify(booking));
      toast.success("Appointment Confirmed");
    } catch (e) {
      if (e instanceof Error) toast.error(e.message);
      else if (typeof e === "string") toast.error(e);
    }
  };

  return (
    <div
      className={
        "bg-primary-foreground py-6 md:px-10 shadow-xl rounded-2xl " + className
      }
    >
      <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-10">
        <div className="flex gap-6 md:mb-10 grow">
          <VerifiedHospital size={100} />
          <div
            className={clsx(
              "flex flex-col mt-4 gap-2",
              !showBooked && "divide-dashed divide-y"
            )}
          >
            <div className="flex flex-col gap-2">
              <h4 className="text-primary font-semibold sm:text-lg lg:text-2xl">
                {hospital.HospitalName}
              </h4>
              <div className="md:text-sm text-xs">
                <p className="font-bold">{`${hospital.City}, ${hospital.State}`}</p>
                <p>Smilessence Center for Advanced Dentistry + 1</p>
                <span>more</span>
              </div>
              {!showBooked && (
                <p className="text-default-600 space-x-2 md:text-medium text-xs">
                  <span className="text-success font-bold">Free</span>
                  <span className="line-through text-default-400">₹{500}</span>
                  <span>Consultation fee at clinic</span>
                </p>
              )}
            </div>
            {!showSlot && (
              <div className="pt-2">
                <Button
                  size="sm"
                  color="success"
                  className="text-primary-foreground font-bold text-sm"
                  startContent={<FaThumbsUp size={16} />}
                >
                  <span className="opacity-60">{hospital.rating}</span>
                </Button>
              </div>
            )}
          </div>
        </div>
        <div
          className={clsx(
            "flex justify-center gap-4 w-full md:w-fit",
            !showBooked && "flex-col items-center md:justify-end mb-6"
          )}
        >
          {!showBooked ? (
            <>
              <h6 className="text-success font-medium text-sm">
                Available Today
              </h6>
              <Button
                color="primary"
                radius="sm"
                onClick={() => setShowSlot(true)}
              >
                Book FREE Center Visit
              </Button>
            </>
          ) : (
            <div className="p-3 flex flex-row lg:justify-center w-full gap-4">
              <Chip radius="sm" variant="bordered" color="primary" size="lg">
                {bookedTime}
              </Chip>
              <Chip radius="sm" variant="bordered" color="success" size="lg">
                {bookedDate}
              </Chip>
            </div>
          )}
        </div>
      </div>
      {showSlot && (
        <BookingSlider
          bookingHandler={bookAppointment}
          dates={slotDates || []}
        />
      )}
    </div>
  );
};

export default HospitalCard;
