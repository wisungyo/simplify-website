import { bio, myEmail, toEmail } from "@/app/constants/labels";
import Divider from "../Divider";

const Bio = () => {
  const year = new Date().getFullYear() - 2020;

  return (
    <>
      <div className="flex flex-col py-4 gap-2 mt-8">
        <div className="flex flex-row ">
          <p className="text-primary font-mono text-sm mr-2">01.</p>
          <p className="font-semibold">About Me</p>
          <Divider />
        </div>
        <p className="">
          {year}
          {bio}
        </p>
      </div>
    </>
  );
};

export default Bio;
