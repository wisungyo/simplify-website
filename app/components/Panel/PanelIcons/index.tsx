import {
  IoHeartOutline,
  IoHeart,
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoPaperPlane,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import { IconPanel } from "@/app/constants/types";
import { primaryBlur } from "@/app/constants/colors";
import IconToggle from "@/app/components/IconToggle";
import ChatRoom from "../ChatRoom";

const PanelIcons = () => {
  const panelIcons: IconPanel[] = [
    {
      name: "love",
      IconActive: IoHeart,
      IconInactive: IoHeartOutline,
      color: primaryBlur,
      isActive: false,
    },
    {
      name: "chat",
      IconActive: IoChatbubbleEllipses,
      IconInactive: IoChatbubbleEllipsesOutline,
      color: primaryBlur,
      isActive: true,
    },
    {
      name: "share",
      IconActive: IoPaperPlane,
      IconInactive: IoPaperPlaneOutline,
      color: primaryBlur,
      isActive: false,
    },
  ];

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-row gap-4 justify-left">
        {panelIcons.map((data, index) => (
          <IconToggle
            key={index}
            name={data.name}
            IconActive={data.IconActive}
            IconInactive={data.IconInactive}
            color={data.color}
            isActive={data.isActive}
          />
        ))}
      </div>
      <ChatRoom />
    </div>
  );
};

export default PanelIcons;
