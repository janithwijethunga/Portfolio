import React, { useState, useRef, useEffect } from "react";
import { FiX, FiSend } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

const WORKER_ENDPOINT =
  "https://portfolio-ai-agent.janithwijethunga5.workers.dev/";

const SUGGESTIONS = [
  "What is your core tech stack?",
  "How does the portfolio scroll architecture work?",
  "What are your academic qualifications?",
  "Can you tell me about your frontend experience?",
];

const MAX_USER_MESSAGES = 10;

// Parses **bold text** into real <strong> elements safely
function formatMarkdownText(text) {
  if (!text) return "";

  // Split by markdown bold syntax (**text**)
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={index} className="font-semibold text-zinc-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

// Typewriter component for word-by-word streaming
function StreamingMessage({ fullText, isLatest, onStreamComplete }) {
  const [displayedText, setDisplayedText] = useState(isLatest ? "" : fullText);
  const [isTyping, setIsTyping] = useState(isLatest);

  useEffect(() => {
    if (!isLatest) {
      setDisplayedText(fullText);
      setIsTyping(false);
      return;
    }

    const words = fullText.split(" ");
    let currentIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const intervalId = setInterval(() => {
      currentIndex += 1;
      setDisplayedText(words.slice(0, currentIndex).join(" "));

      if (currentIndex >= words.length) {
        clearInterval(intervalId);
        setIsTyping(false);
        if (onStreamComplete) onStreamComplete();
      }
    }, 28);

    return () => clearInterval(intervalId);
  }, [fullText, isLatest]);

  return (
    <div className="whitespace-pre-wrap leading-relaxed">
      {formatMarkdownText(displayedText)}
      {isTyping && (
        <span className="inline-block h-3.5 w-1.5 translate-y-0.5 ml-1 bg-zinc-400 animate-pulse" />
      )}
    </div>
  );
}

export default function PortfolioChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am Janith's AI representative. Ask me about my technical stack, web architectures!",
    },
  ]);

  const chatContainerRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Click outside to close chat
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const userMessageCount = messages.filter((m) => m.sender === "user").length;
  const isLimitReached = userMessageCount >= MAX_USER_MESSAGES;

  const handleSend = async (customPrompt) => {
    const textToSend = (customPrompt || input).trim();
    if (!textToSend || loading || isLimitReached) return;

    const userEntry = { sender: "user", text: textToSend };
    const updatedMessages = [...messages, userEntry];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    // Guaranteed minimum 3-second thinking state
    const minDelay = new Promise((resolve) => setTimeout(resolve, 3000));

    const apiFetch = fetch(WORKER_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updatedMessages }),
    }).then(async (res) => {
      if (!res.ok) throw new Error(`Status: ${res.status}`);
      return res.json();
    });

    try {
      const [, data] = await Promise.all([minDelay, apiFetch]);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply || "No reply was received.",
        },
      ]);
    } catch (err) {
      await minDelay;
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I ran into a temporary connection issue. Please feel free to ask again or reach out directly!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside
      ref={chatContainerRef}
      className="fixed bottom-6 right-6 z-[9999] font-sans"
      aria-label="AI Portfolio Assistant"
    >
      {/* Floating Toggle Pill Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-3 rounded-full  px-4 py-3  backdrop-blur-md transition-all duration-300 hover:border-zinc-500 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Open AI chat assistant"
      >
        <img
          src="https://res.cloudinary.com/dksfpirc6/image/upload/v1793422861/agent-bot_o1f89l.webp"
          alt="AI Agent Avatar"
          className="h-16 w-16 rounded-full"
        />
      </button>

      {/* Smoothly Animated Chat Panel Window */}
      <div
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        className={`absolute bottom-0 right-0 flex h-[540px] w-[340px] sm:w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 origin-bottom-right ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "pointer-events-auto opacity-100 scale-100 translate-y-0 shadow-black/80"
            : "pointer-events-none opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-zinc-900/40 px-4 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="relative flex h-5 w-5">
              <BsStars />
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold tracking-wide text-zinc-200">
                Ask Anything About Me
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-1.5 text-zinc-500 transition hover:bg-white/5 hover:text-zinc-200 cursor-pointer"
            aria-label="Close chat"
          >
            <FiX className="text-base" />
          </button>
        </div>

        {/* Messages Stream */}
        <div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3.5 text-xs sm:text-[13px]"
        >
          {messages.map((m, idx) => {
            const isLatestBotMessage =
              m.sender === "bot" && idx === messages.length - 1;

            return (
              <div
                key={idx}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 tracking-normal transition-all duration-200 ${
                  m.sender === "user"
                    ? "ml-auto border border-zinc-700/80 bg-zinc-100 text-zinc-950 font-medium rounded-br-none shadow-sm"
                    : "bg-zinc-900/80 text-zinc-300 border border-white/[0.06] rounded-bl-none font-normal"
                }`}
              >
                {m.sender === "user" ? (
                  <div className="whitespace-pre-wrap">{m.text}</div>
                ) : (
                  <StreamingMessage
                    fullText={m.text}
                    isLatest={isLatestBotMessage}
                    onStreamComplete={() =>
                      chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                  />
                )}
              </div>
            );
          })}

          {/* Thinking Animation */}
          {loading && (
            <div className="flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-zinc-900/80 px-4 py-3.5 w-fit rounded-bl-none shadow-sm">
              <span
                className="h-2 w-2 rounded-full bg-zinc-300 animate-dot-pause"
                style={{ animationDelay: "0s" }}
              />
              <span
                className="h-2 w-2 rounded-full bg-zinc-300 animate-dot-pause"
                style={{ animationDelay: "0.18s" }}
              />
              <span
                className="h-2 w-2 rounded-full bg-zinc-300 animate-dot-pause"
                style={{ animationDelay: "0.36s" }}
              />
            </div>
          )}

          {/* Quick Prompts */}
          {messages.length <= 2 && !loading && (
            <div className="pt-2 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                Quick Prompts
              </span>
              <div className="flex flex-col gap-1.5">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSend(suggestion)}
                    className="group flex items-center justify-between w-full rounded-xl border border-white/[0.06] bg-zinc-900/40 px-3 py-2 text-left text-xs text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/90 hover:text-zinc-200 cursor-pointer"
                  >
                    <span className="truncate pr-2">{suggestion}</span>
                    <span className="text-[10px] text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-400 font-mono">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] bg-zinc-900/20 p-3">
          {isLimitReached ? (
            <div className="rounded-xl border border-white/[0.06] bg-zinc-900/40 px-3 py-2 text-center text-[11px] text-zinc-500">
              Session message limit reached. Connect directly via the contact
              form.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/70 px-2.5 py-1.5 focus-within:border-zinc-600 transition-colors"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-transparent px-1 py-1 text-xs text-zinc-100 placeholder-zinc-500 outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-100 text-zinc-950 transition-all hover:bg-white disabled:opacity-30 disabled:hover:bg-zinc-100 cursor-pointer"
                aria-label="Send message"
              >
                <FiSend className="text-xs" />
              </button>
            </form>
          )}
        </div>
      </div>
    </aside>
  );
}
