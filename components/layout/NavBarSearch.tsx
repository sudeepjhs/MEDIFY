"use client";

import { cityUrl, stateUrl } from "@/config/apiUrls";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC, FormEvent, Key, useEffect, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";

export type Options = {
  label: string;
  value: string;
};

const NavBarSearch: FC = () => {
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

  const onStateChangeHandler = (value: Key | null) => {
    setSelectedState(() => value);
  };

  const onCityChangeHandler = (value: Key | null) => {
    setSelectedCity(() => value);
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
    <div className="w-full h-28 relative rounded-b-2xl bg-gradient-to-r from-[#2AA7FF] to-[#0C8CE5]">
      <div className="flex items-center justify-center absolute  inset-0 top-full sm:top-3/4 z-20">
        <form
          onSubmit={onSearchClick}
          className=" flex-wrap gap-4 sm:flex-nowrap flex bg-primary-foreground rounded-2xl  shadow-xl items-center  w-4/5 p-6"
        >
          <Autocomplete
            startContent={<MdOutlineLocationOn size={20} fill="#E4E4E7" />}
            placeholder="State"
            className="md:max-w-64"
            defaultItems={state}
            aria-labelledby="state"
            onSelectionChange={onStateChangeHandler}
          >
            {(item) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>

          <Autocomplete
            startContent={<MdOutlineLocationOn size={20} fill="#E4E4E7" />}
            placeholder="City"
            className="grow"
            defaultItems={city}
            aria-labelledby="city"
            onSelectionChange={onCityChangeHandler}
          >
            {(item) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>

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
