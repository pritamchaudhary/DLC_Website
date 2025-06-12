import React from 'react';
import { Home, BookOpen, MessageCircle, MessageSquare, Accessibility } from 'lucide-react';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  language: 'en' | 'hi' | 'es';
}

const translations = {
  en: {
    title: 'Digital Literacy Course',
    tagline: 'Empowering Digital Literacy!',
    home: 'Home',
    tutorials: 'Tutorials',
    aiChat: 'AI Chat',
    feedback: 'Feedback'
  },
  hi: {
    title: 'डिजिटल साक्षरता कोर्स',
    tagline: 'डिजिटल साक्षरता को सशक्त बनाना!',
    home: 'होम',
    tutorials: 'ट्यूटोरियल',
    aiChat: 'AI चैट',
    feedback: 'फीडबैक'
  },
  es: {
    title: 'Curso de Alfabetización Digital',
    tagline: '¡Empoderando la Alfabetización Digital!',
    home: 'Inicio',
    tutorials: 'Tutoriales',
    aiChat: 'Chat IA',
    feedback: 'Comentarios'
  }
};

export function Header({ currentPage, setCurrentPage, language }: HeaderProps) {
  const t = translations[language];

  const navItems = [
    { id: 'home' as Page, label: t.home, icon: Home },
    { id: 'tutorials' as Page, label: t.tutorials, icon: BookOpen },
    { id: 'ai-chat' as Page, label: t.aiChat, icon: MessageCircle },
    { id: 'feedback' as Page, label: t.feedback, icon: MessageSquare },
  ];

  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-500">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
              {t.title}
            </h1>
            <p className="text-lg text-blue-600 font-medium">
              {t.tagline}
            </p>
          </div>
          
          <nav className="flex flex-wrap gap-2 md:gap-4">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 text-base md:text-lg ${
                  currentPage === id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200 hover:shadow-md hover:transform hover:scale-105'
                }`}
                aria-current={currentPage === id ? 'page' : undefined}
              >
                <Icon size={24} />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}