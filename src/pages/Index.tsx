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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-secondary font-mono">
            <TypeWriter 
              text="Initializing cosmic interface..."
              speed={50}
            />
          </div>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating cosmic elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 rotate animate-spin-slow">
          <Satellite size={20} />
        </div>
        <div className="absolute top-40 right-20 text-accent/20 float">
          <Rocket size={16} />
        </div>
        <div className="absolute bottom-40 left-20 text-cosmo-cyan/20 cosmic-float">
          <Monitor size={18} />
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="text-primary" size={24} />
            <span className="font-mono text-primary">~/jay.cv</span>
          </div>
          <LanguageSwitcher 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
        </div>
      </header>

      <main className="pt-20 pb-10">
        <div className="container mx-auto px-6 space-y-16">
          
          {/* Hero Section */}
          <section className="text-center py-16">
            <TerminalWindow title="profile.sh" className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src="/lovable-uploads/ec5f9a66-2521-496f-a030-a5f26e0fb057.png"
                      alt="Jay William Barros"
                      className="w-48 h-48 rounded-full border-4 border-primary pulse-glow object-cover"
                    />
                    <div className="absolute -top-2 -right-2 text-secondary animate-pulse">
                      <Rocket size={24} />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-left">
                  <TypeWriter
                    text={`$ whoami`}
                    className="text-secondary text-sm font-mono block mb-2"
                    speed={80}
                    delay={500}
                  />
                  <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient bg-gradient-cosmic bg-clip-text text-transparent mb-4">
                    {t('header.title')}
                  </h1>
                  <TypeWriter
                    text={t('header.subtitle')}
                    className="text-lg md:text-xl text-muted-foreground font-mono"
                    speed={30}
                    delay={2000}
                  />
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button className="bg-gradient-matrix hover:bg-secondary/90 text-secondary-foreground font-mono">
                      <Camera className="w-4 h-4 mr-2" />
                      {t('portfolio.button')}
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono">
                      <Globe className="w-4 h-4 mr-2" />
                      jay@wil.bar
                    </Button>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </section>

          {/* About Section */}
          <section>
            <TerminalWindow title="about.py" className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <TypeWriter
                  text={`# ${t('about.title')}`}
                  className="text-accent text-2xl font-display font-bold"
                  speed={50}
                  delay={300}
                />
                
                <div className="space-y-4 text-foreground font-mono leading-relaxed">
                  <p>{t('about.intro')}</p>
                  <p>{t('about.skills')}</p>
                </div>
              </div>
            </TerminalWindow>
          </section>

          {/* Skills Section */}
          <section>
            <TerminalWindow title="skills.json" className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <TypeWriter
                  text={`// ${t('skills.title')}`}
                  className="text-accent text-2xl font-display font-bold"
                  speed={50}
                  delay={200}
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-muted/50 border-primary/30 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Code2 className="text-primary" size={20} />
                      <h3 className="font-mono text-lg font-semibold">{t('skills.languages')}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill, index) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="font-mono animate-pulse"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <Card className="bg-muted/50 border-accent/30 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Cpu className="text-accent" size={20} />
                      <h3 className="font-mono text-lg font-semibold">{t('skills.frameworks')}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((skill, index) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="font-mono border-accent/50 animate-pulse"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <Card className="bg-muted/50 border-cosmo-cyan/30 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Database className="text-cosmo-cyan" size={20} />
                      <h3 className="font-mono text-lg font-semibold">{t('skills.databases')}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((skill, index) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="font-mono bg-cosmo-cyan/20 animate-pulse"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <Card className="bg-muted/50 border-cosmo-orange/30 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Monitor className="text-cosmo-orange" size={20} />
                      <h3 className="font-mono text-lg font-semibold">Tools & Platforms</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill, index) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="font-mono border-cosmo-orange/50 animate-pulse"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
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
