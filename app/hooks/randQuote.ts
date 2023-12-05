import { Quotes } from "@/app/constants/types";
import { quotes } from "@/app/constants/values";

const randQuote = (): Quotes | null => {
  const randomNumber = Math.floor(Math.random() * 20);
  const quote = quotes.find((data) => data.id === randomNumber.toString());
  return quote || null;
};

export default randQuote;
