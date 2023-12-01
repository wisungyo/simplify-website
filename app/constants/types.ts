export type IconFooter = {
  link: string;
  IconComponent: React.ElementType;
  color: string;
};

export type IconPanel = {
  name: string;
  IconActive: React.ElementType;
  IconInactive: React.ElementType;
  color: string;
  isActive: boolean;
};

export type ChatBubble = {
  text: string;
  position: string; // options: "start" or "end"
  lastBubble: boolean;
  size?: string;
};

export type Question = {
  id: string;
  text: string;
  question: string;
};

export type AnswerChatBubble = {
  id: string;
  answer: ChatBubble[];
};
