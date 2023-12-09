"use client";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import {
  instagram as colorInstagram,
  twitter as colorTwitter,
  linkedin as colorLinkedin,
  github as colorGithub,
} from "@/app/constants/colors";
import { IconFooter } from "@/app/constants/types";
import { instagram, twitter, linkedin, github } from "@/app/constants/links";
import Icon from "@/app/components/Icon";

interface IFooterIcons {
  align?: "justify-center" | "justify-start" | "justify-end";
  gap?: string;
}

const FooterIcons = ({
  align = "justify-center",
  gap = "gap-8",
}: IFooterIcons) => {
  const socialMediaData: IconFooter[] = [
    { link: github, IconComponent: AiFillGithub, color: colorGithub },
    { link: instagram, IconComponent: AiFillInstagram, color: colorInstagram },
    { link: twitter, IconComponent: AiFillTwitterSquare, color: colorTwitter },
    { link: linkedin, IconComponent: AiFillLinkedin, color: colorLinkedin },
  ];

  return (
    <div className={`flex flex-row ${gap} ${align}`}>
      {socialMediaData.map((data, index) => (
        <Icon
          key={index}
          link={data.link}
          IconComponent={data.IconComponent}
          color={data.color}
        />
      ))}
    </div>
  );
};

export default FooterIcons;
