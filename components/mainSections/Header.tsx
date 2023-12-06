"use client";

// animation
import { LazyMotion, domAnimation, m } from "framer-motion";

// componenets
import CustomButton from "../custom/component/CustomButton";

// scroll
import { Link } from "react-scroll";

// video player
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

interface HeaderProps {
  title: string;
  desc: string;
  btn: string;
  locale: string;
}

export default function Header({ title, desc, btn, locale }: HeaderProps) {
  return (
    <section
      id="home"
      className={`${locale === "en" ? "hero-header2" : "hero-header "}`}
    >
      <div className="max-w-[1440px] mx-auto sm:px-16 px-6 flex md:flex-row flex-col justify-center items-start xl:mt-[-2em] mt-[-5em]">
        {/* right */}
        <div className="flex-1 w-full h-[500px]">
          <LazyMotion features={domAnimation}>
            <m.h1
              initial={{ y: "1em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="font-semibold md:text-[2.3rem] text-[1.6rem] text-white"
            >
              {title}
            </m.h1>
            <m.p
              initial={{ y: "1.5em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="font-medium md:text-[1.3rem] text-[1rem] text-white md:my-[1.6em] my-[1em]"
            >
              {desc}
            </m.p>
            {/* button */}

            <m.div
              initial={{ y: "2.5em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              <Link
                to="regest"
                href="#regest"
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
            </m.div>
          </LazyMotion>
        </div>
        {/* left */}
        <div className="flex-1 w-full">
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ y: "2.5em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="mt-7 md:w-[500px] w-full mx-auto"
            >
              <Video
                autoPlay
                loop
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                poster="global-logo.jpg"
                className="w-full border-2 rounded-md shadow-sm border-primary"
              >
                <source src="/slotion-video-intro.webm" type="video/webm" />
              </Video>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
}
