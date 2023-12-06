"use client";

// nextjs
import { useEffect, useState } from "react";

// icons
import { ArrowUpIcon } from "@heroicons/react/24/solid";

// scroll
import { Link } from "react-scroll";

interface MyScrollToTopProps {
  locale: string;
}

export default function MyScrollToTop({ locale }: MyScrollToTopProps) {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  return (
    scrollTop && (
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={`fixed bottom-0 ${
          locale === "en" ? "right-0 mr-[2em]" : "left-0 ml-[2em]"
        }  mb-[2em] p-3 rounded-full bg-secondary z-10 cursor-pointer`}
      >
        <ArrowUpIcon className="w-6 h-6 text-white" />
      </Link>
    )
  );
}
