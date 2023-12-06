"use client";

// Nextjs
import { useState } from "react";

// icons
import { BuildingOfficeIcon, UserGroupIcon } from "@heroicons/react/24/solid";

// counter
import CountUp from "react-countup";

// scroll
import ScrollTrigger from "react-scroll-trigger";

// animation
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function CounterUpCom({ count1, count2 }) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(true)}
    >
      <div className="flex justify-between items-center w-[80%]">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <BuildingOfficeIcon className="w-8 h-8 ss:w-10 ss:h-10 text-secondary" />
            <div className="font-semibold ss:text-[1.7rem] text-[1.4rem] text-mainBlack">
              {counterOn && (
                <CountUp start={1} end={280} duration={2} delay={0} />
              )}
              <h3 className="font-semibold ss:text-[1.2rem] text-[1rem] text-secondary">
                {count1}
              </h3>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <UserGroupIcon className="w-8 h-8 ss:w-10 ss:h-10 text-secondary" />
            <div className="font-semibold ss:text-[1.7rem] text-[1.4rem] text-mainBlack">
              {counterOn && (
                <CountUp start={1} end={40000} duration={2} delay={0} />
              )}
              <h3 className="font-semibold ss:text-[1.2rem] text-[1rem] text-secondary">
                {count2}
              </h3>
            </div>
          </m.div>
        </LazyMotion>
      </div>
    </ScrollTrigger>
  );
}
