import type { APIRoute } from "astro";

export const get: APIRoute = () => {
  return new Response(
    JSON.stringify({
      quote,
    })
  );
};

const quote = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
    id: "1",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer",
    id: "2",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra",
    id: "3",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln",
    id: "4",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu",
    id: "5",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
    id: "6",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle",
    id: "7",
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
    id: "8",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster",
    id: "9",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
    id: "10",
  },
];
