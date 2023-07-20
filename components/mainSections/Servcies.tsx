"use client";

// data
import { useServciesData } from "@/utils/data";

// icons
import { CheckIcon } from "@heroicons/react/24/solid";

// components
import TopHead from "../custom/component/TopHead";

// animation
import { motion } from "framer-motion";

interface ServciesProps {
  locale: string;
  supTitle1: string;
  supTitle2: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  title8: string;
  title9: string;
  title10: string;
  title11: string;
  title12: string;
}

export default function Servcies({
  locale,
  supTitle1,
  supTitle2,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  title9,
  title10,
  title11,
  title12,
}: ServciesProps) {
  const { servciesData } = useServciesData(
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7,
    title8,
    title9,
    title10,
    title11,
    title12
  );

  return (
    <section id="servcies" className="py-6 sm:py-16">
      {/* top head */}
      <TopHead title={supTitle1} desc={supTitle2} />

      <div className="flex flex-wrap mt-[4em]">
        {servciesData.map((items) => (
          <motion.div
            initial={{
              y: items.animateY,
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={items.id}
            className={`box ${
              locale === "en"
                ? "border-l-[0.1em] pl-[2.8rem]"
                : "border-r-[0.1em] pr-[2.8rem]"
            } border-[#aaaaaa]`}
          >
            <div
              className={`absolute top-[-0.5em] ${
                locale === "en" ? "left-[-1.2em]" : "right-[-1.2em]"
              } p-2 rounded-full bg-primary`}
            >
              <CheckIcon className="w-5 h-5 text-white " />
            </div>
            <span className="px-[1.5em] py-[0.4em] rounded-2xl text-lg text-white font-semibold bg-primary">
              {items.id}
            </span>
            <p className="font-medium text-[1rem] text-mainBalck mt-[1.2em] mb-[0.5em]">
              {items.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
