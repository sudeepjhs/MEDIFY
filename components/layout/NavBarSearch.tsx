import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { FC } from "react";
import { MdOutlineLocationOn } from "react-icons/md";

const NavBarSearch: FC = () => {
  return (
    <div className="w-full h-28 relative rounded-b-2xl bg-gradient-to-r from-[#2AA7FF] to-[#0C8CE5]">
      <div className="flex items-center justify-center absolute  inset-0 top-3/4 z-20">
        <form className="flex-wrap gap-4 md:flex-nowrap flex bg-primary-foreground rounded-lg  shadow-xl items-center  w-4/5 p-6">
          <Input
            startContent={<MdOutlineLocationOn size={20} fill="#E4E4E7" />}
            type="search"
            placeholder="State"
          />
          <Input
            startContent={<MdOutlineLocationOn size={20} fill="#E4E4E7" />}
            className="grow-1"
            type="search"
            placeholder="City"
          />
          <Button
            className="text-lg"
            type="submit"
            size="lg"
            fullWidth
            color="primary"
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NavBarSearch;
