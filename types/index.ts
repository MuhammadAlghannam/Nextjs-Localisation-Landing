import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  btnValue?: "Send";
  btnDisable?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface TopHeadProps {
  title: string;
  desc: string;
}

export interface EduModelProps {
  supTitle1: string;
  supDesc1: string[];
  supTitle2: string;
  supDesc2: string[];
  btn: string;
}

export interface NavBarProps {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  locale?: any;
}

export interface NavLinksProps {
  id: string;
  title: string;
}

export interface NavUlProps {
  navLinks: NavLinksProps[];
  textColor?: string;
  ulStyle: string;
  liStyle?: string;
  linkStyle: string;
  handleMenu?: () => void;
}
