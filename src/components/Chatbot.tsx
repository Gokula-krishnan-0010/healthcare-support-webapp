'use client';

import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Hello! How can I help you today?', isUser: false },
  ]);
  const [input, setInput] = useState('');

  const responses: { [key: string]: string } = {
    help: 'You can request help by filling out our Support Form on the "Request Support" page.',
    volunteer: 'We are always looking for volunteers! Please select "Volunteer Registration" in our Support Form.',
    services: 'We offer medical expense support, a volunteer network, and health consultations.',
    urgent: 'If this is a medical emergency, please call your local emergency services immediately.',
    default: 'I am a simple FAQ bot. Try asking about "help", "volunteer", "services", or "urgent".',
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    setMessages((prev) => [...prev, { text: input, isUser: true }]);
    setInput('');

    setTimeout(() => {
      let botResponse = responses.default;
      for (const key in responses) {
        if (userMessage.includes(key) && key !== 'default') {
          botResponse = responses[key];
          break;
        }
      }
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white border border-gray-200 rounded-lg shadow-2xl w-80 sm:w-96 flex flex-col h-96">
          <div className="bg-primary p-4 rounded-t-lg flex justify-between items-center text-white">
            <h3 className="font-bold">CareSupport Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.isUser ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-grow border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-primary focus:border-primary outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-primary text-white p-2 rounded-md hover:bg-sky-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-sky-500 transition-all transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
