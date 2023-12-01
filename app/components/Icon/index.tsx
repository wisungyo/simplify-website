"use client";

import { primaryBlur } from "@/app/constants/colors";
import { IconFooter } from "@/app/constants/types";
import { useState } from "react";

const Icon = ({ link, IconComponent, color }: IconFooter) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconComponent size="2em" color={isHovered ? color : primaryBlur} />
    </a>
  );
};

export default Icon;
