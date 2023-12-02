import { IconPanel } from "@/app/constants/types";

const IconToggle = ({
  name,
  IconActive,
  IconInactive,
  color,
  isActive,
  onClick = () => {},
}: IconPanel) => {
  return (
    <>
      <div onClick={onClick}>
        {isActive ? (
          <IconActive size="2em" color="neutral" className="cursor-pointer" />
        ) : (
          <IconInactive size="2em" color="neutral" className="cursor-pointer" />
        )}
      </div>
    </>
  );
};

export default IconToggle;
