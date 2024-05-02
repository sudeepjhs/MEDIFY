import HospitalCard from "@/components/custom/card/HospitalCard";
import { VerifiedHospital } from "@/components/icons";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa6";
import { TbDiscountCheck } from "react-icons/tb";

export default function SearchResult({ params: { state, city } }: { params: { state: string, city: string } }) {

    return (<div className="w-4/5">
        <div className="space-y-2">
            <h1 className="font-medium text-2xl">15 medical centers available in {state}</h1>
            <div className="flex gap-2 items-center">
                <TbDiscountCheck size={24} className="text-success" />
                <h6 className="text-default-600">Book appointments with minimum wait-time & verified doctor details</h6>
            </div>
        </div>
        <div className="flex justify-between mt-6">
            <div className="flex flex-col gap-8">
                <HospitalCard name="Fortis Hospital Richmond Road" location="Banglore, Karnataka" amenities="Smilessence Center for Advanced Dentistry + 1" />
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
        </div>)
}