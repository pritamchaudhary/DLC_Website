import React, { useState } from 'react';
import { Settings, Type, Eye, Globe, Volume2, X, Plus, Minus } from 'lucide-react';

interface AccessibilityPanelProps {
  fontSize: 'small' | 'medium' | 'large';
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  language: 'en' | 'hi' | 'es';
  setLanguage: (lang: 'en' | 'hi' | 'es') => void;
}

export function AccessibilityPanel({
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
  language,
  setLanguage
}: AccessibilityPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:transform hover:scale-110 z-50"
        title="Accessibility Settings"
        aria-label="Open accessibility settings"
      >
        <Settings size={24} />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
                <Settings size={28} />
                Accessibility Settings
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
                aria-label="Close accessibility settings"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Font Size */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Type size={24} />
                  Text Size
                </h3>
                <div className="space-y-3">
                  {[
                    { size: 'small', label: 'Small', example: 'Sample text' },
                    { size: 'medium', label: 'Medium', example: 'Sample text' },
                    { size: 'large', label: 'Large', example: 'Sample text' }
                  ].map(({ size, label, example }) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size as any)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        fontSize === size
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{label}</span>
                        <span className={`${
                          size === 'small' ? 'text-sm' :
                          size === 'medium' ? 'text-base' : 'text-lg'
                        }`}>
                          {example}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* High Contrast */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Eye size={24} />
                  Visual Settings
                </h3>
                <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                  <div>
                    <p className="font-medium">High Contrast Mode</p>
                    <p className="text-sm text-gray-600">Better visibility for text and buttons</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={highContrast}
                    onChange={(e) => setHighContrast(e.target.checked)}
                    className="w-6 h-6 text-blue-600 rounded focus:ring-2 focus:ring-blue-600"
                  />
                </label>
              </div>

              {/* Language */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Globe size={24} />
                  Language
                </h3>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        language === lang.code
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Features */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Volume2 size={24} />
                  Voice Features
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => speakText('Welcome to Digital Literacy Course. This is a test of the text-to-speech feature.')}
                    className="w-full p-4 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-lg text-left transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <Volume2 size={20} className="text-green-600" />
                      <div>
                        <p className="font-medium text-green-700">Test Voice Reading</p>
                        <p className="text-sm text-green-600">Click to hear how text sounds</p>
                      </div>
                    </div>
                  </button>
                  
                  <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Voice Commands:</strong> Say "Hello DigiBuddy" to start voice chat, 
                      or click the microphone button in the AI Chat section.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setFontSize(fontSize === 'large' ? 'large' : fontSize === 'medium' ? 'large' : 'medium')}
                    className="p-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg flex items-center justify-center gap-2 font-medium"
                  >
                    <Plus size={20} />
                    Bigger Text
                  </button>
                  <button
                    onClick={() => setFontSize(fontSize === 'small' ? 'small' : fontSize === 'medium' ? 'small' : 'medium')}
                    className="p-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg flex items-center justify-center gap-2 font-medium"
                  >
                    <Minus size={20} />
                    Smaller Text
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-200"
              >
                Apply Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}