import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title = "terminal", children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg overflow-hidden terminal-glow ${className}`}>
      {/* Terminal Header */}
      <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-cosmo-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
          </div>
          <span className="text-muted-foreground text-sm font-mono">{title}</span>
        </div>
        <div className="text-muted-foreground text-xs font-mono">
          {new Date().toLocaleTimeString()}
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};