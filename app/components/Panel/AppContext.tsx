"use client";

import React, { createContext, useContext, useState } from "react";

interface AppContextProps {
  isLikeBtn: boolean;
  toggleLikeBtn: () => void;
  isShareBtn: boolean;
  toggleShareBtn: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: any) => {
  const [isLikeBtn, setIsLikeBtn] = useState(false);
  const [isShareBtn, setIsShareBtn] = useState(false);

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

  const contextValue: AppContextProps = {
    isLikeBtn,
    toggleLikeBtn,
    isShareBtn,
    toggleShareBtn,
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
