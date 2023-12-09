import { footer } from "@/app/constants/labels";
import FooterIcons from "@/app/components/Footer/FooterIcons";
import Divider from "@/app/components/Divider";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:hidden">
        <Divider className="mb-16" />
        <FooterIcons />
        <p className="text-neutral-accent text-center mt-8">{footer}</p>
      </div>
    </>
  );
};

export default Footer;
