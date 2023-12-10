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
      <a href={url}>
        <div className="flex flex-col gap-4 py-4 my-6 px-4 ring-1 ring-neutral rounded-lg group hover:bg-[#2F313F] md:hover:cursor-pointer">
          {period && <p className="text-xs text-[#81817E] mb-2">{period}</p>}
          <span className="group-hover:text-primary flex flex-wrap gap-[2px] items-center">
            <span className="text-sm font-semibold inline-flex flex-row gap-2">
              {title}
              {company && (
                <>
                  <span>•</span>
                  <span>{company}</span>
                </>
              )}
            </span>
            <GoArrowUpRight size="1rem" />
          </span>
          <p className="text-sm">{description}</p>
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {stacks.map((data) => (
              <div
                key={data.id}
                className="rounded-2xl px-3 py-2 text-xs ring-1 ring-neutral group-hover:ring-0 group-hover:text-primary/75 group-hover:bg-primary/10"
              >
                {data.name}
              </div>
            ))}
          </div>
        </div>
      </a>
    </>
  );
};

export default ProfileCard;
