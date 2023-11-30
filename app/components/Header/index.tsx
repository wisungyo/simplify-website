import Image from "next/image";
import { bgPink, secondaryBlur } from "@/app/constants/colors";
import { fullname, occupation } from "@/app/constants/labels";

const Header = () => {
  const profileWidth: number = 96;
  const stylesSub = `inline-block bg-[${bgPink}] font-base text-sm`;
  const stylesDiv = `bg-[${secondaryBlur}] h-[1px] my-4`;

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
            <p className={stylesSub}>{occupation}</p>
          </div>
        </div>
      </div>
      <div className={stylesDiv} />
    </>
  );
};

export default Header;
