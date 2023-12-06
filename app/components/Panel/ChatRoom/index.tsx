"use client";

import { useEffect, useState } from "react";
import {
  answerChat,
  initChats,
  likeResponse,
  questions,
  shareResponse,
} from "@/app/constants/values";
import { callname, isTyping, newChat, threeDots } from "@/app/constants/labels";
import { ChatBubble as ChatBubbleType, Question } from "@/app/constants/types";
import { useAppContext } from "@/app/AppContext";
import ChatBubble from "@/app/components/ChatBubble";
import Button from "@/app/components/Button";
import BubbleQuestion from "@/app/components/BubbleQuestion";
import randQuote from "@/app/hooks/randQuote";
import getGreeting from "@/app/hooks/getGreeting";
import balanceChats from "@/app/hooks/balanceChats";
import generateChat from "@/app/hooks/generateChat";

const ChatRoom = () => {
  const { isLikeBtn, isShareBtn } = useAppContext();
  const [chats, setChats] = useState<ChatBubbleType[]>([]);
  const [isAsk, setIsAsk] = useState<boolean>(false);
  const [isSliced, setIsSliced] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setInitChats();
  }, []);

  useEffect(() => {
    if (isLikeBtn) {
      const randomQuote = randQuote();

      if (randomQuote) {
        const quoteChat = generateChat(
          randomQuote.text,
          "start",
          true,
          "quote"
        );

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
    const greeting = getGreeting();
    const updatedChat = [greeting, ...initChats];
    setChats(updatedChat);
    setIsLoading(false);
  };

  const handleAsk = (data: Question) => {
    const question = generateChat(data.question, "end", true);
    chats.push(question);
    setIsLoading(true);
    const answer = answerChat.find((obj) => obj.id === data.id);

    if (answer) {
      setTimeout(() => {
        const newChat = balanceChats(chats, answer.answer, () =>
          setIsLoading(true)
        );
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
          <div className="flex flex-row justify-center text-primary">
            {threeDots}
          </div>
        )}
        {(isLikeBtn || isShareBtn) && (
          <div className="flex flex-row justify-center">
            <div className="text-xs bg-primary text-primary-content rounded-lg py-1 px-2">
              {newChat}
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
              <BubbleQuestion
                key={index}
                text={data.text}
                onClick={() => handleAsk(data)}
              />
            ))}
          </div>
        ) : (
          <Button onClick={() => setIsAsk(true)} />
        )}
      </div>
    </>
  );
};

export default ChatRoom;
