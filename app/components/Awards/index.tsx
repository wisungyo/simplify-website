import { competitions } from "@/app/constants/values";
import AwardCard from "@/app/components/Cards/AwardCard";
import Spacer from "@/app/components/Spacer";
import {
  descBusiness,
  descPaper,
  titleBusiness,
  titlePaper,
} from "@/app/constants/labels";

const Awards = () => {
  const sectionHead = (title: string, description?: string) => (
    <div className="flex flex-col gap-2 my-4">
      <p className="font-semibold">{title}.</p>
      <p className="text-sm">{description}</p>
    </div>
  );

  return (
    <>
      <div className="py-6">
        {sectionHead(titleBusiness, descBusiness)}
        {competitions.map(
          (data, index) =>
            data.type === "business" && (
              <AwardCard
                key={index}
                title={data.title}
                place={data.place}
                honor={data.honor}
                date={data.date}
              />
            )
        )}

        <Spacer className="h-8" />
        {sectionHead(titlePaper, descPaper)}
        {competitions.map(
          (data, index) =>
            data.type === "paper" && (
              <AwardCard
                key={index}
                title={data.title}
                place={data.place}
                honor={data.honor}
                date={data.date}
              />
            )
        )}
      </div>
    </>
  );
};

export default Awards;
