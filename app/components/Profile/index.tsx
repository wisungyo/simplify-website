import { experience, projects } from "@/app/constants/values";
import { titleExperience, titleProjects } from "@/app/constants/labels";
import Divider from "@/app/components/Divider";
import ProfileCard from "@/app/components/Cards/ProfileCard";
import Awards from "@/app/components/Awards";

const Profile = () => {
  const sectionHead = (id: string, title: string) => (
    <p id={id} className="text-lg font-bold text-primary">
      {title}
    </p>
  );

  return (
    <>
      <div>
        <Divider />
        <div className="mt-6">
          {sectionHead("experience", titleExperience)}
          <div>
            {experience.map((data, index) => (
              <ProfileCard
                key={index}
                title={data.title}
                company={data.company}
                description={data.description}
                period={data.period}
                url={data.url}
                stacks={data.stacks}
              />
            ))}
          </div>
        </div>
        <Divider />
        <div className="mt-6">
          {sectionHead("projects", titleProjects)}
          <div>
            {projects.map((data, index) => (
              <ProfileCard
                key={index}
                title={data.title}
                description={data.description}
                url={data.url}
                stacks={data.stacks}
              />
            ))}
          </div>
        </div>
        <Divider />
        <div className="mt-6">
          {sectionHead("awards", "Awards.")}
          <Awards />
        </div>
      </div>
    </>
  );
};

export default Profile;
