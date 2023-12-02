import { IconPanel } from "@/app/constants/types";

const IconToggle = ({
  name,
  IconActive,
  IconInactive,
  color,
  isActive,
}: IconPanel) => {
  return (
    <>
      {isActive ? (
        <IconActive size="2em" color="neutral" className="cursor-pointer" />
      ) : (
        <IconInactive size="2em" color="neutral" className="cursor-pointer" />
      )}
    </>
  );
};

export default IconToggle;
