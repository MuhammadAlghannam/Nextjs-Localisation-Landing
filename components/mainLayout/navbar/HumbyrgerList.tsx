"use client";

//react
import { useState } from "react";

// data
import { useNavLinks } from "@/utils/data";

// icons
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

// componenets
import CustomButton from "@/components/custom/component/CustomButton";
import CustomeUl from "./CustomeUl";

// animation
import { motion, AnimatePresence } from "framer-motion";

// next intl
import Link from "next-intl/link";

// types
export interface HamProps {
  hamColor: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  locale: any;
}

export default function MaiHumbyrgerListnList({
  hamColor,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  locale,
}: HamProps) {
  const [menu, setMenu] = useState<boolean>(false);
  const { navLinks } = useNavLinks(
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7
  );

  // handle menu
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      {/* bars and times */}
      {menu ? (
        <XMarkIcon
          style={{ color: `${hamColor}` }}
          className="w-8 h-8"
          onClick={handleMenu}
        />
      ) : (
        <Bars3BottomLeftIcon
          style={{ color: `${hamColor}` }}
          className="w-8 h-8 "
          onClick={handleMenu}
        />
      )}

      <AnimatePresence>
        {menu && (
          <motion.div
            key="menu"
            initial={{ y: "5em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "5em", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex flex-col justify-center gap-5 p-6 bg-primary absolute top-20 ${
              locale === "en" ? "right-0" : "left-0"
            } mx-4 my-2 min-w-[200px] rounded-xl z-10 sidebar `}
          >
            {/* nav list */}
            <CustomeUl
              navLinks={navLinks}
              ulStyle="flex flex-col items-center gap-5"
              linkStyle="font-semibold text-white text-md"
            />

            {/* button */}
            {locale === "en" ? (
              <Link href="/" locale="ar" className="text-center">
                <CustomButton
                  title="Ar"
                  containerStyles="bg-secondary font-semibold text-md text-white rounded-full hover:bg-yellowHover"
                />
              </Link>
            ) : (
              <Link href="/" locale="en" className="text-center">
                <CustomButton
                  title="En"
                  containerStyles="bg-secondary font-semibold text-md text-white rounded-full hover:bg-yellowHover"
                />
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
