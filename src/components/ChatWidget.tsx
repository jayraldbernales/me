import React, { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { Send, Bot, X, Minimize2, MessageCircleMore } from "lucide-react";

interface Message {
  id: string;
  from: "user" | "bot";
  text: string | ReactNode;
  timestamp: Date;
  typing?: boolean;
}

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const [userName, setUserName] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("chatUserName") || "";
    }
    return "";
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      from: "bot",
      text: userName
        ? `Hi ${userName}! I'm Jayrald's AI assistant. How can I help you today?`
        : "Hi! I'm Jayrald's AI assistant. I'm here to help answer questions about his work, experience, or anything else you'd like to know!",
      timestamp: new Date(),
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userName) {
      localStorage.setItem("chatUserName", userName);
    }
  }, [userName]);

  useEffect(() => {
    if (open && !minimized) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, minimized]);

  useEffect(() => {
    if (open && !minimized) {
      inputRef.current?.focus();
    }
  }, [open, minimized]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addTypingIndicator = () => {
    const typingId = "typing";
    setMessages((msgs) => [
      ...msgs,
      {
        id: typingId,
        from: "bot",
        text: "",
        timestamp: new Date(),
        typing: true,
      },
    ]);
    return typingId;
  };

  const removeTypingIndicator = (typingId: string) => {
    setMessages((msgs) => msgs.filter((msg) => msg.id !== typingId));
  };

  // Smart response system
  const generateSmartResponse = (userMessage: string): string | ReactNode => {
    const message = userMessage.toLowerCase();

    // Extract name if user introduces themselves
    const nameMatch = message.match(
      /(?:i'm|i am|my name is|call me|name's)\s+([a-zA-Z]+)/i
    );
    if (nameMatch && !userName) {
      const extractedName = nameMatch[1];
      const capitalizedName =
        extractedName.charAt(0).toUpperCase() +
        extractedName.slice(1).toLowerCase();
      setUserName(capitalizedName);
      return `Nice to meet you, ${capitalizedName}! How can I help you today?`;
    }

    // Remove user name
    if (
      message.includes("forget my name") ||
      message.includes("remove my name") ||
      message.includes("clear name") ||
      message.includes("don't call me")
    ) {
      if (userName) {
        const oldName = userName;
        setUserName("");
        localStorage.removeItem("chatUserName");
        return `Okay, I won't call you ${oldName} anymore. How should I address you instead?`;
      } else {
        return "I don't have your name stored to forget! What should I call you?";
      }
    }

    // Greeting responses
    if (
      message.match(
        /^(hi|hello|hey|hola|good morning|good afternoon|good evening)/
      )
    ) {
      const greetings = userName
        ? [
            `Hey ${userName}! Great to hear from you again! 😊`,
            `Hello ${userName}! How's your day going?`,
            `Hi ${userName}! What can I help you with today?`,
          ]
        : [
            "Hello! 😊 Nice to meet you! What's your name?",
            "Hey there! 👋 How's it going?",
            "Hi! Great to see you here. What brings you by today?",
            "Hello! 🌟 I'm excited to chat with you!",
          ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Skills and technology
    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("language") ||
      message.includes("tech") ||
      message.includes("programming")
    ) {
      return "Jayrald is proficient in JavaScript, TypeScript, React, Node.js, and various modern web technologies. He's also experienced with databases, APIs, and cloud services. Is there a particular technology stack you're curious about? 🛠️";
    }

    // Contact and work inquiries
    if (
      message.includes("contact") ||
      message.includes("connect") ||
      message.includes("hire") ||
      message.includes("work") ||
      message.includes("project") ||
      message.includes("collaborate")
    ) {
      return (
        <>
          That's awesome! Jayrald is always open to discussing new opportunities
          and collaborations. You can reach him directly at{" "}
          <a
            href="mailto:bernalesj28@gmail.com"
            className="text-blue-500 hover:text-blue-600 underline font-medium"
          >
            bernalesj28@gmail.com
          </a>{" "}
          📧 He typically responds within 24 hours!
        </>
      );
    }

    // Pricing questions
    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("rate") ||
      message.includes("how much") ||
      message.includes("budget")
    ) {
      return "Great question! Project pricing depends on scope, complexity, and timeline. Jayrald offers competitive rates and is happy to discuss your specific needs. I'd recommend reaching out to him directly for a personalized quote! 💰";
    }

    // Experience questions
    if (
      message.includes("experience") ||
      message.includes("portfolio") ||
      message.includes("projects")
    ) {
      return "Jayrald has worked on a variety of projects ranging from e-commerce platforms to custom web applications. He's built solutions for startups and established businesses alike. Would you like me to connect you so he can share some specific examples relevant to your needs? 📊";
    }

    // Availability
    if (
      message.includes("available") ||
      message.includes("timeline") ||
      message.includes("when")
    ) {
      return "I'd need to check with Jayrald about his current availability! He's usually pretty responsive and can often accommodate different timelines. The best way to get accurate availability info is to drop him an email - he'll get back to you quickly! ⏰";
    }

    // Thank you responses
    if (message.includes("thank") || message.includes("thanks")) {
      const thankResponses = userName
        ? [
            `You're very welcome, ${userName}! Happy to help! 😊`,
            `My pleasure, ${userName}! Feel free to ask if you need anything else!`,
            `Anytime, ${userName}! That's what I'm here for! 🌟`,
          ]
        : [
            "You're very welcome! Happy to help! 😊",
            "My pleasure! Feel free to ask anything else!",
            "Anytime! That's what I'm here for! 🌟",
          ];
      return thankResponses[Math.floor(Math.random() * thankResponses.length)];
    }

    // Goodbye responses
    if (message.match(/^(bye|goodbye|see you|talk soon|later)/)) {
      const goodbyes = userName
        ? [
            `Take care, ${userName}! Feel free to come back anytime! 👋`,
            `Goodbye, ${userName}! It was great chatting with you!`,
            `See you later, ${userName}! Don't hesitate to reach out if you need anything! 🌟`,
          ]
        : [
            "Take care! Feel free to come back anytime! 👋",
            "Goodbye! It was great chatting with you!",
            "See you later! Don't hesitate to reach out if you need anything! 🌟",
          ];
      return goodbyes[Math.floor(Math.random() * goodbyes.length)];
    }

    // Question about the bot
    if (
      message.includes("you") &&
      (message.includes("who") ||
        message.includes("what") ||
        message.includes("how"))
    ) {
      return "I'm Jayrald's AI assistant! I'm here to help answer questions about his work, connect potential clients, and provide information about his services. Think of me as his digital representative - I know quite a bit about what he does! 🤖✨";
    }

    // About Jayrald
    if (message.includes("jayrald") || message.includes("about")) {
      const aboutResponses = [
        "Jayrald is a talented developer with expertise in modern web technologies! He's passionate about creating innovative solutions and has experience with React, Node.js, and full-stack development. Would you like to know more about any specific area? 🚀",
        "Great question! Jayrald is a skilled software developer who loves building user-friendly applications. He's always eager to take on new challenges and collaborate on exciting projects. What specifically interests you about his work? 💻",
        "Jayrald is a creative problem-solver who specializes in web development. He has a strong background in JavaScript, React, and modern development practices. Are you interested in working together or learning more about his projects? ✨",
      ];
      return aboutResponses[Math.floor(Math.random() * aboutResponses.length)];
    }

    // Default responses with personality
    const defaultResponses = [
      "That's interesting! Could you tell me more about what you're looking for? I'd love to help connect you with the right information! 🤔",
      "I want to make sure I give you the most helpful response! Could you elaborate on what you'd like to know about Jayrald or his work? 💭",
      "Great question! To give you the best answer, could you share a bit more about what specifically interests you? 🎯",
      "I'm here to help! What would you like to know about Jayrald's services or experience? Feel free to ask me anything! 💪",
      "Hmm, let me think about that! In the meantime, is there anything specific about Jayrald's work or background you'd like to explore? 🚀",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const sendMessage = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: generateId(),
      from: "user",
      text: input.trim(),
      timestamp: new Date(),
    };

    // Add to conversation context
    setConversationContext((prev) => [...prev.slice(-4), input.trim()]);

    setMessages((msgs) => [...msgs, userMessage]);
    const currentInput = input.trim();
    setInput("");
    setIsTyping(true);

    // Add typing indicator
    const typingId = addTypingIndicator();

    // More realistic typing delay based on message length
    const baseDelay = 1000;
    const responseLength = 50; // Approximate response length
    const typingSpeed = 30; // characters per second
    const delay =
      baseDelay + (responseLength * 1000) / typingSpeed + Math.random() * 1000;

    setTimeout(() => {
      removeTypingIndicator(typingId);
      setIsTyping(false);

      const botResponse = generateSmartResponse(currentInput);

      const botMessage: Message = {
        id: generateId(),
        from: "bot",
        text: botResponse,
        timestamp: new Date(),
      };

      setMessages((msgs) => [...msgs, botMessage]);
    }, delay);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const toggleChat = () => {
    setOpen(!open);
    if (!open) {
      setMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setMinimized(!minimized);
    if (minimized) {
    }
  };

  const TypingIndicator = () => (
    <div className="flex justify-start">
      <div className="bg-neutral-800 text-neutral-200 px-3 py-2 rounded-lg text-sm max-w-[70%]">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {open && (
        <div
          className={`w-80 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 flex flex-col overflow-hidden transition-all duration-300 ease-out ${
            minimized ? "h-14" : "h-96"
          } ${
            open
              ? "animate-in slide-in-from-bottom-2 fade-in-0"
              : "animate-out slide-out-to-bottom-2 fade-out-0"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-main text-main border-b border-neutral-800">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-neutral-300 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-bold text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Jayrald's Assistant</h3>
                <p className="text-xs text-main flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 inline-block"></span>
                  {isTyping ? "Typing..." : "Online"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMinimize}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label={minimized ? "Maximize chat" : "Minimize chat"}
              >
                <Minimize2 size={16} />
              </button>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          {!minimized && (
            <>
              <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-main dark:bg-neutral-900 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600">
                {messages.map((msg) => (
                  <div key={msg.id}>
                    <div
                      className={`flex ${
                        msg.from === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.typing ? (
                        <TypingIndicator />
                      ) : (
                        <div
                          className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] break-words ${
                            msg.from === "user"
                              ? "bg-opposite text-opposite rounded-br-md"
                              : "bg-main dark:bg-neutral-800 text-main dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-bl-md"
                          }`}
                        >
                          {msg.text}
                        </div>
                      )}
                    </div>
                    {!msg.typing && (
                      <div
                        className={`text-xs text-neutral-500 mt-1 ${
                          msg.from === "user" ? "text-right" : "text-left"
                        }`}
                      >
                        {formatTime(msg.timestamp)}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Input Area */}
              <div className="flex gap-2 p-3 bg-main dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700">
                <input
                  ref={inputRef}
                  type="text"
                  className="flex-1 rounded-md px-4 py-2 bg-main  text-main border border-neutral-200 dark:border-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-400 transition-shadow"
                  placeholder={
                    isTyping ? "Jayrald is typing..." : "Type your message..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage(e)}
                  disabled={isTyping}
                  aria-label="Type your message"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isTyping}
                  className="p-2 rounded-md bg-neutral-700 text-white hover:bg-neutral-600 hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Chat Toggle Button */}
      {!open && (
        <button
          onClick={toggleChat}
          className="relative w-16 h-16 rounded-full shadow-lg bg-opposite flex items-center justify-center shadow-lg hover:bg-neutral-600 hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Open chat"
        >
          <MessageCircleMore size={28} className="text-opposite" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
