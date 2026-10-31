import React, { useState, useRef, useEffect } from "react";
import { FiX, FiSend } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

const WORKER_ENDPOINT =
  "https://portfolio-ai-agent.janithwijethunga5.workers.dev/";

const SUGGESTIONS = [
  "Tell me about yourself",
  "What is your core tech stack?",
  "How does the portfolio scroll architecture work?",
  "What are your academic qualifications?",
  "Can you tell me about your frontend experience?",
];

const MAX_USER_MESSAGES = 10;

// Upgraded rich text renderer for structured lists, nested points, and bold text
function formatMarkdownText(text) {
  if (!text) return "";

  const lines = text.split("\n");

  return lines.map((line, lineIndex) => {
    const trimmed = line.trim();

    // Clean structural spacing for empty lines
    if (!trimmed) {
      return <div key={lineIndex} className="h-2" />;
    }

    // Detect primary numbered categories: "1.", "2.", "3.", etc.
    const isPrimaryNumber = /^[0-9]+\.\s/.test(trimmed);

    // Detect nested decimal sub-points: "2.1", "3.2", etc.
    const isSubDecimal = /^[0-9]+\.[0-9]+\s/.test(trimmed);

    // Detect bullet points: "+", "-", "*"
    const isBullet = /^[-+*]\s/.test(trimmed);

    // Parse **bold** markdown tags inside the line
    const parts = line.split(/(\*\*.*?\*\*)/g);

    return (
      <div
        key={lineIndex}
        className={`leading-relaxed transition-all ${
          isPrimaryNumber
            ? "mt-2.5 font-medium text-zinc-100 first:mt-0"
            : isSubDecimal
            ? "ml-3 sm:ml-4 mt-1 border-l border-zinc-700/50 pl-2.5 text-zinc-300"
            : isBullet
            ? "ml-3 sm:ml-4 flex items-start gap-1.5 text-zinc-300"
            : "text-zinc-300"
        }`}
      >
        {isBullet && (
          <span className="text-zinc-500 font-mono text-xs select-none">
            •
          </span>
        )}
        <span>
          {parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
              return (
                <strong
                  key={index}
                  className="font-semibold text-zinc-100 tracking-tight"
                >
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </span>
      </div>
    );
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
    <div className="whitespace-pre-wrap leading-relaxed text-xs sm:text-[13px]">
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
      text: "Hello! I am Janith's AI representative. Ask me about my technical stack, web architectures, or engineering experience!",
    },
  ]);

  const chatContainerRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Click outside to close (ignores clicks on mobile keyboard popups)
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
      className="fixed z-[9999] font-sans pointer-events-none"
      aria-label="AI Portfolio Assistant"
    >
      {/* Floating Toggle Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-auto">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`group flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 p-1.5 sm:p-2 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-out hover:scale-105 active:scale-95 cursor-pointer ${
            isOpen
              ? "opacity-0 scale-75 pointer-events-none"
              : "opacity-100 scale-100 pointer-events-auto"
          }`}
          aria-expanded={isOpen}
          aria-label="Open AI chat assistant"
        >
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dksfpirc6/image/upload/v1793432657/agent-bot_csq4ln.png"
              alt="AI Agent Avatar"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-emerald-500/40 transition-transform group-hover:ring-emerald-400"
            />
            <span className="absolute bottom-0.5 right-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border-2 border-zinc-950" />
            </span>
          </div>
        </button>
      </div>

      {/* Fully Responsive Animated Chat Panel */}
      <div
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        className={`fixed z-[9999] flex flex-col overflow-hidden border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          /* Mobile Viewport (<640px): Centered Docked Sheet */
          inset-x-3 bottom-3 h-[85dvh] max-h-[600px] w-auto rounded-3xl origin-bottom
          /* Desktop / Tablet (>=640px): Bottom-Right Popover */
          sm:inset-auto sm:right-6 sm:bottom-6 sm:h-[560px] sm:w-[410px] sm:rounded-2xl sm:origin-bottom-right
          ${
            isOpen
              ? "pointer-events-auto opacity-100 scale-100 translate-y-0"
              : "pointer-events-none opacity-0 scale-95 translate-y-4"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-zinc-900/60 px-4 py-3 sm:py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/20">
              <BsStars className="text-sm h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wide text-zinc-100">
                Ask Anything About Me
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">
                Janith's Digital Representative
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-zinc-100 active:scale-95 cursor-pointer"
            aria-label="Close chat"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        {/* Messages Stream */}
        <div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="flex-1 overflow-y-auto overscroll-contain p-3.5 sm:p-4 space-y-3.5 text-xs sm:text-[13px] bg-[#171a21]"
        >
          {messages.map((m, idx) => {
            const isLatestBotMessage =
              m.sender === "bot" && idx === messages.length - 1;

            return (
              <div
                key={idx}
                className={`max-w-[88%] sm:max-w-[85%] rounded-2xl px-3.5 py-2.5 tracking-normal transition-all duration-200 ${
                  m.sender === "user"
                    ? "ml-auto border border-zinc-700/80 bg-white text-black font-medium rounded-br-none shadow-sm"
                    : "bg-zinc-900/85 text-zinc-300 border border-white/[0.08] rounded-bl-none shadow-sm font-normal"
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
            <div className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-zinc-900/85 px-4 py-3.5 w-fit rounded-bl-none shadow-sm">
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
                    className="group flex items-center justify-between w-full rounded-xl border border-white/[0.06] bg-zinc-900/40 px-3 py-2 text-left text-xs text-zinc-400 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/90 hover:text-zinc-200 active:scale-[0.99] cursor-pointer"
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

        {/* Input Footer */}
        <div className="border-t border-white/[0.08] bg-zinc-900/30 p-2.5 sm:p-3 pb-3 sm:pb-3.5">
          {isLimitReached ? (
            <div className="rounded-xl border border-white/[0.06] bg-zinc-900/40 px-3 py-2 text-center text-[11px] text-zinc-500">
              Session message limit reached. Connect directly via the contact form.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-2.5 py-1.5 focus-within:border-zinc-500 focus-within:ring-1 focus-within:ring-zinc-500/30 transition-all"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my projects, stack..."
                className="flex-1 bg-transparent px-1 py-1 text-xs text-zinc-100 placeholder-zinc-500 outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-100 text-zinc-950 transition-all hover:bg-white active:scale-95 disabled:opacity-30 disabled:hover:bg-zinc-100 cursor-pointer"
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