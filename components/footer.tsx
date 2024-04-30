import { siteConfig } from "@/config/site";
import { Link as NextLink } from "@nextui-org/link";
import { Divider, Image, Input } from "@nextui-org/react";
import Link from "next/link";
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
      <section className="flex justify-center gap-4 bg-blue-50  md:pt-10 relative">
        <div>
          <Image removeWrapper src="./images/mobile-app.png" width={500} />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-5xl text-[#1B3C74]">
            <h3>Download the</h3>
            <h3><span className="text-primary" >Medify</span> App</h3>
          </div>
          <div className="mt-6">
            <strong>Get the link to download the app</strong>
            <Input
              type="tel"
              placeholder="Enter phone number"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">+91</span>
                </div>
              }
            />
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
