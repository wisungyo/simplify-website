"use client";

import {
  IoHeartOutline,
  IoHeart,
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
  IoPaperPlane,
  IoPaperPlaneOutline,
  IoSunny,
  IoSunnyOutline,
} from "react-icons/io5";
import { useState } from "react";
import { IconPanel } from "@/app/constants/types";
import { primaryBlur } from "@/app/constants/colors";
import IconToggle from "@/app/components/IconToggle";

const PanelIcons = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isChatting, setIsChatting] = useState<boolean>(false);
  const [isShared, setIsShared] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

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

  const handleDark = () => {
    setIsDark(!isDark);
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
              color={data.color}
              isActive={data.isActive}
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
            IconActive={IoSunny}
            IconInactive={IoSunnyOutline}
            color="neutral"
            isActive={isDark}
          />
        </label>
      </div>
    </>
  );
};

export default PanelIcons;
