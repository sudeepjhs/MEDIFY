import { IconType } from "react-icons";

export interface Hospital {
  ProviderID: string;
  HospitalName: string;
  Address: string;
  City: string;
  State: string;
  ZIPCode: number;
  CountyName: string;
  PhoneNumber: number;
  HospitalType: string;
  HospitalOwnership: string;
  EmergencyServices: string;
  EHRs: string;
  rating: number;
  footnote: string;
  MNcomparison: string;
  MNComparisonFootnote: string;
  SNcomparison: string;
  SNComparisonFootnote: string;
  RNComparison: string;
  RNComparisonFootnote: string;
  PNComparison: string;
  PNComparisonFootnote: string;
  ENComparison: string;
  ENComparisonFootnote: string;
  FNComparison: string;
  FNComparisonFootnote: string;
  EMINComparison: string;
  EMINComparisonfootnote: string;
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
