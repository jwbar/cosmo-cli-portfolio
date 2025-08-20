import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title = "terminal", children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`macos-terminal-window ${className}`}>
      {/* macOS Terminal Header */}
      <div className="macos-terminal-header">
        <div className="flex items-center space-x-3">
          {/* macOS Traffic Lights */}
          <div className="flex items-center space-x-2">
            <div className="macos-traffic-light macos-close"></div>
            <div className="macos-traffic-light macos-minimize"></div>
            <div className="macos-traffic-light macos-maximize"></div>
          </div>
          <span className="text-foreground/90 text-sm font-medium tracking-wide">{title}</span>
        </div>
        <div className="text-muted-foreground/70 text-xs font-mono">
          {new Date().toLocaleTimeString()}
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="macos-terminal-content">
        {children}
      </div>
    </div>
  );
};