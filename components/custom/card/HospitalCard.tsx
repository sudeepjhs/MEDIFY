import { VerifiedHospital } from "@/components/icons";
import { Hospital } from "@/config/types";
import { Button } from "@nextui-org/button";
import { FC } from "react";
import { FaThumbsUp } from "react-icons/fa6";
import BookingSlider from "../hospital/BookingSlider";

const HospitalCard: FC<{ hospital: Hospital; className?: string }> = ({
  hospital,
  className,
}) => {
  return (
    <div
      className={
        "bg-primary-foreground pt-6 px-10 shadow-xl rounded-2xl " + className
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
              <p className="text-default-600">
                <span className="text-success font-bold">Free</span>
                <span className="line-through text-default-400">₹{500}</span>
                Consultation fee at clinic
              </p>
            </div>
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
          </div>
        </div>
        <div className="flex flex-col justify-end items-center gap-4 mb-6">
          <h6 className="text-success font-medium text-sm">Available Today</h6>
          <Button color="primary" radius="sm">
            Book FREE Center Visit
          </Button>
        </div>
      </div>
      <BookingSlider />
    </div>
  );
};

export default HospitalCard;
