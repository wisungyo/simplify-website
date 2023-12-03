import { footer } from "@/app/constants/labels";
import FooterIcons from "./FooterIcons";
import Divider from "../Divider";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col">
        <Divider className="mb-16" />
        <FooterIcons />
        <p className="text-neutral-accent text-center mt-8">{footer}</p>
      </div>
    </>
  );
};

export default Footer;
