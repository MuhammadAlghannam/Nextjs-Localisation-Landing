"use client";

// data
import { useEducationData } from "@/utils/data";

// components
import TopHead from "../custom/component/TopHead";
import EduModle from "../custom/component/EduModle";
import CustomButton from "../custom/component/CustomButton";

// animation
import { motion } from "framer-motion";

// scroll
import { Link } from "react-scroll";

interface EducationProps {
  title1: string;
  title2: string;
  supTile1: string;
  supTile2: string;
  supTile3: string;
  btn: string;
  btn2: string;
}

export default function Education({
  title1,
  title2,
  supTile1,
  supTile2,
  supTile3,
  btn,
  btn2,
}: EducationProps) {
  const { educationData } = useEducationData(supTile1, supTile2, supTile3);
  return (
    <section id="education" className="py-6 sm:py-16">
      {/* top head */}
      <TopHead title={title1} desc={title2} />

      {/* edu */}
      <div className=" flex flex-col items-center justify-center md:gap-4 gap-16 md:flex-row mt-[6em]">
        {educationData.map((items) => (
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
            className="relative flex flex-col items-center justify-center rounded-xl bg-primary md:w-[33.33333%] w-full py-[1.5em]"
          >
            <div
              className={`absolute md:top-[-50px] top-[-50px] rounded-full p-7 bg-secondary`}
            >
              {items.icon}
            </div>
            <div className="font-semibold text-lg text-white my-[1em] pt-[1em] text-center">
              {items.title}
            </div>

            {/* model */}
            <EduModle
              supTitle1={items.supTitle1}
              supTitle2={items.supTitle2}
              supDesc1={items.supDesc1}
              supDesc2={items.supDesc2}
              btn={btn}
            />
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-[2em]">
        <Link to="regest" spy={true} smooth={true} offset={-100} duration={500}>
          <CustomButton
            title={btn2}
            containerStyles="w-[30%] px-6 py-3 bg-secondary font-semibold text-md text-white rounded-full hover:bg-yellowHover"
          />
        </Link>
      </div>
    </section>
  );
}
