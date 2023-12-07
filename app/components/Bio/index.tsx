import { aboutMe, bio, laku6Carousell } from "@/app/constants/labels";
import { carousellGroup } from "@/app/constants/links";

const Bio = () => {
  const year = new Date().getFullYear() - 2020;

  return (
    <>
      <div className="py-4 gap-2">
        <p id="aboutme" className="text-lg font-bold text-primary mb-4">
          {aboutMe}
        </p>
        <span className="leading-6">
          {year}
          {bio}
          <a href={carousellGroup}>
            <span className="text-primary">{laku6Carousell}</span>.
          </a>
        </span>
      </div>
    </>
  );
};

export default Bio;
