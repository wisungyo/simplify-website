"use client";

import {
  IoHeartOutline,
  IoHeart,
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoPaperPlane,
  IoPaperPlaneOutline,
  IoSunnyOutline,
  IoMoonOutline,
} from "react-icons/io5";
import { useState } from "react";
import { IconPanel } from "@/app/constants/types";
import { primaryBlur } from "@/app/constants/colors";
import { useAppContext } from "../AppContext";
import IconToggle from "@/app/components/IconToggle";
import clipboardCopy from "clipboard-copy";
import { wisungyoCom } from "@/app/constants/links";

const PanelIcons = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isChatting, setIsChatting] = useState<boolean>(true);
  const [isShared, setIsShared] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const { isLikeBtn, isShareBtn, toggleLikeBtn, toggleShareBtn } =
    useAppContext();

  const handleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    toggleLikeBtn();
  };

  const handleShare = async () => {
    try {
      await clipboardCopy(wisungyoCom);
      toggleShareBtn();
      setIsShared(true);
      setTimeout(() => {
        setIsShared(false);
      }, 3000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const handleDark = () => {
    setIsDark(!isDark);
  };

  const panelIcons: IconPanel[] = [
    {
      name: "love",
      IconActive: IoHeart,
      IconInactive: IoHeartOutline,
      color: primaryBlur,
      isActive: isLikeBtn,
      onClick: handleLike,
    },
    {
      name: "chat",
      IconActive: IoChatbubbleEllipses,
      IconInactive: IoChatbubbleEllipsesOutline,
      color: primaryBlur,
      isActive: isChatting,
    },
    {
      name: "share",
      IconActive: IoPaperPlane,
      IconInactive: IoPaperPlaneOutline,
      color: primaryBlur,
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
              color={data.color}
              isActive={data.isActive}
              onClick={data.onClick}
            />
          ))}
        </div>
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            value="emerald"
            onClick={handleDark}
          />
          <IconToggle
            name={"love"}
            IconActive={IoSunnyOutline}
            IconInactive={IoMoonOutline}
            color="neutral"
            isActive={isDark}
          />
        </label>
      </div>
    </>
  );
};

export default PanelIcons;
