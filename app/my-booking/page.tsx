"use client";
import HospitalCard from "@/components/custom/card/HospitalCard";
import { HospitalEntity, TimeType } from "@/config/types";
import { formatDate } from "@/helper/date";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SearchBooking from "./SearchBooking";

const MyBooking = () => {
  const [booking, setBooking] = useState<Array<HospitalEntity>>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let myBooking = localStorage.getItem("mybooking");
    if (!myBooking) return;
    const bookingList: Array<HospitalEntity> = JSON.parse(myBooking);
    setBooking(() => bookingList);
    setIsLoaded(!isLoaded);
  }, []);

  return (
    <div>
      <SearchBooking />
      <div className="flex justify-center py-24 md:py-16 px-10 md:gap-8 bg-blue-50">
        {isLoaded ? (
          <div className="flex flex-col gap-8 overflow-hidden">
            {booking.map((data, i) => (
              <HospitalCard
                key={data.hospital.HospitalName + "-" + i}
                hospital={data.hospital}
                showBooked
                bookedDate={formatDate(data.date)}
                bookedTime={
                  data.time +
                  (data.timeType == TimeType.Morning ? " AM" : " PM")
                }
              />
            ))}
          </div>
        ) : (
          <div className="w-full space-y-6">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        )}
        <div className="hidden lg:block">
          <Image
            src={"/images/ad/offer-1.png"}
            height={300}
            width={350}
            alt="offer"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
