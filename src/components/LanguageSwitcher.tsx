import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

export type Language = 'en' | 'de' | 'es';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages = {
  en: { label: 'EN', name: 'English' },
  de: { label: 'DE', name: 'Deutsch' },
  es: { label: 'ES', name: 'Español' }
};

export const LanguageSwitcher = ({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary hover:text-primary hover:bg-primary/10 font-mono text-sm"
      >
        {languages[currentLanguage].label}
        <ChevronDown className="ml-1 h-3 w-3" />
      </Button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-md overflow-hidden terminal-glow z-50">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => {
                onLanguageChange(code as Language);
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left font-mono text-sm hover:bg-primary/10 text-foreground"
            >
              {lang.label} - {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};