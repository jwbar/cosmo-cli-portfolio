import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title = "terminal", children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg overflow-hidden elegant-container urban-hover relative ${className}`}>
      {/* Terminal Header */}
      <div className="bg-gradient-elegant px-6 py-4 flex items-center justify-between border-b border-border/50 relative">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80 animate-refined-flicker"></div>
            <div className="w-3 h-3 rounded-full bg-urban-gold animate-refined-flicker" style={{ animationDelay: '1s' }}></div>
            <div className="w-3 h-3 rounded-full bg-primary animate-refined-flicker" style={{ animationDelay: '2s' }}></div>
          </div>
          <span className="text-foreground text-sm font-elegant font-medium">{title}</span>
        </div>
        <div className="text-muted-foreground text-xs font-mono">
          <span className="text-urban-copper">[</span>
          {new Date().toLocaleTimeString()}
          <span className="text-urban-copper">]</span>
        </div>
        
        {/* Subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-border opacity-60"></div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-8 relative">
        {children}
      </div>
      
      {/* Subtle corner accents */}
      <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-primary/30 rounded-tr-sm"></div>
      <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-secondary/30 rounded-bl-sm"></div>
    </div>
  );
};