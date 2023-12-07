import { Stack } from "@/app/constants/types";
import { GoArrowUpRight } from "react-icons/go";

interface IProfileCard {
  title: string;
  company?: string;
  description: string;
  period?: string;
  url?: string;
  stacks: Stack[];
}

const ProfileCard = (props: IProfileCard) => {
  const { title, company, description, period, url, stacks } = props;

  return (
    <>
      <div className="flex flex-col gap-2 py-4 my-6">
        {period && <p className="text-xs mb-2">{period}</p>}
        <a href={url}>
          <span className="hover:text-primary flex flex-wrap gap-[2px] items-center">
            <span className="text-sm font-semibold">
              {title} {company && `• ${company}`}
            </span>
            <GoArrowUpRight size="1rem" />
          </span>
        </a>
        <p className="text-sm">{description}</p>
        <div className="flex flex-row flex-wrap gap-2 mt-2">
          {stacks.map((data) => (
            <div
              key={data.id}
              className="rounded-2xl p-2 text-xs ring-1 ring-neutral"
            >
              {data.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
