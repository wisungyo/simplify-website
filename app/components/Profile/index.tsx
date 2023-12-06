import { experience, projects } from "@/app/constants/values";
import Divider from "@/app/components/Divider";
import ProfileCard from "@/app/components/Cards/ProfileCard";

const Profile = () => {
  return (
    <>
      <div>
        <Divider />
        <div className="mt-6">
          <p className="text-lg font-semibold text-primary">Experience</p>
          <div>
            {experience.map((data) => (
              <ProfileCard
                key={data.id}
                title={data.title}
                company={data.company}
                description={data.description}
                period={data.period}
                stacks={data.stacks}
              />
            ))}
          </div>
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold text-primary">Projects</p>
          <div>
            {projects.map((data) => (
              <ProfileCard
                key={data.id}
                title={data.title}
                description={data.description}
                stacks={data.stacks}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
