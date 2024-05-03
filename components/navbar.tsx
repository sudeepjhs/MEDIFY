import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";

import { LogoWithName } from "@/components/icons";
import { Button } from "@nextui-org/button";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" className=" pt-2" position="sticky">
      <NavbarContent className="basis-full">
        <NavbarBrand as="li" className="gap-3 w-1/5">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <LogoWithName />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden w-full lg:flex gap-10 items-center justify-center ml-2">
          {siteConfig.navItems.map((item, i) => (
            <NavbarItem key={"nav-link-" + i + "-" + item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "py-4 border-primary",
                  "data-[active=true]:text-primary data-[active=true]:font-medium data-[active=true]:border-b-5"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          <NavbarItem key={"My Booking"}>
            <Button color="primary" size="lg">
              My Booking
            </Button>
          </NavbarItem>
        </ul>
        {/* <ThemeSwitch /> */}
      </NavbarContent>
      <NavbarContent className=" lg:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
