import { ChatBubble } from "../constants/types";

const generateChat = (
  text: string,
  position: string,
  lastBubble: boolean,
  size: string = "",
  type: string = ""
): ChatBubble => {
  return {
    text,
    position,
    lastBubble,
    size,
    type,
  };
};

export default generateChat;
