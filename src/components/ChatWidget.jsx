import { useState, useEffect, useRef } from "react";

const ChatWidget = () => {
  const initialMessages = [
    { from: "bot", text: "Hi! How can I help you today?" },
  ];

  const initialOptions = [
    "📦 How does it work?",
    "💵 When will I get paid?",
    "🔐 Is it safe?",
    "📞 How do I contact support?",
    "📝 How to get a quote?",
    "✅ No more questions",
  ];

  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chat_messages");
    return saved ? JSON.parse(saved) : initialMessages;
  });
  const [input, setInput] = useState("");
  const [remainingOptions, setRemainingOptions] = useState(() => {
    const saved = localStorage.getItem("chat_options");
    return saved ? JSON.parse(saved) : initialOptions;
  });

  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
    localStorage.setItem("chat_options", JSON.stringify(remainingOptions));
  }, [messages, remainingOptions]);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    const botReply = getBotReply(input);
    setMessages((prev) => [...prev, userMsg, { from: "bot", text: botReply }]);
    setInput("");
  };

  const handleOptionClick = (text) => {
    const userMsg = { from: "user", text };
    const botReply = getBotReply(text);
    setMessages((prev) => [...prev, userMsg, { from: "bot", text: botReply }]);

    if (text.includes("No more questions")) {
      setRemainingOptions([]);
    } else {
      setRemainingOptions((prev) => prev.filter((opt) => opt !== text));
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setCollapsed(false);
  };

  const handleClose = () => {
    setOpen(false);
    setCollapsed(false);
    setMessages(initialMessages);
    setRemainingOptions(initialOptions);
    localStorage.removeItem("chat_messages");
    localStorage.removeItem("chat_options");
  };

  const getBotReply = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("how") && lower.includes("work")) {
      return "Upload your license → Get a valuation → Get paid. Fast and secure!";
    } else if (lower.includes("paid") || lower.includes("payout")) {
      return "As soon as your license is accepted — same day payouts!";
    } else if (lower.includes("safe") || lower.includes("secure")) {
      return "Absolutely. We use bank-grade encryption and secure transfers.";
    } else if (
      lower.includes("contact") ||
      lower.includes("support") ||
      lower.includes("speak")
    ) {
      return "You can fill the contact form on our website. A representative will reach out to you.";
    } else if (lower.includes("quote") || lower.includes("price")) {
      return "To get a quote, please fill out the contact form. We'll respond promptly!";
    } else if (
      lower.includes("no") ||
      lower.includes("done") ||
      lower.includes("thank") ||
      lower.includes("nothing")
    ) {
      return "Glad I could help! Feel free to reach out again anytime.";
    } else {
      return "Thank you! We'll get back to you shortly.";
    }
  };

  return (
    <div>
      {open ? (
        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg w-72 flex flex-col overflow-hidden">
          <div className="bg-indigo-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
            <span>Chat</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setCollapsed((prev) => !prev)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-black dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={collapsed ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
                  />
                </svg>
              </button>
              <button onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-black dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {!collapsed && (
            <>
              <div className="flex-1 p-3 space-y-2 text-sm overflow-y-auto max-h-60">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded ${
                      msg.from === "user"
                        ? "bg-indigo-100 text-black self-end ml-auto"
                        : "bg-gray-200 dark:bg-gray-700 dark:text-white text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                <div ref={endOfMessagesRef} />
              </div>

              {remainingOptions.length > 0 && (
                <div className="p-2 space-y-1">
                  {remainingOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left text-sm bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-800 dark:hover:bg-indigo-700 rounded px-3 py-1"
                      onClick={() => handleOptionClick(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex border-t dark:border-gray-700">
                <input
                  className="flex-1 px-3 py-2 text-sm bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 text-sm bg-indigo-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-indigo-700 transition"
                >
                  Send
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <button
          onClick={handleOpen}
          className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700"
        >
          Chat 💬
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
