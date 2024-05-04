"use client";
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";

const SearchBooking = () => {
  return (
    <div className="w-full h-28 flex justify-center items-center rounded-b-2xl bg-gradient-to-r px-6 from-[#2AA7FF] to-[#0C8CE5]">
      <div className="lg:w-4/5 grid grid-cols-4 gap-4 justify-center items-center">
        <h1 className=" text-lg md:text-2xl lg:text-4xl col-span-1 font-bold text-primary-foreground">
          My Booking
        </h1>
        <div className="relative col-span-3">
          <div className="grow absolute z-20 w-full justify-center">
            <form
              //   onSubmit={onSearchClick}
              className="grid grid-cols-3 gap-4 bg-primary-foreground rounded-2xl  shadow-xl items-center p-6"
            >
              <Autocomplete
                placeholder="Search by Hospital"
                defaultItems={[]}
                className="col-span-3 sm:col-span-2"
                aria-labelledby="Search by Hospital"
                // onSelectionChange={onStateChangeHandler}
              >
                {(item) => (
                  <AutocompleteItem key={item}>{item}</AutocompleteItem>
                )}
              </Autocomplete>
              <div className="col-span-3 sm:col-span-1">
                <Button
                  className="text-lg"
                  type="submit"
                  fullWidth
                  color="primary"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBooking;
