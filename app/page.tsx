// import Image from "next/image";

import { Image as NextImage } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex w-4/5">
        <div className="grow">
          <h5 className="text-3xl font-medium" >Skip the travel! Find Online</h5>

        </div>
        <div className="">
          <NextImage
            alt="doctor-image"
            src="./doctor.png"
          ></NextImage>
        </div>
      </div>
    </section>
  );
}
