import { fullname, occupation } from "@/app/constants/labels";
import Image from "next/image";
import Divider from "../Divider";

const Header = () => {
  return (
    <>
      <div className="flex flex-col  items-center gap-4">
        <div className="rounded-full ring-1 ring-primary p-2">
          <div className="w-32 h-32 relative rounded-full">
            <Image
              alt="wisungyo"
              src={"/images/profile.jpeg"}
              className="rounded-full"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h1 className="font-bold text-2xl text-center">{fullname}</h1>
          <div className="w-full">
            <h2 className="text-primary text-center">{occupation}</h2>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Header;
