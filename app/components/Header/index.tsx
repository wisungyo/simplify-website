import Image from "next/image";
import { fullname, occupation } from "@/app/constants/labels";

const Header = () => {
  const profileWidth: number = 96;

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <div className="w-32 sm:w-24 h-32 sm:h-24 relative">
          <Image
            alt="wisungyo"
            src={"/images/profile.jpeg"}
            className="rounded-full"
            fill
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <h1 className="font-bold text-2xl text-center">{fullname}</h1>
          <div className="w-full">
            <h2 className="text-primary text-center sm:text-start">
              {occupation}
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-neutral h-[1px] my-4" />
    </>
  );
};

export default Header;
