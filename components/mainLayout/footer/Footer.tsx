"use client";

// Netxjs
import Image from "next/image";

// data
import { useFooterLinks } from "@/utils/data";

// scroll
import { Link } from "react-scroll";

// icons
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

interface FooterProps {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  desc: string;
  supTitle1: string;
  supTitle2: string;
  supTitle3: string;
  copyright: string;
  locale: string;
}

export default function Footer({
  title1,
  title2,
  title3,
  title4,
  title5,
  desc,
  supTitle1,
  supTitle2,
  supTitle3,
  copyright,
  locale,
}: FooterProps) {
  const { footerLinks } = useFooterLinks(
    title1,
    title2,
    title3,
    title4,
    title5
  );
  return (
    <footer className={`${locale === "en" ? "hero-footer2" : "hero-footer"}`}>
      <div className="max-w-[1440px] mx-auto sm:px-16 px-6 sm:pt-[2.5em] pt-0 pb-[1.5em] grid grid-flow-row sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4">
        <div>
          <Image
            src="/golbal-logo-removebg-white.png"
            alt="logo"
            width={200}
            height={100}
            priority
            className="object-contain"
          />
          <p className="font-medium md:text-lg text-[0.9rem] my-[1em] text-white">
            {desc}
          </p>

          {/* icons */}
          <div className="flex items-center justify-between sm:w-[60%] w-[50%]">
            <div className="p-2 transition-all border border-white rounded-full hover:bg-[#3b5998]">
              <a
                href="https://www.facebook.com/Globalstudiesegy"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3rem"
                  height="1.3rem"
                  viewBox="0 0 320 512"
                  style={{ fill: "#ffffff" }}
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
            </div>
            <div className="p-2 transition-all border border-white rounded-full hover:bg-[#C13584]">
              <a
                href="https://www.instagram.com/officialglobalstudiesegypt/"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3rem"
                  height="1.3rem"
                  viewBox="0 0 448 512"
                  style={{ fill: "#ffffff" }}
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
            <div className="p-2 transition-all border border-white rounded-full hover:bg-primary">
              <a href="https://gste-edu.com/" rel="noreferrer" target="_blank">
                <GlobeAltIcon className="w-[1.3rem] h-[1.3rem] text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Adress */}
        <div className="sm:py-0 py-[1.5em]">
          <h2 className="text-xl font-semibold text-white">{supTitle1}</h2>
          <div className="mt-[1.5em]">
            <div className="flex items-start justify-start gap-3">
              <MapPinIcon className="sm:w-[50px] w-[40px] sm:h-[50px] h-[40px] text-white" />
              <p className="font-medium text-[0.9rem] text-white">
                1st floor, Qamarayet Roushdy Building , opposite to sangeovani
                hotel , Cornichnich , Alexandria
              </p>
            </div>
            <div className="flex items-start justify-start gap-3 my-[1em]">
              <PhoneIcon className="w-[1.3rem] h-[1.3rem] text-white" />
              <p className="font-medium text-[1rem] text-white ">
                1508347636 20+{" "}
                <span className="mx-[0.5em] font-semibold">-</span> 30577880
                974+
              </p>
            </div>
            <div className="flex items-start justify-start gap-3">
              <EnvelopeIcon className="w-[1.3rem] h-[1.3rem] text-white" />
              <p className="font-medium text-[1rem] text-white">
                admission@gste-edu.com
              </p>
            </div>
          </div>
        </div>

        {/* روابط */}
        <div className="hidden sm:block">
          <h2 className="text-xl font-semibold text-white">{supTitle2}</h2>
          <ul className="flex flex-col items-start justify-start gap-3 mt-[1.5em]">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <Link
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="flex items-center font-semibold text-white cursor-pointer text-md"
                >
                  <ChevronLeftIcon className="w-[1.3rem] h-[1.3rem] text-white" />{" "}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* اشهر */}
        <div className="hidden sm:block">
          <h2 className="text-xl font-semibold text-white">{supTitle3}</h2>
          <ul className="flex flex-col items-start gap-3 mt-[1.5em]">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <Link
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="flex items-center font-semibold text-white cursor-pointer text-md"
                >
                  <ChevronLeftIcon className="w-[1.3rem] h-[1.3rem] text-white" />{" "}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* copyright */}

      <div className="py-3 sm:text-lg text-[0.9rem] font-medium text-center text-white border-t border-white">
        <p>Ⓒ {copyright}</p>
      </div>
    </footer>
  );
}
