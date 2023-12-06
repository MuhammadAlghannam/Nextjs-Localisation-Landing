"use client";

// Next js
import Image from "next/image";

// componenets
import MainList from "./MainList";
import HumbyrgerList from "./HumbyrgerList";

// custom hook
import { useScroll } from "@/components/custom/hooks/useScroll";

// scroll
import { Link } from "react-scroll";

// types
import { NavBarProps } from "@/types";

export default function NavBar({
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  locale,
}: NavBarProps) {
  const { color, hamColor, textColor, image } = useScroll();

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 right-0 top-0 w-full py-5 z-50`}
    >
      <div className="flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6">
        {/* Logo Image */}
        <Link
          to="home"
          href="#home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <Image
            src={image}
            alt="logo"
            width={145}
            height={45}
            quality={60}
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* Menu list */}
        <div className="hidden md:flex">
          <MainList
            textColor={textColor}
            title1={title1}
            title2={title2}
            title3={title3}
            title4={title4}
            title5={title5}
            title6={title6}
            title7={title7}
            locale={locale}
          />
        </div>

        {/* Humberger list */}
        <div className="flex md:hidden">
          <HumbyrgerList
            hamColor={hamColor}
            title1={title1}
            title2={title2}
            title3={title3}
            title4={title4}
            title5={title5}
            title6={title6}
            title7={title7}
            locale={locale}
          />
        </div>
      </div>
    </header>
  );
}
