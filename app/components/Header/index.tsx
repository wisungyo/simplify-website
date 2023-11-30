import Image from "next/image";
import { bgPink, secondaryBlur } from "@/app/constants/colors";
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
          src={"/images/profile.png"}
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{fullname}</h1>
          <div>
            <p className={`inline-block bg-[${bgPink}] font-base text-sm`}>
              {occupation}
            </p>
          </div>
        </div>
      </div>
      <div className={`bg-[${secondaryBlur}] h-[1px] my-4`} />
    </>
  );
};

export default Header;
