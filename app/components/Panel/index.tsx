import PanelIcons from "./PanelIcons";
import ChatRoom from "./ChatRoom";
import { AppProvider } from "./AppContext";
import Divider from "../Divider";

const Panel = () => {
  return (
    <>
      <div className="block ">
        <AppProvider>
          <Divider />
          <PanelIcons />
          <ChatRoom />
        </AppProvider>
      </div>
    </>
  );
};

export default Panel;
