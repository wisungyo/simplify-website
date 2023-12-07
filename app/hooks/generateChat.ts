import { ChatBubble } from "../constants/types";

const generateChat = (
  text: string,
  position: string,
  lastBubble: boolean,
  type: string = "",
  size: string = ""
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
