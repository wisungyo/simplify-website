import PanelIcons from "./PanelIcons";
import ChatRoom from "./ChatRoom";
import { AppProvider } from "./AppContext";

const Panel = () => {
  return (
    <>
      <AppProvider>
        <div className="bg-neutral h-[1px] my-4" />
        <PanelIcons />
        <div className=" my-8" />
        <ChatRoom />
      </AppProvider>
    </>
  );
};

export default Panel;
