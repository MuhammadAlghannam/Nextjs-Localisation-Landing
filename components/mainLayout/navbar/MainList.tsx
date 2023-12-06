"use client";

// next intl
import Link from "next-intl/link";

// data
import { useNavLinks } from "@/utils/data";

// componenets
import CustomButton from "@/components/custom/component/CustomButton";
import CustomeUl from "./CustomeUl";

// types
export interface ListProps {
  textColor: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  locale: any;
}

export default function MainList({
  textColor,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  locale,
}: ListProps) {
  const { navLinks } = useNavLinks(
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7
  );

  return (
    <div className="flex items-center gap-9">
      {/* nav list */}
      <CustomeUl
        navLinks={navLinks}
        textColor={textColor}
        ulStyle="flex items-center gap-9"
        liStyle="relative navlink"
        linkStyle="font-semibold cursor-pointer text-md"
      />

      {/* button */}
      {locale === "en" ? (
        <Link href="/" locale="ar">
          <CustomButton
            title="Ar"
            containerStyles="bg-secondary font-semibold text-md text-white rounded-full hover:bg-yellowHover"
          />
        </Link>
      ) : (
        <Link href="/" locale="en">
          <CustomButton
            title="En"
            containerStyles="bg-secondary font-semibold text-md text-white rounded-full hover:bg-yellowHover"
          />
        </Link>
      )}
    </div>
  );
}
