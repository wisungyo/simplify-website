import Image from "next/image";
import { fullname, occupation } from "@/app/constants/labels";

const Header = () => {
  const profileWidth: number = 96;

  return (
    <>
      <div className="flex flex-row items-center gap-6">
        <Image
          alt="wisungyo"
          width={profileWidth}
          height={profileWidth}
          src={"/images/profile.jpeg"}
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{fullname}</h1>
          <div>
            <h2 className="inline bg-accent font-base text-sm">{occupation}</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#E2E8F0] h-[1px] my-4" />
    </>
  );
};

export default Header;
