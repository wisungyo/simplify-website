import {
  goodAfternoon,
  goodDawn,
  goodEvening,
  goodMorning,
} from "@/app/constants/labels";
import { ChatBubble } from "../constants/types";

const getGreeting = (): ChatBubble => {
  const currentTime = new Date().getHours();
  const dawnEnd = 4; // 04:00
  const morningEnd = 12; // 12:00
  const afternoonEnd = 18; // 18:00

  let text = "";
  let position = "start";
  let lastBubble = false;

  if (currentTime < dawnEnd) text = goodDawn;
  else if (currentTime < morningEnd) text = goodMorning;
  else if (currentTime < afternoonEnd) text = goodAfternoon;
  else text = goodEvening;

  return {
    text,
    position,
    lastBubble,
  };
};

export default getGreeting;
