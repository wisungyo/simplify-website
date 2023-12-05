import Image from "next/image";
import { fullname, occupation } from "@/app/constants/labels";
import Divider from "../Divider";

const Header = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-0 lg:mt-4">
        <div className="w-36 sm:w-24 h-36 sm:h-24 relative rounded-full shadow-2xl">
          <Image
            alt="wisungyo"
            src={"/images/profile.jpeg"}
            className="rounded-full"
            fill
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <h1 className="font-bold text-2xl lg:text-3xl text-center">
            {fullname}
          </h1>
          <div className="w-full text-primary font-mono flex flex-row justify-center lg:justify-start">
            <p>/</p>
            <h1 className="mx-2">wisungyo</h1>
            <p>/</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
