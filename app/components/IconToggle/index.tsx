import { IconPanel } from "@/app/constants/types";

const IconToggle = ({
  name,
  IconActive,
  IconInactive,
  color = "neutral",
  isActive,
  onClick = () => {},
  size = "2em",
  isShow = true,
}: IconPanel) => {
  return (
    <>
      {isShow && (
        <div onClick={onClick}>
          {isActive ? (
            <IconActive size={size} color={color} className="cursor-pointer" />
          ) : (
            <IconInactive
              size={size}
              color={color}
              className="cursor-pointer"
            />
          )}
        </div>
      )}
    </>
  );
};

export default IconToggle;
