import React, { useState, useRef, useEffect } from "react";
import { FiMessageSquare, FiX, FiSend, FiTerminal } from "react-icons/fi";

// Replace with your actual Cloudflare Worker URL
const WORKER_ENDPOINT = "https://portfolio-ai-agent.janithwijethunga5.workers.dev/";

const SUGGESTIONS = [
  "What is Janith's tech stack?",
  "Tell me about the Agri-GMR project",
  "How does the 3D scroll work on this site?",
  "What are Janith's academic qualifications?",
];

const MAX_USER_MESSAGES = 10;

export default function PortfolioChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am Janith's AI representative. Ask me about his software projects, embedded IoT systems, academic credentials, or Anything about Me.",
    },
  ]);

  const chatContainerRef = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

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

    try {
      const response = await fetch(WORKER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply || "No response received.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Agent unreachable right now. Please reach out directly through the contact section.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside
      ref={chatContainerRef}
      className="fixed bottom-6 right-6 z-50 font-sans"
      aria-label="AI Portfolio Assistant"
    >
      {/* Floating Toggle Button - Sleek Obsidian Pill */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 rounded-full border border-white/10 bg-zinc-950/90 px-4 py-3 text-zinc-300 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-zinc-600 hover:text-white hover:shadow-black/50 active:scale-95 cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Open AI chat assistant"
        >
          <div className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-medium tracking-wide">Ask Agent</span>
          <FiTerminal className="text-sm text-zinc-500 transition-transform group-hover:text-zinc-300 group-hover:translate-x-0.5" />
        </button>
      )}

      {/* Chat Window - Monolithic Minimalist Container */}
      {isOpen && (
        <div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="flex h-[650px] w-[500px] sm:w-[500px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-2xl transition-all duration-300"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-zinc-900/40 px-4 py-3.5 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold tracking-wide text-zinc-200">
                    Janith Wijethunga's AI Agent
                  </span>
              
                </div>
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
            className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3.5 text-xs sm:text-[13px] scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed tracking-normal whitespace-pre-wrap ${
                  m.sender === "user"
                    ? "ml-auto border border-zinc-700/80 bg-zinc-100 text-zinc-950 font-medium rounded-br-none shadow-sm"
                    : "bg-zinc-900/80 text-zinc-300 border border-white/[0.06] rounded-bl-none font-normal"
                }`}
              >
                {m.text}
              </div>
            ))}

            {/* Minimalist Typing Indicator */}
            {loading && (
              <div className="flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-zinc-900/60 px-3 py-2 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse" />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse [animation-delay:0.2s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse [animation-delay:0.4s]" />
              </div>
            )}

            {/* Minimalist Quick Prompt Chips */}
            {messages.length <= 2 && !loading && (
              <div className="pt-3 space-y-2">
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

          {/* Input Footer Bar */}
          <div className="border-t border-white/[0.06] bg-zinc-900/20 p-3">
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
      )}
    </aside>
  );
}