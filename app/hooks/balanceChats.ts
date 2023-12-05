import { ChatBubble } from "../constants/types";
import { maxChats } from "../constants/values";

const balanceChats = (
  chats: ChatBubble[],
  array: ChatBubble[],
  actionFunc: () => void
) => {
  let updatedChat = [...chats, ...array];
  if (updatedChat.length > maxChats) {
    updatedChat = updatedChat.slice(updatedChat.length - maxChats);
    actionFunc();
  }
  return updatedChat;
};

export default balanceChats;
