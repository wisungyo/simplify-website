"use client";

import { useState } from "react";
import { answerChat, initChats, questions } from "@/app/constants/values";
import ChatBubble from "@/app/components/ChatBubble";
import { ChatBubble as ChatBubbleType, Question } from "@/app/constants/types";
import { tapHere } from "@/app/constants/labels";

const ChatRoom = () => {
  const [chats, setChats] = useState<ChatBubbleType[]>(initChats);
  const [isAsk, setIsAsk] = useState<boolean>(false);
  const [isSliced, setIsSliced] = useState<boolean>(false);

  const handleAsk = (data: Question) => {
    const question = {
      text: data.question,
      position: "end",
      lastBubble: true,
    };

    const chat = chats.push(question);
    const answer = answerChat.find((obj) => obj.id === data.id);

    if (answer) {
      setTimeout(() => {
        let newChat = chats.concat(answer.answer);
        if (newChat.length > 10) {
          newChat = newChat.slice(newChat.length - 10);
          setIsSliced(true);
        }
        setChats(newChat);
      }, 500);
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
