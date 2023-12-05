import { AppProvider } from "./AppContext";
import PanelIcons from "./PanelIcons";
import ChatRoom from "./ChatRoom";
import Divider from "../Divider";

const Panel = () => {
  return (
    <>
      <AppProvider>
        <Divider />
        <PanelIcons />
        <ChatRoom />
      </AppProvider>
    </>
  );
};

export default Panel;
