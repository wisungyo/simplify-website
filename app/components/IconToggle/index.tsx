import { IconPanel } from "@/app/constants/types";

const IconToggle = ({
  name,
  IconActive,
  IconInactive,
  colorActive = "text-base",
  colorInactive = "text-base",
  isActive,
  onClick = () => {},
  size = "2em",
  isShow = true,
}: IconPanel) => {
  return (
    <>
      {isShow && (
        <div id={name} onClick={onClick}>
          {isActive ? (
            <IconActive
              size={size}
              className={`cursor-pointer ${colorActive}`}
            />
          ) : (
            <IconInactive
              size={size}
              className={`cursor-pointer ${colorInactive}`}
            />
          )}
        </div>
      )}
    </>
  );
};

export default IconToggle;
