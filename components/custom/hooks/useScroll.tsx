"use client";

// Next js
import { useState, useEffect } from "react";

export const useScroll = () => {
  const [color, setColor] = useState("transparent");
  const [hamColor, setHamColor] = useState("white");
  const [textColor, setTextColor] = useState("white");
  const [image, setImage] = useState("/golbal-logo-removebg-white.png");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#e5e5e5");
        setTextColor("#0c1e9a");
        setHamColor("#ff992a");
        setImage("/golbal-logo-removebg.png");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setHamColor("white");
        setImage("/golbal-logo-removebg-white.png");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return { color, hamColor, textColor, image };
};
