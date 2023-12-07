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
import { useAppContext } from "@/app/AppContext";
import { wisungyoCom } from "@/app/constants/links";
import IconToggle from "@/app/components/IconToggle";
import clipboardCopy from "clipboard-copy";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import animateBeating from "@/app/hooks/animateBeating";

const PanelIcons = () => {
  const {
    isLikeBtn,
    isShareBtn,
    isChatBtn,
    toggleLikeBtn,
    toggleShareBtn,
    toggleChatBtn,
  } = useAppContext();

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
      onClick: toggleLikeBtn,
      colorActive: "text-primary",
    },
    {
      name: "chat",
      IconActive: IoChatbubbleEllipses,
      IconInactive: IoChatbubbleEllipsesOutline,
      isActive: isChatBtn,
      onClick: toggleChatBtn,
    },
    {
      name: "share",
      IconActive: IoPaperPlane,
      IconInactive: IoPaperPlaneOutline,
      isActive: isShareBtn,
      onClick: handleShare,
    },
  ];

  const onLoveClick = (action: () => void) => {
    if (!isLikeBtn) {
      action();
      animateBeating("love");
    }
  };

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
              colorActive={data.colorActive}
              isActive={data.isActive}
              onClick={
                data.name === "love"
                  ? () => onLoveClick(data.onClick)
                  : data.onClick
              }
              isShow={data.isShow}
            />
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default PanelIcons;
