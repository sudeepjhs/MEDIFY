import { Button, Image, Input } from "@nextui-org/react";
import { FC } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import NextLink from "next/link";
import { title } from "../primitives";
const MobileApp: FC = () => {
  return (
    <section className="flex justify-center gap-8 bg-blue-100 px-6 pb-10  md:pb-0  pt-10 relative w-full">
      <div className="hidden md:block">
        <Image removeWrapper src="/images/mobile-app.png" width={500} />
      </div>
      <div className="flex md:mt-12 gap-6">
        <div className="mt-10 hidden lg:block">
          <Image src="/images/arrow.png" width={50} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-semibold flex flex-col lg:gap-4 ">
            <h3 className={title({ color: "blue" })}>Download the</h3>
            <h3 className={title({ color: "blue" })}>
              <span className="text-primary">Medify</span> App
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <strong className="text-sm sm:text-medium">
              Get the link to download the app
            </strong>
            <div className="flex gap-4">
              <div>
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-small">+91</span>
                    </div>
                  }
                />
              </div>
              <div>
                <Button color="primary">Send SMS</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
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
