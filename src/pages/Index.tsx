import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TerminalWindow } from '@/components/TerminalWindow';
import { TypeWriter } from '@/components/TypeWriter';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ContactForm } from '@/components/ContactForm';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Camera, 
  Terminal,
  Rocket,
  Satellite,
  Monitor
} from 'lucide-react';

const Index = () => {
  const { currentLanguage, setCurrentLanguage, t } = useTranslation();
  const [currentSection, setCurrentSection] = useState('boot');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSection('main');
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const skills = {
    languages: ['Python', 'C++', 'JavaScript', 'TypeScript', 'Rust', 'Go'],
    frameworks: ['React', 'Node.js', 'FastAPI', 'TensorFlow', 'Docker', 'Kubernetes'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis', 'InfluxDB'],
    tools: ['Git', 'Linux', 'Arduino', 'RaspberryPi', 'AWS', 'GCP']
  };

  if (currentSection === 'boot') {
    return (
      <div className="min-h-screen cosmic-bg flex items-center justify-center relative overflow-hidden">
        {/* Cosmic starfield */}
        <div className="starfield"></div>
        {/* Matrix rain background */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="matrix-rain absolute text-xs opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={j} className="mb-1">
                  {String.fromCharCode(0x30a0 + Math.random() * 96)}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-6 z-10 animate-terminal-boot">
          <div className="space-y-2">
            <div className="text-primary font-code text-lg neon-text">
              <TypeWriter 
                text="INITIALIZING DEVELOPER TERMINAL v2.1.337..."
                speed={30}
              />
            </div>
            <div className="text-secondary font-mono text-sm">
              <TypeWriter 
                text="[████████████████████████████████] 100%"
                speed={20}
                delay={2000}
              />
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-neon-pulse"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-neon-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-neon-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
          
          <div className="text-primary/70 font-mono text-xs">
            <TypeWriter 
              text="Connecting to neural matrix..."
              speed={40}
              delay={3500}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen cosmic-bg relative overflow-hidden">
      {/* Cosmic starfield */}
      <div className="starfield"></div>

      {/* Elite Developer Header */}
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-primary/20 z-50 hacker-hover">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Terminal className="text-primary animate-neon-pulse" size={24} />
            <span className="font-code text-primary neon-text">
              <span className="text-secondary">[</span>
              ~/jay.cv
              <span className="text-secondary">]</span>
            </span>
          </div>
          <LanguageSwitcher 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
        </div>
        
        {/* Header scan line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-neon opacity-30"></div>
      </header>

      <main className="pt-20 pb-10">
        <div className="container mx-auto px-6 space-y-16">
          
          {/* Elite Hero Section */}
          <section className="text-center py-16 relative">
            <TerminalWindow title="./execute_profile.sh" className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="relative group">
                    <img
                      src="/lovable-uploads/ec5f9a66-2521-496f-a030-a5f26e0fb057.png"
                      alt="Jay William Barros"
                      className="w-48 h-48 rounded-full border-2 border-primary/50 object-cover hacker-hover shadow-[0_0_20px_hsl(var(--primary)/0.3)] animate-float"
                    />
                    {/* Orbital rings */}
                    <div className="absolute inset-0 rounded-full border border-secondary/30 animate-spin" style={{ animationDuration: '20s' }}></div>
                    <div className="absolute inset-2 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  </div>
                </div>
                
                <div className="flex-1 text-left space-y-4">
                  <div className="space-y-2">
                    <TypeWriter
                      text="$ sudo whoami"
                      className="text-secondary text-sm font-code block neon-text"
                      speed={60}
                      delay={500}
                    />
                    <TypeWriter
                      text="> jay.barros@hacker-terminal:~#"
                      className="text-primary/70 text-xs font-mono block"
                      speed={40}
                      delay={1500}
                    />
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-display font-bold bg-gradient-matrix bg-clip-text text-transparent mb-4 glitch-text" data-text={t('header.title')}>
                    {t('header.title')}
                  </h1>
                  
                  <TypeWriter
                    text={t('header.subtitle')}
                    className="text-lg md:text-xl text-foreground font-mono neon-text"
                    speed={25}
                    delay={2500}
                  />
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button className="bg-gradient-matrix text-black font-code relative overflow-hidden group hacker-hover">
                      <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Camera className="w-4 h-4 mr-2 relative z-10" />
                      <span className="relative z-10">{t('portfolio.button')}</span>
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-code relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                      <Globe className="w-4 h-4 mr-2 relative z-10" />
                      <span className="relative z-10">jay@wil.bar</span>
                    </Button>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </section>

          {/* Elite About Section */}
          <section>
            <TerminalWindow title="./about_developer.py" className="max-w-5xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <span className="text-secondary font-code">#!/usr/bin/env python3</span>
                </div>
                
                <TypeWriter
                  text={`class ${t('about.title').replace(' ', '')} {`}
                  className="text-accent text-2xl font-display font-bold neon-text"
                  speed={50}
                  delay={300}
                />
                
                <div className="space-y-6 text-foreground font-code leading-relaxed pl-4 border-l-2 border-primary/30">
                  <div className="space-y-3">
                    <TypeWriter
                      text="def initialize_profile(self):"
                      className="text-hacker-cyan font-code"
                      speed={40}
                      delay={1000}
                    />
                    <div className="pl-6 space-y-2">
                      <p className="text-muted-foreground">
                        <span className="text-secondary">"""</span>
                        {t('about.intro')}
                        <span className="text-secondary">"""</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <TypeWriter
                      text="def get_expertise(self):"
                      className="text-hacker-cyan font-code"
                      speed={40}
                      delay={2500}
                    />
                    <div className="pl-6">
                      <p className="text-muted-foreground">
                        <span className="text-hacker-yellow">return</span> <span className="text-secondary">"</span>{t('about.skills')}<span className="text-secondary">"</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <TypeWriter
                  text="}"
                  className="text-accent text-2xl font-display font-bold"
                  speed={50}
                  delay={4000}
                />
              </div>
            </TerminalWindow>
          </section>

          {/* Elite Skills Matrix */}
          <section>
            <TerminalWindow title="./skills_matrix.json" className="max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <TypeWriter
                    text={`{ "${t('skills.title').toLowerCase()}": {`}
                    className="text-accent text-2xl font-display font-bold neon-text"
                    speed={50}
                    delay={200}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 pl-4">
                  <Card className="bg-muted/50 border-primary/30 p-6 hacker-hover relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-matrix opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <Code2 className="text-primary animate-neon-pulse" size={24} />
                      <h3 className="font-code text-lg font-semibold neon-text">{t('skills.languages')}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 relative z-10">
                       {skills.languages.map((skill, index) => (
                         <Badge 
                           key={skill} 
                           className="font-code bg-primary/20 text-primary border-primary/50 hover:bg-primary/30 transition-all duration-300 hover:shadow-[0_0_10px_currentColor]"
                           style={{ animationDelay: `${index * 100}ms` }}
                         >
                           {skill}
                         </Badge>
                       ))}
                    </div>
                  </Card>

                  <Card className="bg-muted/50 border-accent/30 p-6 hacker-hover relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-cyber opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <Cpu className="text-accent animate-neon-pulse" size={24} />
                      <h3 className="font-code text-lg font-semibold neon-text">{t('skills.frameworks')}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 relative z-10">
                       {skills.frameworks.map((skill, index) => (
                         <Badge 
                           key={skill} 
                           className="font-code bg-accent/20 text-accent border-accent/50 hover:bg-accent/30 transition-all duration-300 hover:shadow-[0_0_10px_currentColor]"
                           style={{ animationDelay: `${index * 100}ms` }}
                         >
                           {skill}
                         </Badge>
                       ))}
                    </div>
                  </Card>

                   <Card className="bg-muted/50 border-secondary/30 p-6 hacker-hover relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-neon opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                     <div className="flex items-center gap-3 mb-6 relative z-10">
                       <Database className="text-secondary animate-neon-pulse" size={24} />
                       <h3 className="font-code text-lg font-semibold neon-text">{t('skills.databases')}</h3>
                     </div>
                     <div className="flex flex-wrap gap-3 relative z-10">
                       {skills.databases.map((skill, index) => (
                         <Badge 
                           key={skill} 
                           className="font-code bg-secondary/20 text-secondary border-secondary/50 hover:bg-secondary/30 transition-all duration-300 hover:shadow-[0_0_10px_currentColor]"
                           style={{ animationDelay: `${index * 100}ms` }}
                         >
                           {skill}
                         </Badge>
                       ))}
                     </div>
                   </Card>

                   <Card className="bg-muted/50 border-hacker-orange/30 p-6 hacker-hover relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-scan opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                     <div className="flex items-center gap-3 mb-6 relative z-10">
                       <Monitor className="text-hacker-orange animate-neon-pulse" size={24} />
                       <h3 className="font-code text-lg font-semibold neon-text">Tools & Platforms</h3>
                     </div>
                     <div className="flex flex-wrap gap-3 relative z-10">
                       {skills.tools.map((skill, index) => (
                         <Badge 
                           key={skill} 
                           className="font-code bg-hacker-orange/20 text-hacker-orange border-hacker-orange/50 hover:bg-hacker-orange/30 transition-all duration-300 hover:shadow-[0_0_10px_currentColor]"
                           style={{ animationDelay: `${index * 100}ms` }}
                         >
                           {skill}
                         </Badge>
                       ))}
                     </div>
                   </Card>
                </div>
                
                <TypeWriter
                  text="} }"
                  className="text-accent text-2xl font-display font-bold"
                  speed={50}
                  delay={3000}
                />
              </div>
            </TerminalWindow>
          </section>

          {/* Contact Section */}
          <section>
            <ContactForm />
          </section>

          {/* Impressum */}
          <section>
            <TerminalWindow title="impressum.txt" className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <TypeWriter
                  text={`# ${t('impressum.title')}`}
                  className="text-accent text-xl font-display font-bold"
                  speed={50}
                />
                
                <div className="font-mono text-sm text-muted-foreground space-y-2">
                  <p><strong>Jay William Barros</strong></p>
                  <p>E-Mail: jay@wil.bar</p>
                  <p>Location: Berlin, Germany / United States</p>
                  <p className="text-xs mt-4 text-muted-foreground/70">
                    This site is built with love, code, and cosmic energy. 🚀
                  </p>
                </div>
              </div>
            </TerminalWindow>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
