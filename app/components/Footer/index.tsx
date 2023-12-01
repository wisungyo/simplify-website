import { footer } from "@/app/constants/labels";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-[#E2E8F0] h-[1px] mt-4 mb-16" />
        <FooterIcons />
        <p className="text-[#A0AEC0] text-center mt-8">{footer}</p>
      </div>
    </>
  );
};

export default Footer;
