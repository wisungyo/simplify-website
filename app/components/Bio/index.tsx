import { bio } from "@/app/constants/labels";
import { carousellGroup } from "@/app/constants/links";

const Bio = () => {
  const year = new Date().getFullYear() - 2020;

  return (
    <>
      <div className="py-4 gap-2">
        <span>
          {year}
          {bio}
          <a href={carousellGroup}>
            <span className="text-primary"> Laku6 (Carousell Group)</span>.
          </a>
        </span>
      </div>
    </>
  );
};

export default Bio;
