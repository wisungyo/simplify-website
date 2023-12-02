"use client";

import { IconFooter } from "@/app/constants/types";

const Icon = ({ link, IconComponent, color }: IconFooter) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconComponent size="2em" color="neutral" />
    </a>
  );
};

export default Icon;
