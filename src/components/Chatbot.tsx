
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send, Bot, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! I'm the MappleHost assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date()
  }
];

// Predefined responses for demo purposes
const responses: Record<string, string> = {
  'hi': "Hello! How can I assist you with our hosting services today?",
  'hello': "Hi there! What can I help you with regarding our hosting plans?",
  'minecraft': "Our Minecraft hosting plans start at $5.99/month with instant setup, mods support, and 24/7 availability. Would you like more information about specific plans?",
  'vps': "Our VPS plans feature high-performance hardware with NVMe SSDs and dedicated resources. Prices start at $9.99/month with instant provisioning. Need help choosing a plan?",
  'price': "We offer various hosting solutions starting from $5.99/month for Minecraft servers, and $9.99/month for VPS hosting. Each plan comes with different resource allocations. Would you like details on a specific service?",
  'support': "Our support team is available 24/7 through live chat, email, and ticket system. For immediate assistance, you can also check our documentation or knowledge base.",
  'uptime': "We guarantee 99.9% uptime for all our hosting services, backed by our SLA. If we fail to meet this commitment, you'll receive credits on your account.",
  'backup': "Yes, we provide automated daily backups for all hosting plans. Premium plans include more frequent backup options and longer retention periods.",
  'payment': "We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin and Ethereum. All payments are processed securely through our payment gateway."
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const findBestResponse = (input: string): string => {
    // Convert input to lowercase for case-insensitive matching
    const lowerInput = input.toLowerCase();
    
    // Check for exact matches in our response dictionary
    for (const key in responses) {
      if (lowerInput.includes(key)) {
        return responses[key];
      }
    }
    
    // Default response if no match is found
    return "I'm not sure I understand. Could you please rephrase your question about our hosting services?";
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    
    // Simulate thinking/typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findBestResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-20 right-6 w-96 bg-gray-900 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl z-50 overflow-hidden ${isMinimized ? 'h-14' : 'h-[550px]'}`}
          >
            {/* Chat Header */}
            <div 
              className="bg-gray-800 p-4 flex justify-between items-center cursor-pointer"
              onClick={toggleMinimize}
            >
              <div className="flex items-center">
                <div className="p-2 bg-mapple-600/30 rounded-full mr-3">
                  <Bot className="h-5 w-5 text-mapple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">MappleHost Assistant</h3>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {isMinimized ? (
                  <ChevronUp className="h-5 w-5 text-gray-400 hover:text-white" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 hover:text-white" />
                )}
                <X 
                  className="h-5 w-5 text-gray-400 hover:text-white" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                />
              </div>
            </div>
            
            {!isMinimized && (
              <>
                {/* Chat Messages */}
                <div className="p-4 overflow-y-auto h-[calc(100%-120px)] bg-gray-900/80">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === 'user' 
                            ? 'bg-mapple-600 text-white rounded-tr-none' 
                            : 'bg-gray-800 text-gray-200 rounded-tl-none'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs text-right mt-1 opacity-70">
                          {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="mb-4 flex justify-start">
                      <div className="max-w-[80%] p-3 rounded-lg bg-gray-800 text-gray-200 rounded-tl-none">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Chat Input */}
                <div className="p-4 border-t border-gray-800 bg-gray-900">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={inputText}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your question here..."
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg py-2 px-4 text-gray-200 focus:outline-none focus:border-mapple-500"
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      className="rounded-l-none rounded-r-lg bg-mapple-600 hover:bg-mapple-700 h-[38px]"
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-mapple-600 hover:bg-mapple-700 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </>
  );
};
