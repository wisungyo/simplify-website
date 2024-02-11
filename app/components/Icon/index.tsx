"use client";

import { IconFooter } from "@/app/constants/types";

const Icon = ({ link, IconComponent, color }: IconFooter) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={link}>
      <IconComponent
        size="2em"
        className="hover:text-primary duration-200 transition-all"
      />
    </a>
  );
};

export default Icon;
