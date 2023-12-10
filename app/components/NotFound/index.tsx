import {
  bringYouHome,
  code404,
  letsGo,
  looksLost,
} from "@/app/constants/labels";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-8 gap-4">
        <p className="text-primary text-6xl font-black">{code404}.</p>
        <div className="flex flex-col justify-center items-center mb-8">
          <p className="text-sm">{looksLost}</p>
          <p className="text-sm">{bringYouHome}</p>
        </div>
        <Link href="/">
          <button className="btn btn-outline btn-primary">{letsGo}</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
