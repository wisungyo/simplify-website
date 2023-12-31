"use client";

import {
  agung,
  helloIam,
  occupation,
  prasetyo,
  wisnu,
} from "@/app/constants/labels";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/AppContext";

const HeaderLarge = () => {
  const isLocalStorageAvailable = typeof localStorage !== "undefined";

  const initialScrolled = isLocalStorageAvailable
    ? localStorage.getItem("scrolled") === "true" || false
    : false;

  const { setActive } = useAppContext();
  const [scrolled, setScrolled] = useState(initialScrolled);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;

      if (scrollPosition > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      localStorage.setItem("scrolled", scrolled.toString());

      const aboutSection = document.getElementById("aboutme")?.offsetTop;
      const experienceSection =
        document.getElementById("experience")?.offsetTop;
      const projectsSection = document.getElementById("projects")?.offsetTop;
      const awardsSection = document.getElementById("awards")?.offsetTop;

      // Check if each section is at the top of the viewport
      if (scrollPosition < (aboutSection || 0) - 130) {
        setActive("aboutme");
      } else if (scrollPosition < (experienceSection || 0) - 130) {
        setActive("aboutme");
      } else if (scrollPosition < (projectsSection || 0) - 130) {
        setActive("experience");
      } else if (scrollPosition < (awardsSection || 0) - 130) {
        setActive("projects");
      } else {
        setActive("awards");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <div className="flex flex-col gap-12 pt-8">
        <div className="flex flex-col">
          <span className="text-3xl font-semibold leading-snug text-primary/75 my-10">
            {helloIam}
          </span>
          <p
            id="fullname"
            className={`font-bold text-5xl lg:text-6xl leading-tight `}
          >
            {wisnu}{" "}
            <span
              className={`transition-opacity duration-1000 ease-in-out ${
                scrolled ? "opacity-0" : ""
              }`}
            >
              {scrolled ? "" : `${agung} `}
            </span>
            <span>{prasetyo}</span>
          </p>
          <p
            id="fullname"
            className="font-bold text-4xl lg:text-5xl leading-tight text-[#81817E] mt-4"
          >
            {occupation}.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderLarge;
