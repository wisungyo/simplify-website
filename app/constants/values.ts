import { AnswerChatBubble, ChatBubble, Question, Quotes } from "./types";

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

export const likeResponse: ChatBubble[] = [
  {
    text: "🎉🎉 🥳🥳 ❤️❤️",
    position: "start",
    lastBubble: false,
  },
  {
    text: "Yahoo.. I’m glad you like it !!",
    position: "start",
    lastBubble: false,
  },
  {
    text: "Let me celebrate it by giving you quote of the day :",
    position: "start",
    lastBubble: false,
  },
];

export const shareResponse: ChatBubble[] = [
  {
    text: "📝📝 ✅✅",
    position: "start",
    lastBubble: false,
  },
  {
    text: "Whoos! You just clicked share button.",
    position: "start",
    lastBubble: false,
  },
  {
    text: "{ wisungyo.com } is copied to your clipboard. Feel free to share anywhere you want ya.. 😊",
    position: "start",
    lastBubble: true,
  },
];

export const quotes: Quotes[] = [
  {
    id: "0",
    text: "Oh Allah, when I lose my hopes and plans, help me remember that your love is greater than my disappointments, and your plans for my life are better than my dreams.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "1",
    text: "If you like somebody, ask Allah to give them to you. If you still don't get them, know that somebody else asked Allah for you.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "2",
    text: "It is easier to turn a mountain into dust, than to create love in a heart that is filled with hatred.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "3",
    text: "What’s meant for you will never miss you and what missed you was never meant for you.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "4",
    text: "Do not raise your children the way your parents raised you, they were born for a different time.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "5",
    text: "Never explain yourself to anyone, because the one who likes you would not need it, and the one dislikes you would not believe it.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "6",
    text: "Hate no one, no matter how much they’ve wronged you. Live humbly, no matter how wealthy you become. Think positively, no matter how hard life is. Give much, even if you’ve been given little. Keep in touch with the ones who have forgotten you, and forgive who has wronged you, and not stop praying for the best for those you love.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "7",
    text: "Be like a flower that gives its fragrance even to the hand that crushed it.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "8",
    text: "Never make a decision in anger, and never make promise in happiness.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "9",
    text: "The worst of our faults is our interest in other people’s faults.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "10",
    text: "How strange and foolish is man. He loses his health in gaining wealth. Then, to regain health, he wastes his wealth. He ruins his present while worrying about his future - but weeps in the future by recalling his past. He lives as though death shall never come to him - but dies in a way as if he were never born.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "11",
    text: "Beautiful people are not always good, but good people are always beautiful.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "12",
    text: "The days of life pass away like clouds, so do good while you are alive.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "13",
    text: "A hopeless man sees difficulties in every chance, but a hopeful person sees chances in every difficulty.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "14",
    text: "Authority, power, and wealth do not change a man; they only reveal him.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "15",
    text: "Life consists of two days: one for you and one against you, so when it's for you don't be proud or reckless, and when it's against you be patient, for both days are test for you",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "16",
    text: "Do not let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine more brightly.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "17",
    text: "Do not use the sharpness of your speech on your mother who taught you how to speak.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "18",
    text: "Don't engage your heart in grief over the past, or you won't be ready for what is coming.",
    category: "motivation",
    author: "Ali bin Abi Tholib",
  },
  {
    id: "19",
    text: "Not every man with a heart is understanding, nor every man with an ear a listener, and nor every man with eyes able to see.",
    category: "motivation",
    author: "",
  },
];
