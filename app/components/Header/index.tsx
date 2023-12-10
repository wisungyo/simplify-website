import { fullname, occupation } from "@/app/constants/labels";
import Image from "next/image";
import Divider from "@/app/components/Divider";
import Spacer from "../Spacer";
const Header = () => {
  return (
    <>
      <div className="flex flex-col  items-center gap-8">
        <div className="rounded-full ring-1 ring-primary p-2 md:p-4 lg:hover:ring-0 transition-all duration-200">
          <div className="w-32 h-32 relative rounded-full">
            <Image
              id="me"
              alt="wisungyo"
              src={"/images/profile.jpeg"}
              className="rounded-full hover:opacity-70 transition-opacity duration-300"
              sizes="(max-width: 128px), (max-height: 128px)"
              priority={true}
              fill
            />
            <div className="absolute top-0 left-0 w-full h-full bg-pink-500 opacity-0 hover:opacity-70 transition-opacity rounded-full duration-300"></div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 md:hidden">
          <h1 id="fullname" className="font-bold text-2xl text-center">
            {fullname}
          </h1>
          <div className="w-full">
            <h2 className="text-primary text-lg font-semibold text-center">
              {occupation}
            </h2>
          </div>
        </div>
      </div>
      <Divider className="mt-8 md:hidden" />
      <Spacer className="h-8" />
    </>
  );
};

export default Header;
