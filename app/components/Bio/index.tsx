import { bio, myEmail, toEmail } from "@/app/constants/labels";

const Bio = () => {
  const year = new Date().getFullYear() - 2020;

  return (
    <>
      <div className="flex flex-col py-4 gap-2">
        <p className="font-normal text-lg">
          {year}
          {bio}
        </p>
        <div className="flex flex-row mt-2">
          <a href={`mailto:${myEmail}`} className="font-semibold text-primary">
            {toEmail}
          </a>
        </div>
      </div>
    </>
  );
};

export default Bio;
