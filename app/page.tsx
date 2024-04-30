import { CardIconButton, IconButton } from "@/components/custom/button/CardButton";
import { Button, Image, Input } from "@nextui-org/react";
import { FaAmbulance, FaClinicMedical, FaHospital, FaSearch, FaUserMd } from "react-icons/fa";
import { RiCapsuleLine } from "react-icons/ri";



const ButtonList: Array<IconButton> = [
  {
    Icon: FaUserMd,
    label: "Doctors",
  },
  {
    Icon: FaClinicMedical,
    label: "Labs",
  }, {
    Icon: FaHospital,
    label: "Hospitals",
  }, {
    Icon: RiCapsuleLine,
    label: "Medical Store",
  }, {
    Icon: FaAmbulance,
    label: "Ambulance",
  },
]

export default function Home() {
  return (
    <>
      <section className="flex flex-col relative items-center justify-center gap-4  md:pt-10 bg-blue-50 md:pb-40">
        <div className="flex w-4/5">
          <div className="grow">
            <div className="lg:w-4/6 flex flex-col gap-3 ">
              <h5 className="text-2xl font-medium">Skip the travel! Find Online</h5>
              <h3 className="font-bold text-5xl" >Medical <span className="text-primary" >Centers</span></h3>
              <h6 className="text-[#5C6169] text-xl">Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</h6>
              <div><Button color="primary" size="lg">Find Centers</Button></div>
            </div>
          </div>
          <div>
            <Image
              alt="doctor-image"
              src="./images/doctor.png"
            ></Image>
          </div>
        </div>
        <div className="absolute flex flex-col gap-5 md:top-2/3 bg-primary-foreground rounded-xl  shadow-xl z-20 w-4/5 p-10">
          <form className="flex gap-5 justify-around">

            <Input
              startContent={<FaSearch fill="#E4E4E7" />}
              type="search"
              placeholder="State"
              className="max-w-64"
            />

            <Input
              startContent={<FaSearch fill="#E4E4E7" />}
              type="search"
              placeholder="City"
              className="max-w-64"
            />

            <Button
              startContent={<FaSearch />}
              className="text-lg"
              type="submit"
              size="lg"
              color="primary"
            >
              Search
            </Button>

          </form>
          <div className="flex flex-col justify-center gap-4" >
            <strong className="text-center">You may be looking for</strong>
            <div className="flex  w-full justify-evenly" >
              {ButtonList.map((item, i) => <CardIconButton className="lg:min-w-48" Icon={item.Icon} label={item.label} key={`icon-button-${i}-${item.href || "#"}`} />)}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col relative items-center justify-center gap-4 py-8 md:pt-40" >

      </section>
    </>
  );
}
