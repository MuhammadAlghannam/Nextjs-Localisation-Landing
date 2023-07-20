"use client";

// animation
import { motion } from "framer-motion";

// componenets
import CustomButton from "../custom/component/CustomButton";

// scroll
import { Link } from "react-scroll";

interface HeaderProps {
  title: string;
  desc: string;
  btn: string;
  locale: string;
}

export default function Header({ title, desc, btn, locale }: HeaderProps) {
  return (
    <header
      id="home"
      className={`${locale === "en" ? "hero-header2" : "hero-header "}`}
    >
      <div className="max-w-[1440px] mx-auto sm:px-16 px-6 flex md:flex-row flex-col justify-center items-start xl:mt-[-2em] mt-[-5em]">
        {/* right */}
        <div className="flex-1 w-full h-[500px]">
          <motion.h2
            initial={{ y: "1em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="font-semibold md:text-[2.3rem] text-[1.6rem] text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ y: "1.5em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="font-medium md:text-[1.3rem] text-[1rem] text-white md:my-[1.6em] my-[1em]"
          >
            {desc}
          </motion.p>
          {/* button */}

          <motion.div
            initial={{ y: "2.5em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            <Link
              to="regest"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <CustomButton
                title={btn}
                containerStyles="bg-secondary font-semibold text-md text-white rounded-full hover:bg-yellowHover w-[50%] shadow-sm"
              />
            </Link>
          </motion.div>
        </div>
        {/* left */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ y: "2.5em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="mt-7 md:w-[500px] w-full mx-auto"
          >
            <iframe
              width={550}
              height={300}
              src="https://www.youtube.com/embed/u_gisj12yPI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full border-2 rounded-md shadow-sm border-primary"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
