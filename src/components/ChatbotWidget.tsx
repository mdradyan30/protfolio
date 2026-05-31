import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onError: (e) => console.error(e),
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    setInput("");
    await sendMessage({ text });
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-brand text-white shadow-glow grid place-items-center"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-2rem))] h-[540px] max-h-[calc(100vh-8rem)] rounded-3xl bg-card border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-brand text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 grid place-items-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold">Portfolio Assistant</p>
                <p className="text-xs opacity-80">Ask me about Md Radyan's work</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center text-sm text-muted-foreground py-8">
                  👋 Hi! I'm here to answer questions about Md Radyan's services, skills, and projects.
                </div>
              )}
              {messages.map((m) => {
                const text = m.parts
                  .map((p) => (p.type === "text" ? p.text : ""))
                  .join("");
                const isUser = m.role === "user";
                return (
                  <div
                    key={m.id}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] text-sm ${
                        isUser
                          ? "bg-gradient-brand text-white px-4 py-2 rounded-2xl rounded-br-sm"
                          : "text-foreground"
                      }`}
                    >
                      {isUser ? (
                        text
                      ) : (
                        <div className="prose prose-sm max-w-none prose-p:my-1 prose-headings:my-2">
                          <ReactMarkdown>{text}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex gap-1 px-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.3s]" />
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                disabled={isLoading}
                className="flex-1 rounded-full border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="grid place-items-center w-10 h-10 rounded-full bg-gradient-brand text-white disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}