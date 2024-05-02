import { VerifiedHospital } from "@/components/icons"
import { Button } from "@nextui-org/button"
import { FC } from "react";
import { FaThumbsUp } from "react-icons/fa6";

interface HospitalCardProps {
    name: string;
    location: string;
    amenities: string;
    price?: string;
    likesCount?: number
}

const HospitalCard: FC<HospitalCardProps> = ({ name, location, amenities, price = 500, likesCount = 5 }) => {
    return (
        <div className="flex bg-primary-foreground pt-6 px-10 gap-16  rounded-2xl shadow-xl ">
            <div className="flex gap-6 mb-10">
                <VerifiedHospital />
                <div className="flex flex-col mt-4 gap-2 divide-dashed divide-y">
                    <div className="flex flex-col gap-2" >
                        <h4 className="text-primary font-semibold text-2xl">{name}</h4>
                        <div className="text-sm">
                            <p className="font-bold">{location}</p>
                            <p>{amenities}</p>
                            <span>more</span>
                        </div>
                        <p className="text-default-600"><span className="text-success font-bold">Free</span><span className="line-through text-default-400" >₹{price}</span> Consultation fee at clinic</p>
                    </div>
                    <div className="pt-2">
                        <Button size="sm" color="success" className="text-primary-foreground font-bold text-sm" startContent={<FaThumbsUp size={16} />} ><span className="opacity-60">{likesCount}</span></Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end items-center gap-4 mb-6">
                <h6 className="text-success font-medium text-sm">Available Today</h6>
                <Button color="primary" radius="sm" >Book FREE Center Visit</Button>
            </div>
        </div>
    )
}

export default HospitalCard