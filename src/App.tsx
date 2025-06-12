import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { TutorialsPage } from './components/TutorialsPage';
import { AIChatPage } from './components/AIChatPage';
import { FeedbackPage } from './components/FeedbackPage';
import { AccessibilityPanel } from './components/AccessibilityPanel';

export type Page = 'home' | 'tutorials' | 'ai-chat' | 'feedback';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi' | 'es'>('en');

  useEffect(() => {
    // Apply font size to document
    document.documentElement.className = `font-${fontSize} ${highContrast ? 'high-contrast' : ''}`;
  }, [fontSize, highContrast]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'tutorials':
        return <TutorialsPage />;
      case 'ai-chat':
        return <AIChatPage />;
      case 'feedback':
        return <FeedbackPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ${highContrast ? 'bg-white text-black' : ''}`}>
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        language={language}
      />
      
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      <AccessibilityPanel 
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  );
}

export default App;