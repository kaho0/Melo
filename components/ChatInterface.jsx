/**
 * ChatInterface Component
 * A responsive chat interface that uses Google's Gemini AI for technical learning assistance
 */

import { useState, useEffect } from 'react';
import { getGeminiResponse } from '../utils/geminiApi';
import LoadingDots from './LoadingDots';
// Icons for UI elements
import { FiUser, FiCpu, FiPlus, FiTrash2, FiMenu } from 'react-icons/fi';
import { BiCode } from 'react-icons/bi';
import { MdContentCopy } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';

/**
 * Predefined suggestions for different categories
 * Used to provide quick access to common questions
 */
const suggestions = {
  'Web Development': [
    'Explain React Hooks',
    'What is CSS Grid?',
    'How to use async/await?',
  ],
  'AI & Machine Learning': [
    'What is overfitting in ML?',
    'Explain neural networks',
    'What is transfer learning?',
  ],
  'Data Science': [
    'What is pandas?',
    'Explain data visualization',
    'What is feature engineering?',
  ],
  'General Science': [
    'What is quantum computing?',
    'Explain blockchain technology',
    'What is cloud computing?',
  ],
  'Programming': [
    'How to reverse a string in JavaScript?',
    'What is recursion?',
    'Explain object-oriented programming',
  ],
};

/**
 * Formats message text with markdown-like syntax
 * Handles code blocks, inline code, bold text, and bullet points
 */
function formatMessage(text) {

  text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<div class="relative my-4 rounded-lg overflow-hidden">
      <div class="flex items-center justify-between bg-gray-800 px-4 py-2">
        <div class="flex items-center gap-2">
          <BiCode class="w-4 h-4" />
          <span class="text-sm text-gray-400">${lang || 'code'}</span>
        </div>
        <button class="copy-button text-gray-400 hover:text-white transition-colors" data-code="${code.trim()}">
          <MdContentCopy class="w-4 h-4" />
        </button>
      </div>
      <pre class="bg-gray-900 p-4 overflow-x-auto"><code class="text-sm font-mono">${code.trim()}</code></pre>
    </div>`;
  });

  // Format inline code with pink highlighting
  text = text.replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-pink-400 px-1.5 py-0.5 rounded font-mono text-sm">$1</code>');

  // Format bold text
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');
  
  // Format bullet points with proper spacing
  text = text.replace(/^\*(.*)/gm, '<li class="flex items-start gap-2 ml-4"><span class="mt-1.5">•</span><span>$1</span></li>');
  
  // Wrap lists in ul tags with proper spacing
  text = text.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul class="space-y-2 my-4">$1</ul>');
  
  return text;
}

export default function ChatInterface({ initialQuery, category }) {
  // State Management
  const [messages, setMessages] = useState([]); // Chat messages
  const [input, setInput] = useState(''); // User input
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isSimpleMode, setIsSimpleMode] = useState(false); // Toggle for simple explanations
  const [copiedIndex, setCopiedIndex] = useState(null); // Track copied code blocks
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar visibility
  
  // Chat History Management
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: 'How to use React Hooks', date: '2024-03-20' },
    { id: 2, title: 'Explain Machine Learning', date: '2024-03-19' },
    { id: 3, title: 'JavaScript Arrays', date: '2024-03-18' },
  ]);
  const [currentChatId, setCurrentChatId] = useState(null);

  // Handle initial query and code copy functionality
  useEffect(() => {
    if (initialQuery) {
      handleSubmit(null, initialQuery);
    }

    // Setup code copy functionality
    const handleCopyClick = async (e) => {
      const button = e.target.closest('.copy-button');
      if (!button) return;

      const code = button.dataset.code;
      await navigator.clipboard.writeText(code);
      
      const index = Array.from(document.querySelectorAll('.copy-button')).indexOf(button);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    };

    document.addEventListener('click', handleCopyClick);
    return () => document.removeEventListener('click', handleCopyClick);
  }, [initialQuery]);

  // Chat Management Functions
  const startNewChat = () => {
    setCurrentChatId(null);
    setMessages([]);
    setInput('');
  };

  const handleSubmit = async (e, query = input) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    const userMessage = query.trim();
    setInput('');
    
    // Create new chat history entry if needed
    if (!currentChatId) {
      const newChat = {
        id: Date.now(),
        title: userMessage.slice(0, 30) + (userMessage.length > 30 ? '...' : ''),
        date: new Date().toISOString().split('T')[0]
      };
      setChatHistory(prev => [newChat, ...prev]);
      setCurrentChatId(newChat.id);
    }

    // Add user message and get AI response
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMessage, isSimpleMode);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteChat = (chatId) => {
    setChatHistory(prev => prev.filter(chat => chat.id !== chatId));
    if (currentChatId === chatId) {
      startNewChat();
    }
  };

  // Get current category suggestions
  const currentSuggestions = category ? suggestions[category] || [] : [];

  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Sidebar for Chat History */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-gray-800 transition-all duration-300 overflow-hidden flex flex-col border-r border-gray-700`}>
        <div className="p-4">
          <button
            onClick={startNewChat}
            className="w-full flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiPlus /> New Chat
          </button>
        </div>
        
        {/* Chat History List */}
        <div className="flex-1 overflow-y-auto">
          {chatHistory.map(chat => (
            <div
              key={chat.id}
              className={`flex items-center justify-between p-3 hover:bg-gray-700 cursor-pointer ${
                currentChatId === chat.id ? 'bg-gray-700' : ''
              }`}
              onClick={() => setCurrentChatId(chat.id)}
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-200 truncate">{chat.title}</div>
                <div className="text-xs text-gray-400">{chat.date}</div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChat(chat.id);
                }}
                className="p-1 hover:text-red-500 text-gray-400"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 flex flex-col bg-gray-900">
        {/* Top Navigation Bar */}
        <div className="bg-gray-800 p-4 flex items-center border-b border-gray-700">
          <button
            onClick={() => setSidebarOpen(prev => !prev)}
            className="p-2 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors"
          >
            <FiMenu size={20} />
          </button>
          <div className="ml-4 text-lg font-semibold text-white">Tech Learning Assistant</div>
        </div>

        {/* Messages Display Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-4 max-w-4xl mx-auto ${
                message.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              {/* User/AI Avatar */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.role === 'user' ? 'bg-blue-600' : 'bg-gray-600'
              }`}>
                {message.role === 'user' ? <FiUser /> : <FiCpu />}
              </div>
              
              {/* Message Content */}
              <div className={`flex-1 space-y-4 ${message.role === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block max-w-[90%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-100'
                }`}>
                  <div 
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                  />
                </div>
              </div>
            </div>
          ))}
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-4 max-w-4xl mx-auto">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <FiCpu />
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <LoadingDots />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-800 p-4 md:p-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Simple Mode Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="checkbox"
                  checked={isSimpleMode}
                  onChange={(e) => setIsSimpleMode(e.target.checked)}
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-sm">Simple Mode</span>
              </label>
            </div>

            {/* Quick Suggestions */}
            {currentSuggestions.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {currentSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSubmit(null, suggestion)}
                    className="bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full text-sm hover:bg-gray-700 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Message Input Form */}
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your question..."
                className="flex-1 bg-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 