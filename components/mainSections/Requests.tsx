"use client";

// data
import { useRequestsData } from "@/utils/data";

// components
import TopHead from "../custom/component/TopHead";

// animation
import { LazyMotion, domAnimation, m } from "framer-motion";

interface RequestsProps {
  supTitle1: string;
  supTitle2: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
}

export default function Requests({
  supTitle1,
  supTitle2,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
}: RequestsProps) {
  const { requestsData } = useRequestsData(
    title1,
    title2,
    title3,
    title4,
    title5,
    title6
  );
  return (
    <section id="request" className="py-6 sm:py-16">
      {/* top head */}
      <TopHead title={supTitle1} desc={supTitle2} />

      {/* cards */}
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
          className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 mt-[4em]"
        >
          {requestsData.map((items) => (
            <div
              key={items.id}
              className="p-5 transition-all duration-500 rounded-lg bg-primary hover:-translate-y-3 hover:shadow-md"
            >
              <div className="p-4 rounded-full bg-secondary w-[65px]">
                {items.icon}
              </div>
              <p className="text-xl font-medium text-white mb-[0.5em] pt-[0.8em]">
                {items.title}
              </p>
            </div>
          ))}
        </m.div>
      </LazyMotion>
    </section>
  );
}
