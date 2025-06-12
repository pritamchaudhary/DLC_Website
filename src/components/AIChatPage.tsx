import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m DigiBuddy, your friendly AI assistant. I\'m here to help you with any questions about digital tools, technology, or our tutorials. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'How do I download WhatsApp?',
    'Is online banking safe?',
    'How to make a video call?',
    'What is the difference between WiFi and mobile data?',
    'How do I backup my photos?',
    'How to increase font size on my phone?'
  ];

  const predefinedResponses: Record<string, string> = {
    'whatsapp': 'To download WhatsApp: 1) Go to your app store (Google Play Store for Android or App Store for iPhone) 2) Search for "WhatsApp" 3) Tap "Install" or "Get" 4) Once installed, open the app and follow the setup instructions. You\'ll need to verify your phone number.',
    'banking': 'Online banking is generally very safe when you follow these tips: 1) Always use official bank websites or apps 2) Never share your login details 3) Log out completely when done 4) Use strong passwords 5) Check your statements regularly. Banks use advanced security measures to protect your money.',
    'video call': 'To make a video call: 1) Open WhatsApp, Zoom, or your phone\'s video calling app 2) Find the contact you want to call 3) Look for the video camera icon and tap it 4) Wait for them to answer 5) Make sure you have good internet connection for clear video.',
    'wifi data': 'WiFi is internet through your home router (usually unlimited), while mobile data uses your phone plan (usually has limits). WiFi is typically faster and doesn\'t count against your data plan. Use WiFi at home to save mobile data for when you\'re out.',
    'backup photos': 'To backup photos: 1) For Android: Use Google Photos (free 15GB) 2) For iPhone: Use iCloud (free 5GB) 3) You can also email important photos to yourself 4) Consider getting a cloud storage service for more space. Regular backups protect your precious memories!',
    'font size': 'To increase font size: 1) Go to Settings on your phone 2) Look for "Display" or "Accessibility" 3) Find "Font Size" or "Text Size" 4) Choose a larger size 5) Some phones also have "Display Size" to make everything bigger. This makes reading much easier!'
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for keywords in predefined responses
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Default helpful responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! I\'m so glad you\'re here. I\'m ready to help you with any technology questions you have. What would you like to learn about today?';
    }
    
    if (lowerMessage.includes('help')) {
      return 'I\'m here to help! You can ask me about:\n• How to use apps like WhatsApp, Paytm, Google Maps\n• Basic smartphone functions\n• Internet safety tips\n• Video calling\n• And much more! What specific topic interests you?';
    }

    if (lowerMessage.includes('thank')) {
      return 'You\'re very welcome! I\'m always happy to help. Remember, there\'s no such thing as a silly question when it comes to technology. Feel free to ask me anything else!';
    }

    // Generic helpful response
    return 'That\'s a great question! While I\'m still learning, I\'d be happy to help you find the answer. You might also want to check our tutorials section for step-by-step guides, or feel free to ask me to explain something in simpler terms. What specific part would you like me to help with?';
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startListening = () => {
    setIsListening(true);
    // In a real implementation, you would use the Web Speech API here
    setTimeout(() => setIsListening(false), 3000);
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Chat with DigiBuddy
        </h2>
        <p className="text-xl text-gray-700">
          Your friendly AI assistant is here to answer all your technology questions!
        </p>
      </div>

      {/* Quick Questions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Quick Questions to Get Started:</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="bg-blue-50 hover:bg-blue-100 text-blue-700 p-3 rounded-lg text-left transition-all duration-200 hover:shadow-md"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Interface */}
      <div className="bg-white rounded-2xl shadow-lg flex flex-col h-96 md:h-[500px]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                message.sender === 'user' 
                  ? 'bg-blue-600' 
                  : 'bg-green-600'
              }`}>
                {message.sender === 'user' ? (
                  <User size={20} className="text-white" />
                ) : (
                  <Bot size={20} className="text-white" />
                )}
              </div>
              
              <div className={`flex-1 max-w-[80%] ${
                message.sender === 'user' ? 'text-right' : ''
              }`}>
                <div className={`inline-block p-4 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
                {message.sender === 'bot' && (
                  <button
                    onClick={() => isSpeaking ? stopSpeaking() : speakMessage(message.text)}
                    className="mt-2 text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                  >
                    {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    {isSpeaking ? 'Stop' : 'Listen'}
                  </button>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex gap-3">
            <button
              onClick={startListening}
              className={`p-3 rounded-full transition-all duration-200 ${
                isListening 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title="Voice input"
            >
              {isListening ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
            
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question here..."
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
              />
            </div>
            
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-3 rounded-full transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </div>
          
          {isListening && (
            <p className="text-center text-red-600 mt-2 text-sm">
              🎤 Listening... (Voice recognition would work here in a real implementation)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}