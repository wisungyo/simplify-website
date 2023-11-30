import { bio, toEmail } from "@/app/constants/labels";

const Bio = () => {
  const year = new Date().getFullYear() - 2020;

  return (
    <>
      <div className="flex flex-col py-4 gap-2">
        <p className="font-normal text-lg">
          {year}
          {bio}
        </p>
        <a
          href="mailto:wisungyo@gmail.com"
          className="font-semibold text-lg text-cyan-600"
        >
          {toEmail}
        </a>
      </div>
    </>
  );
};

export default Bio;
