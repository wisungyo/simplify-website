import { aboutMe, bio, bio2, laku6Carousell } from "@/app/constants/labels";
import { carousellGroup } from "@/app/constants/links";

const Bio = () => {
  const year = new Date().getFullYear() - 2020;

  return (
    <>
      <div className="flex flex-col py-4 gap-4">
        <p id="aboutme" className="text-lg font-bold text-primary mb-4">
          {aboutMe}
        </p>
        <div className="flex flex-col gap-6">
          <span className="text-base">
            {year}
            {bio}
            <h2 className="inline text-primary">
              <a href={carousellGroup}>{laku6Carousell}</a>
            </h2>
            .
          </span>
          <span className="text-base">{bio2}</span>
        </div>
      </div>
    </>
  );
};

export default Bio;
