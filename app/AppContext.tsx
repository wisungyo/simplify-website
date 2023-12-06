"use client";

import React, { createContext, useContext, useState } from "react";

interface AppContextProps {
  isLikeBtn: boolean;
  isShareBtn: boolean;
  isChatBtn: boolean;
  toggleLikeBtn: () => void;
  toggleShareBtn: () => void;
  toggleChatBtn: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: any) => {
  const [isLikeBtn, setIsLikeBtn] = useState(false);
  const [isShareBtn, setIsShareBtn] = useState(false);
  const [isChatBtn, setIsChatBtn] = useState(false);

  const toggleLikeBtn = () => {
    if (!isLikeBtn) {
      setIsLikeBtn(true);
      setTimeout(() => {
        setIsLikeBtn(false);
      }, 2000);
    }
  };

  const toggleShareBtn = () => {
    if (!isShareBtn) {
      setIsShareBtn(true);
      setTimeout(() => {
        setIsShareBtn(false);
      }, 2000);
    }
  };

  const toggleChatBtn = () => {
    setIsChatBtn((prevState) => !prevState);
  };

  const contextValue: AppContextProps = {
    isLikeBtn,
    toggleLikeBtn,
    isShareBtn,
    toggleShareBtn,
    isChatBtn,
    toggleChatBtn,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};