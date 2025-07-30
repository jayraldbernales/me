import type { ReactNode } from "react";

export function generateSmartResponse(
  message: string,
  userName: string,
  setUserName: (name: string) => void
): string | ReactNode {
  const lower = message.toLowerCase();

  // Name extraction
  const nameMatch = lower.match(
    /(?:i'm|i am|im|my name is|call me|name's)\s+([a-zA-Z]+)/i
  );
  if (nameMatch && !userName) {
    const name = nameMatch[1];
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    setUserName(capitalized);
    return `Nice to meet you, ${capitalized}! 👋 How can I help you today?`;
  }

  // Name removal
  if (
    lower.includes("forget my name") ||
    lower.includes("remove my name") ||
    lower.includes("clear name") ||
    lower.includes("don't call me")
  ) {
    if (userName) {
      const oldName = userName;
      setUserName("");
      localStorage.removeItem("chatUserName");
      return `Got it — I won’t call you ${oldName} anymore. What should I call you instead?`;
    }
    return "I don’t have your name saved yet. Want to tell me what to call you?";
  }

  // Privacy / memory
  if (
    lower.includes("save") ||
    lower.includes("saved") ||
    lower.includes("remember") ||
    lower.includes("record") ||
    lower.includes("history") ||
    lower.includes("store this")
  ) {
    return `Good question! This chat isn't saved permanently — I remember your name during our chat to keep things personal, but nothing you say here is stored or shared beyond your device. 🔒`;
  }

  // Greetings
  if (
    lower.match(
      /^(hi|hai|hello|hey|hola|good morning|good afternoon|good evening)/
    )
  ) {
    const greetings = userName
      ? [
          `Hey ${userName}! 👋 Nice to see you again.`,
          `Hi ${userName}! 😊 What can I do for you today?`,
          `Hello ${userName}! Ready when you are.`,
        ]
      : [
          "Hi there! 👋 I’m Jayrald’s AI assistant. What should I call you?",
          "Hello! 😊 Got any questions about Jayrald or his work?",
          "Hey! Nice to meet you. Want to tell me your name?",
        ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Address / Location
  if (
    lower.includes("location") ||
    lower.includes("live") ||
    lower.includes("come from") ||
    lower.includes("where are you from") ||
    lower.includes("address")
  ) {
    return "Jayrald is based in the Philippines 🇵🇭, but he collaborates with people globally!";
  }

  // Questions / Suggestions
  if (
    lower.includes("suggest") ||
    lower.includes("what to ask") ||
    lower.includes("what can i ask") ||
    lower.includes("help") ||
    lower.includes("options") ||
    lower.includes("examples") ||
    lower.includes("don't know what to ask")
  ) {
    return (
      <div className="space-y-3">
        <p>
          {userName ? `Sure ${userName},` : "Sure!"} Here are some questions you
          might ask:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li className="flex items-start">
            <span className="mr-2">🛠️</span>
            <div>
              <span className="font-medium">
                What projects have you worked on recently?
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">💻</span>
            <div>
              <span className="font-medium">What's your full tech stack?</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📩</span>
            <div>
              <span className="font-medium">
                How can I contact you for collaboration?
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🌱</span>
            <div>
              <span className="font-medium">
                What are you currently learning?
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">📍</span>
            <div>
              <span className="font-medium">Where are you based?</span>
            </div>
          </li>
        </ul>
        {!userName && (
          <div className="text-sm bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
            💡 <span className="font-medium">Tip:</span> You can tell me your
            name (like "I'm Alex") and I'll remember it during our chat!
          </div>
        )}
        <p className="text-sm pt-2">
          Or ask me anything else that comes to mind!
        </p>
      </div>
    );
  }

  // Education
  if (
    lower.includes("education") ||
    lower.includes("degree") ||
    lower.includes("study")
  ) {
    return "Jayrald studied Computer Science on Bohol Island State University - Candijay Campus, and has hands-on experience building production applications. He's big on continuous learning!";
  }

  if (lower.includes("babi")) {
    return "HALOO BABIII MWAMWAAA HAHAHAHA";
  }

  // Skills & technologies
  if (
    lower.includes("skill") ||
    lower.includes("technology") ||
    lower.includes("language") ||
    lower.includes("tech") ||
    lower.includes("programming")
  ) {
    const skills = [
      `Jayrald works with React, TypeScript, Node.js, Prisma, PostgreSQL, and more.`,
      `His toolkit includes tools like Vite, Tailwind, Zustand, and RESTful APIs.`,
      `He's confident with both frontend and backend — ask about any specific stack!`,
    ];
    return skills[Math.floor(Math.random() * skills.length)];
  }

  // Contact / Work
  if (
    lower.includes("contact") ||
    lower.includes("connect") ||
    lower.includes("hire") ||
    lower.includes("work") ||
    lower.includes("collaborate")
  ) {
    return (
      <span>
        You can reach Jayrald at{" "}
        <a
          href="mailto:jayraldbernales01@gmail.com"
          className="text-blue-500 underline hover:text-blue-700"
        >
          jayraldbernales01@gmail.com
        </a>{" "}
        , he's open to work, collaborations, and side projects!
      </span>
    );
  }

  // Pricing
  if (
    lower.includes("price") ||
    lower.includes("cost") ||
    lower.includes("rate") ||
    lower.includes("how much") ||
    lower.includes("budget")
  ) {
    return "Rates vary depending on your project needs. Jayrald is flexible and happy to discuss! 💬";
  }

  // Experience / portfolio
  if (
    lower.includes("experience") ||
    lower.includes("portfolio") ||
    lower.includes("projects")
  ) {
    const projects = [
      "Jayrald has built admin dashboards, mobile apps, e-commerce platforms, and chat widgets like this one! 🛠️",
      "He's worked on everything from small landing pages to full-blown marketplaces. Want a specific example?",
      "His portfolio shows real-world solutions across web and mobile. Ask if you want a sneak peek!",
    ];
    return projects[Math.floor(Math.random() * projects.length)];
  }

  // Availability
  if (
    lower.includes("available") ||
    lower.includes("timeline") ||
    lower.includes("when")
  ) {
    return "Jayrald is usually available for new projects! Just drop your inquiry and he’ll respond shortly. 📅";
  }

  // Thanks
  if (lower.includes("thank") || lower.includes("thanks")) {
    const thankResponses = userName
      ? [
          `You're welcome, ${userName}! 🙌 Let me know if you need anything else.`,
          `Anytime, ${userName}! Glad I could help. 😊`,
          `Of course, ${userName}! Always here if you need me. 🤖`,
        ]
      : [
          "You're welcome! 🙌 Let me know if you need anything else.",
          "Happy to help! 😊",
          "Of course! I’m here if you need anything. 🤖",
        ];
    return thankResponses[Math.floor(Math.random() * thankResponses.length)];
  }

  // Goodbyes
  if (lower.match(/^(bye|goodbye|see you|talk soon|later)/)) {
    const bye = userName
      ? [
          `See you around, ${userName}! 👋`,
          `Take care, ${userName}! Come back anytime.`,
          `Goodbye, ${userName}! It was great chatting. 😊`,
        ]
      : ["See you! 👋", "Take care!", "Goodbye! It was great chatting. 😊"];
    return bye[Math.floor(Math.random() * bye.length)];
  }

  // Bot identity
  if (
    lower.includes("you") &&
    (lower.includes("who") || lower.includes("what") || lower.includes("how"))
  ) {
    return "I’m Jayrald’s AI assistant 🤖. I can tell you about his skills, projects, and how to contact him.";
  }

  // About Jayrald
  if (
    lower.includes("jayrald") ||
    lower.includes("about") ||
    lower.includes("what does he do") ||
    lower.includes("who is he") ||
    lower.includes("who's jayrald") ||
    lower.includes("what is jayrald") ||
    lower.includes("describe him") ||
    lower.includes("his job") ||
    lower.includes("his work") ||
    lower.includes("about him")
  ) {
    const about = [
      "Jayrald is a full-stack dev focused on clean design and efficient backends. 🔧",
      "He builds modern apps using React, Node.js, and Prisma. Always learning & shipping!",
      "Jayrald believes in thoughtful UI, scalable APIs, and impactful digital solutions.",
    ];
    return about[Math.floor(Math.random() * about.length)];
  }

  // Fallback
  const fallback = [
    "Hmm, I’m not sure I got that. Could you say it another way?",
    "I'm still learning, and that one stumped me. Want to rephrase it for me?",
    "Sorry! That’s a bit outside what I can respond to — try a different question?",
    "Can you clarify that? I want to make sure I answer you correctly.",
  ];
  return fallback[Math.floor(Math.random() * fallback.length)];
}
