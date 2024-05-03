import { FC } from "react";
import { CardIconButton } from "../custom/button/CardButton";
import {
  FaClinicMedical,
  FaHandHoldingHeart,
  FaHospital,
  FaUserMd,
} from "react-icons/fa";
import { title } from "../primitives";
import { IconType } from "react-icons";

const FamilyCardWidget: FC<{
  text1: string;
  text2: string;
  Icon: IconType;
  iconWrapperStyle?: string;
  iconColor?: string;
  className?: string;
}> = ({ text1, text2, Icon, iconWrapperStyle, iconColor, className }) => {
  return (
    <CardIconButton
      className={"min-w-full md:min-w-52" + className}
      Icon={Icon}
      iconColor={iconColor}
      iconWrapperStyle={"p-4 rounded-full " + iconWrapperStyle}
      label={
        <div className="space-y-4 text-center">
          <div className={title({ color: "blue" })}>{text1}</div>
          <h6 className="text-default-600 font-medium">{text2}</h6>
        </div>
      }
    />
  );
};

const Family: FC = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center py-10 gap-6 md:gap-12 px-6 bg-blue-50">
      <div className="max-w-lg flex flex-col gap-4">
        <h6 className="text-primary">
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </h6>
        <h2 className={title({ color: "blue" })}>Our Families</h2>
        <p className="font-medium text-default-600 leading-9">
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className=" flex gap-6">
        <div className="flex flex-col gap-6">
          <FamilyCardWidget
            text1="5000+"
            text2="Happy Patients"
            iconWrapperStyle="bg-blue-100"
            Icon={FaHandHoldingHeart}
          />
          <FamilyCardWidget
            text1="1000+"
            text2="Laboratories"
            iconColor="#FFB200"
            iconWrapperStyle="bg-yellow-100"
            Icon={FaClinicMedical}
          />
        </div>
        <div className="flex flex-col gap-6 mt-16">
          <FamilyCardWidget
            text1="200+"
            text2="Hospitals"
            iconColor="#FF684C"
            iconWrapperStyle="bg-orange-100"
            Icon={FaHospital}
          />
          <FamilyCardWidget
            text1="700+"
            text2="Expert Doctors"
            iconColor="#4CD080"
            iconWrapperStyle="bg-green-100"
            Icon={FaUserMd}
          />
        </div>
      </div>
    </section>
  );
};

export default Family;
