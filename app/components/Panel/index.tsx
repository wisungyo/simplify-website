import ChatRoom from "./ChatRoom";
import PanelIcons from "./PanelIcons";

const Panel = () => {
  return (
    <>
      <div className="bg-neutral h-[1px] my-4" />
      <PanelIcons />
      <div className=" my-8" />
      <ChatRoom />
    </>
  );
};

export default Panel;
