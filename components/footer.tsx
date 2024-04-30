"use client";

import { siteConfig } from "@/config/site";
import { Link as NextLink } from "@nextui-org/link";
import { Button, Divider, Image, Input } from "@nextui-org/react";
import Link from "next/link";
import { FaGooglePlay, FaApple } from "react-icons/fa";

import { FC } from "react";
import {
  FaFacebookF,
  FaPinterest,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { LogoWithName } from "./icons";

const FooterLink: FC<{ label: string; href?: string }> = ({
  label,
  href = "#",
}) => {
  return (
    <li className="flex gap-1 items-center">
      <MdOutlineArrowForwardIos fill="white" height={15} width={10} />
      <NextLink href={href} className="text-white" as={Link}>
        {label}
      </NextLink>
    </li>
  );
};

const Footer: FC = () => {
  return (
    <>
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
                startContent={<FaGooglePlay size={24}  />}
                className="bg-black text-white"
              >
                Google Play
              </Button>
              <Button
                startContent={<FaApple size={24} />}
                size="lg"
                className="bg-black text-white"
              >
                App Store
              </Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full flex  items-center bg-blue-800 justify-center py-10">
        <div className="flex flex-col w-4/5 gap-4">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2 flex flex-col justify-between pb-2 ">
              <LogoWithName />
              <div className="flex gap-2">
                <NextLink
                  className=" p-2 rounded-full bg-blue-50"
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                >
                  <FaFacebookF />
                </NextLink>
                <NextLink
                  className=" p-2 rounded-full bg-blue-50"
                  href={siteConfig.socialLinks.twitter}
                  target="_blank"
                >
                  <FaXTwitter />
                </NextLink>
                <NextLink
                  className=" p-2 rounded-full bg-blue-50"
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                >
                  <FaYoutube />
                </NextLink>
                <NextLink
                  className=" p-2 rounded-full bg-blue-50"
                  href={siteConfig.socialLinks.pinterest}
                  target="_blank"
                >
                  <FaPinterest />
                </NextLink>
              </div>
            </div>
            {siteConfig.footer.navItems.map((list, i) => {
              return (
                <div key={"footer-nav-list-" + i}>
                  <ul className="flex flex-col gap-2">
                    {list.map((item, j) => (
                      <FooterLink
                        label={item.label}
                        href={item.href}
                        key={`footer-nav-${i}-item-${j}`}
                      />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <Divider />
          <div className=" text-white">
            <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
