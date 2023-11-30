import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { primaryBlur } from "@/app/constants/colors";
import { instagram, twitter, linkedin, github } from "@/app/constants/links";
import { footer } from "@/app/constants/labels";

const Footer = () => {
  const socialMediaData = [
    { link: instagram, icon: AiFillInstagram },
    { link: linkedin, icon: AiFillLinkedin },
    { link: twitter, icon: AiFillTwitterSquare },
    { link: github, icon: AiFillGithub },
  ];

  const renderIcon = (link: string, IconComponent: React.ElementType) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconComponent size="1.8em" color={primaryBlur} />
    </a>
  );

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-[#E2E8F0] h-[1px] mt-4 mb-16" />
        <div className="flex flex-row gap-12 justify-center">
          {socialMediaData.map((data) => renderIcon(data.link, data.icon))}
        </div>
        <p className="text-[#A0AEC0] text-center mt-8">{footer}</p>
      </div>
    </>
  );
};

export default Footer;
