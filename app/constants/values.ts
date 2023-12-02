import { AnswerChatBubble, ChatBubble, Question } from "./types";

export const initChats: ChatBubble[] = [
  {
    text: "I'm Wisnu..",
    position: "start",
    lastBubble: false,
  },
  {
    text: "Thanks for coming over!",
    position: "start",
    lastBubble: false,
  },
  {
    text: "Willing to know more about me? Feel free to ask some questions! 😊",
    position: "start",
    lastBubble: true,
  },
];

export const questions: Question[] = [
  {
    id: "0",
    text: "Education background? 🎓",
    question: "Tell me your education background, please..",
  },
  {
    id: "1",
    text: "Skills you have? 🛠️",
    question: "Curious about your skills. What do you offer to your client?",
  },
  {
    id: "2",
    text: "Working experience? 👨🏻‍💻",
    question: "May I know your current job and previous working experience?",
  },
  {
    id: "3",
    text: "Your portfolio? ⭐️",
    question: "Looks interesting already. Show me your work, Wisnu 😁",
  },
  {
    id: "4",
    text: "Hmm, let's work together! 🔥",
    question: "Well, what do you think about working together, Wisnu?",
  },
];

export const answerChat: AnswerChatBubble[] = [
  {
    id: "0",
    answer: [
      {
        text: "Okay",
        position: "start",
        lastBubble: false,
      },
      {
        text: "Well, I was graduated 🎓 from State University of Malang in 2020",
        position: "start",
        lastBubble: false,
      },
      {
        text: "I pursued a Bachelor of Arts in Computer Science 💻",
        position: "start",
        lastBubble: true,
      },
    ],
  },
  {
    id: "1",
    answer: [
      {
        text: "I specialize in mobile and frontend development",
        position: "start",
        lastBubble: false,
      },
      {
        text: "Mastering React Native, React, Next.js, and Git. Working wonders with REST APIs, diving into ES7, JavaScript, and TypeScript is all in a day's work.",
        position: "start",
        lastBubble: false,
      },
      {
        text: " These skills power my ability to craft top-notch mobile apps and create dynamic frontend experiences.",
        position: "start",
        lastBubble: true,
      },
    ],
  },
  {
    id: "2",
    answer: [
      {
        text: "Currently I am working as a Mobile Developer for tech company in Jakarta",
        position: "start",
        lastBubble: false,
      },
      {
        text: "By today, It's been almost 3 years. Alhamdulillah 😊",
        position: "start",
        lastBubble: false,
      },
      {
        text: "Anyway, this is also my first job since I graduated.",
        position: "start",
        lastBubble: true,
      },
    ],
  },
  {
    id: "3",
    answer: [
      {
        text: "I'd love to!",
        position: "start",
        lastBubble: false,
      },
      {
        text: "You know what? I am making it posible to show it here as well. Right now I am working on it 🔥",
        position: "start",
        lastBubble: false,
      },
      {
        text: "For that, please give me sometime and comeback later, okay? 😉",
        position: "start",
        lastBubble: true,
      },
    ],
  },
  {
    id: "4",
    answer: [
      {
        text: "That sounds like a great idea! ⭐️",
        position: "start",
        lastBubble: false,
      },
      {
        text: "I believe discussing this in more detail through email or a personal chat would be more effective.",
        position: "start",
        lastBubble: false,
      },
      {
        text: "Let's connect directly to delve deeper into the possibilities! 😊👌",
        position: "start",
        lastBubble: true,
      },
    ],
  },
];
