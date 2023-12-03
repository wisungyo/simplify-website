"use client";

import { useEffect, useState } from "react";
import {
  answerChat,
  initChats,
  likeResponse,
  questions,
  quotes,
  shareResponse,
} from "@/app/constants/values";
import ChatBubble from "@/app/components/ChatBubble";
import { ChatBubble as ChatBubbleType, Question } from "@/app/constants/types";
import { useAppContext } from "../AppContext";
import {
  callname,
  goodAfternoon,
  goodDawn,
  goodEvening,
  goodMorning,
  isTyping,
  tapHere,
} from "@/app/constants/labels";

const ChatRoom = () => {
  const [chats, setChats] = useState<ChatBubbleType[]>([]);
  const [isAsk, setIsAsk] = useState<boolean>(false);
  const [isSliced, setIsSliced] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isLikeBtn, isShareBtn } = useAppContext();

  useEffect(() => {
    setInitChats();
  }, []);

  useEffect(() => {
    if (isLikeBtn) {
      const randomNumber = Math.floor(Math.random() * 20);
      const quote = quotes.find((data) => data.id === randomNumber.toString());

      if (quote) {
        const quoteChat = {
          text: quote.text,
          position: "start",
          lastBubble: true,
          type: "quote",
        };

        const response = [...likeResponse, quoteChat];
        setIsSliced(false);
        setChats(response);
      }
    }
  }, [isLikeBtn]);

  useEffect(() => {
    if (isShareBtn) {
      setIsSliced(false);
      setChats(shareResponse);
    }
  }, [isShareBtn]);

  const setInitChats = () => {
    const currentTime = new Date().getHours();
    const greeting = {
      text: getGreeting(currentTime),
      position: "start",
      lastBubble: false,
    };
    const updatedChat = [greeting, ...initChats];
    setChats(updatedChat);
    setIsLoading(false);
  };

  const getGreeting = (currentTime: number): string => {
    const dawnEnd = 4;
    const morningEnd = 12;
    const afternoonEnd = 18;

    if (currentTime < dawnEnd) return goodDawn;
    else if (currentTime < morningEnd) return goodMorning;
    else if (currentTime < afternoonEnd) return goodAfternoon;
    else return goodEvening;
  };

  const balanceChats = (array: ChatBubbleType[]) => {
    let updatedChat = [...chats, ...array];
    if (updatedChat.length > 10) {
      updatedChat = updatedChat.slice(updatedChat.length - 10);
      setIsSliced(true);
    }
    return updatedChat;
  };

  const handleAsk = (data: Question) => {
    const question = {
      text: data.question,
      position: "end",
      lastBubble: true,
    };
    chats.push(question);
    setIsLoading(true);

    const answer = answerChat.find((obj) => obj.id === data.id);
    if (answer) {
      setTimeout(() => {
        const newChat = balanceChats(answer.answer);
        setChats(newChat);
        setIsLoading(false);
      }, 650);
    } else {
      setIsLoading(false);
    }
    setIsAsk(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2 mt-8">
        {isSliced && (
          <div className="flex flex-row justify-center text-primary">•••</div>
        )}
        {isLikeBtn && (
          <div className="flex flex-row justify-center">
            <div className="text-xs bg-primary text-primary-content rounded-lg py-1 px-2">
              New Chat
            </div>
          </div>
        )}
        {chats.map((data, index) => (
          <ChatBubble
            key={index}
            text={data.text}
            position={data.position}
            lastBubble={data.lastBubble}
            type={data?.type}
          />
        ))}
        {isLoading && (
          <div className="flex flex-row text-sm italic text-primary">
            {callname} {isTyping}
          </div>
        )}
      </div>
      <div className="mt-8">
        {isAsk ? (
          <div className="flex flex-row scroll-smooth flex-wrap">
            {questions.map((data, index) => (
              <div
                key={index}
                className="py-2 px-3 rounded-xl text-xs whitespace-nowrap mr-2 mb-2 cursor-pointer shadow-sm ring-1 ring-inset ring-neutral hover:bg-neutral-content hover:text-neutral"
                onClick={() => handleAsk(data)}
              >
                {data.text}
              </div>
            ))}
          </div>
        ) : (
          <div
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-neutral text-neutral-content px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-neutral hover:bg-neutral-content hover:text-neutral cursor-pointer"
            onClick={() => setIsAsk(true)}
          >
            {tapHere}
          </div>
        )}
      </div>
    </>
  );
};

export default ChatRoom;
