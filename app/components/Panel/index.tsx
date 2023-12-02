import PanelIcons from "./PanelIcons";
import ChatRoom from "./ChatRoom";

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
