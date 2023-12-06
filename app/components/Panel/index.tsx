"use client";

import { useAppContext } from "@/app/AppContext";
import PanelIcons from "@/app/components/Panel/PanelIcons";
import ChatRoom from "@/app/components/Panel/ChatRoom";
import Divider from "@/app/components/Divider";
import Profile from "@/app/components/Profile";

const Panel = () => {
  const { isChatBtn } = useAppContext();

  return (
    <>
      <Divider />
      <PanelIcons />
      {isChatBtn ? <ChatRoom /> : <Profile />}
    </>
  );
};

export default Panel;
