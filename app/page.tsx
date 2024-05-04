"use client";

import { CardIconButton } from "@/components/custom/button/CardButton";
import Ads from "@/components/landingPage/Ads";
import BlogNews from "@/components/landingPage/BlogNews";
import DoctorSpecialisation from "@/components/landingPage/DoctorSpecialisation";
import Family from "@/components/landingPage/Family";
import PatientCaring from "@/components/landingPage/PatientCaring";
import Specialisation from "@/components/landingPage/Specialisation";
import Faq from "@/components/layout/Faq";
import { Options } from "@/components/layout/NavBarSearch";
import { cityUrl, stateUrl } from "@/config/apiUrls";
import { CustomIconButton } from "@/config/types";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FormEvent, Key, useEffect, useState } from "react";
import {
  FaAmbulance,
  FaClinicMedical,
  FaHospital,
  FaSearch,
  FaUserMd,
} from "react-icons/fa";
import { RiCapsuleLine } from "react-icons/ri";

const ButtonList: Array<CustomIconButton> = [
  {
    Icon: FaUserMd,
    label: "Doctors",
  },
  {
    Icon: FaClinicMedical,
    label: "Labs",
  },
  {
    Icon: FaHospital,
    label: "Hospitals",
  },
  {
    Icon: RiCapsuleLine,
    label: "Medical Store",
  },
  {
    Icon: FaAmbulance,
    label: "Ambulance",
  },
];

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState<Array<Options>>([]);
  const [city, setCity] = useState<Array<Options>>([]);
  const [selectedState, setSelectedState] = useState<Key | null>(null);
  const [selectedCity, setSelectedCity] = useState<Key | null>(null);
  useEffect(() => {
    fetch(stateUrl)
      .then((res) => res.json())
      .then((data: []) => {
        setState(() => {
          return data.map((s) => ({ label: s, value: s }));
        });
      });
  }, []);

  const onStateChangeHandler = (key: Key | null) => {
    setSelectedState(() => key);
  };

  const onCityChangeHandler = (key: Key | null) => {
    setSelectedCity(() => key);
  };

  const onSearchClick = (e: FormEvent) => {
    e.preventDefault();
    if (selectedState && selectedCity)
      router.push(`/search/${selectedState}/${selectedCity}`);
  };

  useEffect(() => {
    if (selectedState)
      fetch(cityUrl(selectedState as string))
        .then((res) => res.json())
        .then((data: []) => {
          setCity(() => {
            return data.map((s) => ({ label: s, value: s }));
          });
          setSelectedCity(() => null);
        });
  }, [selectedState]);

  return (
    <>
      <section className="flex flex-col relative items-center justify-center gap-4  pt-10 bg-blue-50 pb-24 md:pb-40">
        <div className="flex w-4/5">
          <div className="grow">
            <div className="lg:w-4/6 flex flex-col gap-3 ">
              <h5 className="xl:text-2xl lg:text-xl font-medium">
                Skip the travel! Find Online
              </h5>
              <h3 className="font-bold text-sm xl:text-5xl md:text-4xl">
                Medical <span className="text-primary">Centers</span>
              </h3>
              <h6 className="text-[#5C6169] text-sm xl:text-xl md:text-lg">
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </h6>
              <div>
                <Button color="primary" size="lg">
                  Find Centers
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              alt="doctor-image"
              loading="eager"
              src="/images/doctor.png"
            ></Image>
          </div>
        </div>
        <div className="absolute flex flex-col gap-5 top-3/4 md:top-2/3 bg-primary-foreground rounded-xl  shadow-xl z-20 w-4/5 p-10">
          <form
            className="flex flex-col sm:flex-row gap-5 justify-around"
            onSubmit={onSearchClick}
          >
            <Autocomplete
              startContent={<FaSearch fill="#E4E4E7" />}
              placeholder="State"
              className="max-w-64"
              defaultItems={state}
              aria-labelledby="state"
              onSelectionChange={onStateChangeHandler}
            >
              {(item) => (
                <AutocompleteItem key={item.value}>
                  {item.label}
                </AutocompleteItem>
              )}
            </Autocomplete>

            <Autocomplete
              startContent={<FaSearch fill="#E4E4E7" />}
              placeholder="City"
              className="max-w-64"
              defaultItems={city}
              aria-labelledby="city"
              onSelectionChange={onCityChangeHandler}
            >
              {(item) => (
                <AutocompleteItem key={item.value}>
                  {item.label}
                </AutocompleteItem>
              )}
            </Autocomplete>

            <div className="w-full">
              <Button
                startContent={<FaSearch />}
                className="text-lg"
                type="submit"
                size="lg"
                fullWidth
                color="primary"
              >
                Search
              </Button>
            </div>
          </form>
          <div className="hidden lg:flex flex-col justify-center gap-4">
            <strong className="text-center">You may be looking for</strong>
            <div className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-5 w-full justify-evenly">
              {ButtonList.map((item, i) => (
                <CardIconButton
                  clickable
                  className="min-w-full"
                  Icon={item.Icon}
                  label={item.label}
                  key={`icon-button-${i}-${item.href || "#"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Ads />
      <Specialisation />
      <DoctorSpecialisation />
      <PatientCaring />
      <BlogNews />
      <Family />
      <Faq />
    </>
  );
}
