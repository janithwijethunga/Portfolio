import React, { useState, useRef, useEffect } from "react";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";

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
      text: "Hi! I am Janith's AI representative. Ask me about his software projects, embedded IoT systems, academic background, or the architecture of this portfolio!",
    },
  ]);

  const chatContainerRef = useRef(null);
  const chatEndRef = useRef(null);

  // Auto-scroll inside chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Click outside listener to automatically close chat
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
        headers: {
          "Content-Type": "application/json",
        },
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
          text: data.reply || "Sorry, I could not process that response.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Unable to contact the AI assistant right now. Please try again or reach out directly through the contact section!",
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
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Open AI chat assistant"
        >
          <FiMessageSquare className="text-xl transition-transform group-hover:rotate-6" />
          <span className="text-sm font-semibold tracking-wide">Ask AI</span>
        </button>
      )}

      {/* Floating Chat Panel */}
      {isOpen && (
        <div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="flex h-[520px] w-[340px] sm:w-[390px] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl backdrop-blur-xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/60 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100">
                  Janith AI Assistant
                </h4>
                <p className="text-[10px] text-zinc-400">Grounded to Portfolio Knowledge</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-zinc-400 transition hover:bg-zinc-800 hover:text-white cursor-pointer"
              aria-label="Close chat window"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* Messages Stream */}
          <div
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3 text-sm"
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] rounded-2xl p-3 leading-relaxed text-xs sm:text-sm whitespace-pre-wrap ${
                  m.sender === "user"
                    ? "ml-auto bg-blue-600 text-white rounded-br-none"
                    : "bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-bl-none shadow-sm"
                }`}
              >
                {m.text}
              </div>
            ))}

            {/* Typing Loader Indicator */}
            {loading && (
              <div className="flex items-center gap-1.5 rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-400 max-w-[120px] rounded-bl-none">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.2s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            {/* Suggestion Prompt Chips */}
            {messages.length <= 2 && !loading && (
              <div className="pt-2 space-y-2">
                <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                  Suggested Prompts
                </p>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => handleSend(suggestion)}
                      className="w-full text-left rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-300 transition hover:border-blue-500/50 hover:bg-zinc-800/80 cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input & Form Control Area */}
          <div className="border-t border-zinc-800/80 p-3 bg-zinc-900/40">
            {isLimitReached ? (
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-center text-[11px] text-zinc-400">
                Session message limit reached. Connect directly via LinkedIn or email!
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-blue-500"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500 disabled:opacity-40 cursor-pointer"
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