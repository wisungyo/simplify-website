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
  onClick?: any;
};

export type ChatBubble = {
  text: string;
  position: string; // options: "start" or "end"
  lastBubble: boolean;
  size?: string;
  type?: string; // options: "normal" | "quote"
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

export type Quotes = {
  id: string;
  text: string;
  category: string;
  author?: string;
};
