import React, { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { Send, Bot, X, Minimize2, MessageCircleMore } from "lucide-react";
import { generateSmartResponse } from "./Chat/chatResponses";

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
  const [userName, setUserName] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("chatUserName") || "";
    }
    return "";
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function getPersonalizedGreeting(name: string): string {
    const greetings = [
      `Hi ${name}! 👋 I'm Jayrald's AI assistant. How can I help you today?`,
      `Hey ${name}, welcome back! 👨‍💻 Got any questions about Jayrald’s work?`,
      `Welcome back, ${name}! 🙌 I’m happy to help you with anything you need about Jayrald.`,
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      from: "bot",
      text: userName
        ? getPersonalizedGreeting(userName)
        : "Hi there! 👋 I'm Jayrald's AI assistant. I'm here to answer questions about his work, projects, or anything you're curious about!",
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

  const sendMessage = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: generateId(),
      from: "user",
      text: input.trim(),
      timestamp: new Date(),
    };

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

      const botResponse = generateSmartResponse(
        currentInput,
        userName,
        setUserName
      );

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
          className={`${
            isMobile
              ? "fixed inset-0 w-full h-full rounded-none"
              : "w-80 bottom-6 right-6"
          } bg-white dark:bg-neutral-900 shadow-2xl border md:rounded-xl border-neutral-200 dark:border-neutral-700 flex flex-col overflow-hidden z-50 transition-all duration-300 ease-out ${
            minimized && !isMobile ? "h-14" : isMobile ? "h-full" : "h-96"
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
              {!isMobile && (
                <button
                  onClick={toggleMinimize}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                  aria-label={minimized ? "Maximize chat" : "Minimize chat"}
                >
                  <Minimize2 size={16} />
                </button>
              )}
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
          className="relative w-16 h-16 rounded-full shadow-lg bg-opposite flex items-center justify-center hover:bg-neutral-600 hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Open chat"
        >
          <MessageCircleMore size={28} className="text-opposite" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
