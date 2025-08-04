import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TerminalWindow } from './TerminalWindow';
import { TypeWriter } from './TypeWriter';
import { useTranslation } from '@/hooks/useTranslation';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <TerminalWindow title="contact.exe" className="max-w-2xl">
      <div className="space-y-6">
        <div>
          <TypeWriter 
            text={`$ ${t('contact.title').toLowerCase()}_form --initialize`}
            className="text-secondary text-sm font-mono"
            speed={30}
          />
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <TypeWriter
              text="[SUCCESS] Message transmitted to orbital station..."
              className="text-secondary text-lg"
              speed={50}
            />
            <div className="mt-4 text-primary">
              <div className="inline-block animate-spin">🛰️</div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                {t('contact.form.name')}:
              </label>
              <Input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="bg-background border-primary/30 text-foreground font-mono focus:border-primary"
                placeholder="astronaut_name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                {t('contact.form.email')}:
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-background border-primary/30 text-foreground font-mono focus:border-primary"
                placeholder="signal@space.station"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                {t('contact.form.message')}:
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-background border-primary/30 text-foreground font-mono focus:border-primary min-h-32"
                placeholder="Transmit your message to the cosmic void..."
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-cosmic hover:bg-primary/90 text-primary-foreground font-mono pulse-glow"
            >
              <Send className="w-4 h-4 mr-2" />
              {t('contact.form.send')}
            </Button>
          </form>
        )}
      </div>
    </TerminalWindow>
  );
};