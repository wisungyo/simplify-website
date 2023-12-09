export type Navigation = {
  name: string;
  url: string;
  isActive: boolean;
};

export type IconFooter = {
  link: string;
  IconComponent: React.ElementType;
  color: string;
};

export type IconPanel = {
  name: string;
  IconActive: React.ElementType;
  IconInactive: React.ElementType;
  colorActive?: string;
  colorInactive?: string;
  isActive: boolean;
  onClick?: any;
  size?: string;
  isShow?: boolean;
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

export type Stack = {
  id: string;
  name: string;
};

export type Profile = {
  id: string;
  title: string;
  company?: string;
  description: string;
  period?: string;
  url?: string;
  stacks: Stack[];
};

export type Competition = {
  id: string;
  title: string;
  description: string;
  place: string;
  honor: string;
  date: string;
  type: "business" | "paper";
};
