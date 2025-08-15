import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title = "terminal", children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`bg-card border border-primary/30 rounded-lg overflow-hidden terminal-glow hacker-hover scan-lines relative ${className}`}>
      {/* Terminal Header */}
      <div className="bg-muted px-4 py-3 flex items-center justify-between border-b border-primary/20 relative">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-hacker-red shadow-[0_0_6px_currentColor] animate-neon-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-hacker-yellow shadow-[0_0_6px_currentColor] animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_6px_currentColor] animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <span className="text-primary text-sm font-code neon-text">{title}</span>
        </div>
        <div className="text-primary/70 text-xs font-mono">
          <span className="text-secondary">[</span>
          {new Date().toLocaleTimeString()}
          <span className="text-secondary">]</span>
        </div>
        
        {/* Header glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-neon opacity-50"></div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 relative circuit-pattern">
        {children}
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary/40"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary/40"></div>
    </div>
  );
};