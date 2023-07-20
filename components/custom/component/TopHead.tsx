"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { TopHeadProps } from "@/types";

export default function TopHead({ title, desc }: TopHeadProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="mb-3 text-lg font-medium sm:text-xl text-secondary">
          {title}
        </h3>
        <h2 className="text-2xl font-bold sm:text-3xl text-maniBlack">
          {desc}
        </h2>
      </m.div>
    </LazyMotion>
  );
}
