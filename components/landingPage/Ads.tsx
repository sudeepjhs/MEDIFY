"use client";

import { FC } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Image } from "@nextui-org/react";
import "../../styles/swiper.css"
const advList = [
    {
        url: "/images/ad/ad-1.png",
        name: "ad-1"
    },
    {
        url: "/images/ad/ad-2.png",
        name: "ad-2"
    },
    {
        url: "/images/ad/ad-1.png",
        name: "ad-1"
    },
    {
        url: "/images/ad/ad-2.png",
        name: "ad-2"
    }
]

const Ads: FC = () => {
    return (
        <section className="relative m-auto w-4/5 flex md:pt-40 pb-10">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {advList.map((adv, i) => <SwiperSlide key={`${adv.name}-${i}`} > <Image src={adv.url} alt={adv.name} /> </SwiperSlide>)}
            </Swiper>
        </section>
    )
}

export default Ads