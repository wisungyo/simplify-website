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

const FooterIcons = () => {
  const socialMediaData: IconFooter[] = [
    { link: instagram, IconComponent: AiFillInstagram, color: colorInstagram },
    { link: linkedin, IconComponent: AiFillLinkedin, color: colorLinkedin },
    { link: twitter, IconComponent: AiFillTwitterSquare, color: colorTwitter },
    { link: github, IconComponent: AiFillGithub, color: colorGithub },
  ];

  return (
    <div className="flex flex-row gap-8 justify-center">
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
