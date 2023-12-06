"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

// data
import { useTestomoinalData } from "@/utils/data";

// components
import TopHead from "../custom/component/TopHead";

// animation
import { LazyMotion, domAnimation, m } from "framer-motion";

interface TestomoinalProps {
  supTitleee1: string;
  supTitleee2: string;
  title1: string;
  subTitle1: string;
  desc1: string;
  title2: string;
  subTitle2: string;
  desc2: string;
  title3: string;
  subTitle3: string;
  desc3: string;
  title4: string;
  subTitle4: string;
  desc4: string;
  title5: string;
  subTitle5: string;
  desc5: string;
  title6: string;
  subTitle6: string;
  desc6: string;
}

export default function Testomoinal({
  supTitleee1,
  supTitleee2,
  title1,
  subTitle1,
  desc1,
  title2,
  subTitle2,
  desc2,
  title3,
  subTitle3,
  desc3,
  title4,
  subTitle4,
  desc4,
  title5,
  subTitle5,
  desc5,
  title6,
  subTitle6,
  desc6,
}: TestomoinalProps) {
  const { testomoinalData } = useTestomoinalData(
    title1,
    subTitle1,
    desc1,
    title2,
    subTitle2,
    desc2,
    title3,
    subTitle3,
    desc3,
    title4,
    subTitle4,
    desc4,
    title5,
    subTitle5,
    desc5,
    title6,
    subTitle6,
    desc6
  );
  return (
    <section id="testomial" className="py-6 sm:py-16">
      {/* top head */}
      <TopHead title={supTitleee1} desc={supTitleee2} />
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
          className="mt-[4em] md:overflow-hidden overflow-auto "
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="cover-flow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            loop={true}
            modules={[Pagination, EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {testomoinalData.map((items, index) => (
              <SwiperSlide
                key={items.id}
                className="p-4 bg-white border rounded-md shadow-md border-primary "
              >
                <h2 className="font-bold text-[1.3rem] text-mainBlack mb-[0.3em]">
                  {items.title}
                </h2>
                <h3 className="font-semibold text-[1.1rem] text-mainBlack">
                  {items.suptitle}
                </h3>
                <p className="font-medium text-[0.9rem] text-mainBlack py-[1em]">
                  {items.desc}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </m.div>
      </LazyMotion>
    </section>
  );
}
