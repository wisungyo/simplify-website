import { Stack } from "@/app/constants/types";

interface IProfileCard {
  title: string;
  company?: string;
  description: string;
  period?: string;
  stacks: Stack[];
}

const ProfileCard = (props: IProfileCard) => {
  const { title, company, description, period, stacks } = props;

  return (
    <>
      <div className="flex flex-col gap-2 py-4 my-4">
        <p className="text-sm font-semibold">
          {title} {company && `• ${company}`}
        </p>
        <p className="text-sm">{description}</p>
        <p className="text-sm">{period}</p>
        <div className="flex flex-row flex-wrap gap-2 mt-2">
          {stacks.map((data) => (
            <div
              key={data.id}
              className="rounded-xl p-2 text-xs ring-1 ring-neutral"
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
