import { VerifiedHospital } from "@/components/icons";
import { Hospital, TimeType } from "@/config/types";
import { Button } from "@nextui-org/button";
import { FC, useState } from "react";
import { FaThumbsUp } from "react-icons/fa6";
import BookingSlider from "../hospital/BookingSlider";
import { toast } from "react-toastify";

const HospitalCard: FC<{
  hospital: Hospital;
  className?: string;
  slotDates?: Array<Date>;
}> = ({ hospital, className, slotDates }) => {
  const [showSlot, setShowSlot] = useState(false);

  const bookAppointment = (date: Date, time: string, timeType: TimeType) => {
    try {
      const data = { hospital, date, time, timeType };
      let myBooking = localStorage.getItem("mybooking");
      if (!myBooking) {
        localStorage.setItem("mybooking", JSON.stringify([data]));
        return;
      }
      const booking: Array<typeof data> = JSON.parse(myBooking);
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
        "bg-primary-foreground py-6 px-10 shadow-xl rounded-2xl " + className
      }
    >
      <div className="flex gap-10">
        <div className="flex gap-6 mb-10 grow">
          <VerifiedHospital />
          <div className="flex flex-col mt-4 gap-2 divide-dashed divide-y">
            <div className="flex flex-col gap-2">
              <h4 className="text-primary font-semibold text-2xl">
                {hospital.HospitalName}
              </h4>
              <div className="text-sm">
                <p className="font-bold">{`${hospital.City}, ${hospital.State}`}</p>
                <p>Smilessence Center for Advanced Dentistry + 1</p>
                <span>more</span>
              </div>
              <p className="text-default-600 space-x-2">
                <span className="text-success font-bold">Free</span>
                <span className="line-through text-default-400">₹{500}</span>
                <span>Consultation fee at clinic</span>
              </p>
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
        <div className="flex flex-col justify-end items-center gap-4 mb-6">
          <h6 className="text-success font-medium text-sm">Available Today</h6>
          <Button color="primary" radius="sm" onClick={() => setShowSlot(true)}>
            Book FREE Center Visit
          </Button>
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
