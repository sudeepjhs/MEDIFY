"use client";

import { title } from "../primitives"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Image } from "@nextui-org/react";
import "../../styles/swiper.css"
import { FC } from "react";

const doctorList = [
    {
        url: "./images/doctors/doctor-ahmad.png",
        name: "doctor-ahmad"
    },
    {
        url: "./images/doctors/doctor-heena.png",
        name: "doctor-heena"
    },
    {
        url: "./images/doctors/doctor-ankur.png",
        name: "doctor-ankur"
    },
    {
        url: "./images/doctors/doctor-ahmad.png",
        name: "doctor-ahmad"
    },
    {
        url: "./images/doctors/doctor-heena.png",
        name: "doctor-heena"
    },
    {
        url: "./images/doctors/doctor-ankur.png",
        name: "doctor-ankur"
    },
]

const DoctorSpecialisation: FC = () => {
    return (
        <section className="flex flex-col relative items-center justify-center py-10 gap-10">
            <h3 className={title({ color: "blue" })}>Our Medical Specialist</h3>
            <div className="block w-full">
                <Swiper
                    slidesPerView={3}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    {doctorList.map((doc, i) => <SwiperSlide key={`${doc.name}-${i}`} ><Image loading="lazy" src={doc.url} alt={doc.name} /> </SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    )
}

export default DoctorSpecialisation