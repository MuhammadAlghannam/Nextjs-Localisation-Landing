"use client";

// Next
import Image from "next/image";

// icons
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

// components
import CounterUpCom from "../custom/component/CounterUpCom";

// animation
import { LazyMotion, domAnimation, m } from "framer-motion";

interface AboutProps {
  title1: string;
  title2: string;
  desc1: string;
  desc2: string;
  count1: string;
  count2: string;
  btn: string;
}

export default function AboutUs({
  title1,
  title2,
  desc1,
  desc2,
  count1,
  count2,
  btn,
}: AboutProps) {
  return (
    <section id="about" className="py-6 sm:py-16">
      <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
        {/* right */}
        <div className="flex-1 w-full md:mb-0 mb-[2em]">
          <LazyMotion features={domAnimation}>
            <m.h3
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-semibold sm:text-[1.5rem] text-[1.3rem] text-secondary mb-1"
            >
              {title1}
            </m.h3>
            <m.h2
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-semibold ss:text-[1.7rem] sm:text-[2rem] text-[1.4rem] text-mainBlack mb-4"
            >
              {title2}
            </m.h2>
            <m.p
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-medium ss:text-[0.9rem] sm:text-[1.1rem] text-[0.8rem] text-mainGray mb-3 md:w-[93%] w-full"
            >
              {desc1}
            </m.p>
            <m.p
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-medium ss:text-[0.9rem] sm:text-[1.1rem] text-[0.8rem] text-mainGray mb-4  md:w-[93%] w-full"
            >
              {desc2}
            </m.p>
          </LazyMotion>

          {/* couter */}
          <CounterUpCom count1={count1} count2={count2} />

          {/* button */}
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <a
                href="/final.pdf"
                rel="noopener noreferrer"
                download
                className="ss:w-[50%] sm:w-[30%] w-[60%] flex justify-center gap-3 items-center px-6 py-3 bg-secondary font-semibold text-md text-white rounded-full hover:bg-yellowHover"
              >
                {btn}
                <ArrowDownTrayIcon className="w-8 h-8 text-white" />
              </a>
            </m.div>
          </LazyMotion>
        </div>

        {/* left */}
        <div className="flex-1 w-full ">
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/written-task-min.jpg"
                alt="about"
                width={100}
                height={100}
                sizes="(max-width: 425px) 50vw, 75vw"
                style={{ width: "100%", height: "auto" }}
                quality={60}
                className="object-contain mx-auto"
              />
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
}
