"use client";

import {
  IoHeartOutline,
  IoHeart,
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoPaperPlane,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import { IconPanel } from "@/app/constants/types";
import { useAppContext } from "../AppContext";
import { wisungyoCom } from "@/app/constants/links";
import IconToggle from "@/app/components/IconToggle";
import clipboardCopy from "clipboard-copy";
import ThemeSwitcher from "../../ThemeSwitcher";

const PanelIcons = () => {
  const { isLikeBtn, isShareBtn, toggleLikeBtn, toggleShareBtn } =
    useAppContext();

  const handleLike = () => {
    toggleLikeBtn();
  };

  const handleShare = async () => {
    try {
      await clipboardCopy(wisungyoCom);
      toggleShareBtn();
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const panelIcons: IconPanel[] = [
    {
      name: "love",
      IconActive: IoHeart,
      IconInactive: IoHeartOutline,
      isActive: isLikeBtn,
      onClick: handleLike,
    },
    {
      name: "chat",
      IconActive: IoChatbubbleEllipses,
      IconInactive: IoChatbubbleEllipsesOutline,
      isActive: true,
    },
    {
      name: "share",
      IconActive: IoPaperPlane,
      IconInactive: IoPaperPlaneOutline,
      isActive: isShareBtn,
      onClick: handleShare,
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4 justify-left">
          {panelIcons.map((data, index) => (
            <IconToggle
              key={index}
              name={data.name}
              IconActive={data.IconActive}
              IconInactive={data.IconInactive}
              isActive={data.isActive}
              onClick={data.onClick}
            />
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default PanelIcons;
