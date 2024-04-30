import { siteConfig } from "@/config/site";
import { FC } from "react";

const Banner: FC = () => {
  return (
    <div className=" w-full bg-primary py-4 text-white flex justify-center">
      <p>{siteConfig.bannerText}</p>
    </div>
  );
};

export default Banner;
