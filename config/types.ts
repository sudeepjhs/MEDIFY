import { IconType } from "react-icons";

export interface Hospital {
  HospitalName: string;
  Address: string;
  City: string;
  State: string;
  ZIPCode: number;
  CountyName?: string;
  PhoneNumber?: number;
  HospitalType?: string;
  HospitalOwnership?: string;
  rating: number;
}

export interface Post {
  url?: string;
  postImageUrl: string;
  category: string;
  datetime: string;
  title: string;
  user: {
    profileImg?: string;
    username: string;
  };
}
export interface CustomIconButton {
  Icon: IconType;
  href?: string;
  label: string | JSX.Element;
}
