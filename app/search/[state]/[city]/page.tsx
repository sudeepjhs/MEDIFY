"use client";
import HospitalCard from "@/components/custom/card/HospitalCard";
import BookingSlider from "@/components/custom/hospital/BookingSlider";
import { getHospitalUrl } from "@/config/apiUrls";
import { Hospital } from "@/config/types";
import { getUpcomingDates } from "@/helper/date";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TbDiscountCheck } from "react-icons/tb";

const upcomingDates = getUpcomingDates(7);

export default function SearchResult({
  params: { state, city },
}: {
  params: { state: string; city: string };
}) {
  const [hospital, setHospital] = useState<Array<Hospital>>([]);

  useEffect(() => {
    if (!state || !city) return;
    fetch(getHospitalUrl(state, city))
      .then((res) => res.json())
      .then((data: []) => {
        setHospital(() => {
          return data.map((val) => ({
            HospitalName: val["Hospital Name"],
            State: val["State"],
            City: val["City"],
            rating: val["Hospital overall rating"],
            Address: val["Address"],
            ZIPCode: val["ZIP Code"],
            CountyName: val["County Name"],
          }));
        });
      });
  }, []);

  return (
    <div className="w-4/5">
      <div className="space-y-2">
        <h1 className="font-medium text-2xl">
          15 medical centers available in {state}
        </h1>
        <div className="flex gap-2 items-center">
          <TbDiscountCheck size={24} className="text-success" />
          <h6 className="text-default-600">
            Book appointments with minimum wait-time & verified doctor details
          </h6>
        </div>
      </div>
      <div className="flex justify-between mt-6 gap-8">
        <div className="flex flex-col gap-8">
          {hospital.map((data, i) => (
            <HospitalCard
              slotDates={upcomingDates}
              key={data.HospitalName + "-" + i}
              hospital={data}
            />
          ))}
        </div>
        <div>
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
}
