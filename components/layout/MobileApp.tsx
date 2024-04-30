import { Button, Image, Input } from "@nextui-org/react";
import { FC } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import NextLink from "next/link";
const MobileApp: FC = () => {
  return (
    <section className="flex justify-center gap-8 bg-blue-50  md:pt-10 relative w-full">
      <div className="">
        <Image removeWrapper src="./images/mobile-app.png" width={500} />
      </div>
      <div className="flex mt-12 gap-6">
        <div className="mt-10">
          <Image src="./images/arrow.png" width={50} />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold flex flex-col gap-4 text-5xl text-[#1B3C74]">
            <h3>Download the</h3>
            <h3>
              <span className="text-primary">Medify</span> App
            </h3>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <strong>Get the link to download the app</strong>
            <div className="flex gap-4">
              <Input
                type="tel"
                placeholder="Enter phone number"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-small">+91</span>
                  </div>
                }
              />
              <Button color="primary">Send SMS</Button>
            </div>
          </div>
          <div className="flex mt-10 gap-6">
            <Button
              size="lg"
              as={NextLink}
              href="#"
              startContent={<FaGooglePlay size={24} />}
              className="bg-black text-white"
            >
              Google Play
            </Button>
            <Button
              startContent={<FaApple size={24} />}
              as={NextLink}
              href="#"
              size="lg"
              className="bg-black text-white"
            >
              App Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
