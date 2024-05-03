import { FC } from "react";
import { title } from "../primitives";
import { Image } from "@nextui-org/react";
import { StarCheck } from "../icons";
import { MdPhoneInTalk } from "react-icons/md";

const caption = [
  "Stay Updated About Your Health",
  "Check Your Results Online",
  "Manage Your Appointments",
];

const PatientCaring: FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center py-10 px-6 gap-16 bg-blue-50 lg:min-w-[450px]">
      <div className=" hidden lg:block relative float-end">
        <Image loading="lazy" src="/images/pc-2.png" />
        <div className="absolute top-1/3 -left-1/2 z-10">
          <Image loading="lazy" src="/images/pc-1.png" />
        </div>
        <div className="absolute shadow-xl -left-1/2  top-10 z-20 gap-1 flex flex-col items-center bg-primary-foreground p-3 rounded-lg">
          <div className="flex gap-2 items-center">
            <div className="text-primary-foreground p-2 bg-primary rounded-xl">
              <MdPhoneInTalk size={24} />
            </div>
            <h6 className="text-primary-800 font-bold ">Free Consultation</h6>
          </div>
          <div>
            <p className="text-default-500">Consultation with the best</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-1/3 md:my-20">
        <h6 className="text-primary">
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </h6>
        <h3 className={title({ color: "blue" })}>
          Patient <span className="text-primary">Caring</span>
        </h3>
        <p className="my-4 text-default-600">
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <ul className="flex flex-col gap-4">
          {caption.map((data, i) => (
            <li
              key={"patient-caring-caption-" + i}
              className="flex gap-4 items-center"
            >
              <StarCheck />
              <span className="text-primary-800 font-semibold">{data}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PatientCaring;
