"use client";

import { useEffect, useState } from "react";
import { answerChat, initChats, questions } from "@/app/constants/values";
import ChatBubble from "@/app/components/ChatBubble";
import { ChatBubble as ChatBubbleType, Question } from "@/app/constants/types";
import {
  goodAfternoon,
  goodDawn,
  goodEvening,
  goodMorning,
  tapHere,
} from "@/app/constants/labels";

const ChatRoom = () => {
  const [chats, setChats] = useState<ChatBubbleType[]>([]);
  const [isAsk, setIsAsk] = useState<boolean>(false);
  const [isSliced, setIsSliced] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setInitChats();
  }, []);

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
        let newChat = chats.concat(answer.answer); // HERE SOMETIMES PREVIOUS UDPATE REPLACED
        if (newChat.length > 10) {
          newChat = newChat.slice(newChat.length - 10);
          setIsSliced(true);
        }
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
      <div className="flex flex-col gap-2">
        {isSliced && (
          <div className="flex flex-row justify-center text-primary">•••</div>
        )}
        {chats.map((data, index) => (
          <ChatBubble
            key={index}
            text={data.text}
            position={data.position}
            lastBubble={data.lastBubble}
          />
        ))}
        {isLoading && (
          <div className="flex flex-row text-sm italic text-primary">
            Wisnu is typing...
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
