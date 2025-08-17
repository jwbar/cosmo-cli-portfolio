import { useState } from 'react';
import { Language } from '@/components/LanguageSwitcher';

interface Translations {
  [key: string]: {
    en: string;
    de: string;
    es: string;
  };
}

const translations: Translations = {
  // Header
  'header.title': {
    en: 'Jay William Barros',
    de: 'Jay William Barros',
    es: 'Jay William Barros'
  },
  'header.subtitle': {
    en: 'Full Stack Developer, Hydro Farmer, & Multidisciplinary Creator',
    de: 'Full Stack Entwickler, Hydro-Farmer & Multidisziplinärer Kreativer', 
    es: 'Desarrollador Full Stack, Agricultor Hidropónico y Creador Multidisciplinario'
  },
  
  // About
  'about.title': {
    en: 'About Me',
    de: 'Über Mich',
    es: 'Sobre Mí'
  },
  'about.intro': {
    en: 'I am a Latino American, born in the United States and raised in Spain, with a multicultural background. Since 2014, I have been living in the vibrant city of Berlin, while maintaining ties to the United States since 2020.',
    de: 'Ich bin ein lateinamerikanischer US-Amerikaner, geboren in den Vereinigten Staaten und in Spanien aufgewachsen, mit einem multikulturellen Hintergrund. Seit 2014 lebe ich in der lebendigen Stadt Berlin und pflege seit 2020 auch wieder stärkere Verbindungen zu den USA.',
    es: 'Soy latino americano, nacido en Estados Unidos y criado en España, con un trasfondo multicultural. Desde 2014, he estado viviendo en la vibrante ciudad de Berlín, manteniendo vínculos con Estados Unidos desde 2020.'
  },
  'about.skills': {
    en: 'I am a highly skilled and motivated developer with over 5 years of experience in creating a wide range of applications. Proficient in both front-end and back-end technologies, with a focus on Python, C++, and embedded microcontrollers.',
    de: 'Ich bin ein hochqualifizierter und motivierter Entwickler mit über 5 Jahren Erfahrung in der Erstellung einer Vielzahl von Anwendungen. Kompetent in Front-End- und Back-End-Technologien, mit Fokus auf Python, C++ und eingebettete Mikrocontroller.',
    es: 'Soy un desarrollador altamente capacitado y motivado con más de 5 años de experiencia creando una amplia gama de aplicaciones. Competente en tecnologías front-end y back-end, con enfoque en Python, C++ y microcontroladores embebidos.'
  },
  
  // Skills
  'skills.title': {
    en: 'Technical Skills',
    de: 'Technische Fähigkeiten',
    es: 'Habilidades Técnicas'
  },
  'skills.languages': {
    en: 'Programming Languages',
    de: 'Programmiersprachen',
    es: 'Lenguajes de Programación'
  },
  'skills.frameworks': {
    en: 'Frameworks & Tools',
    de: 'Frameworks & Tools',
    es: 'Frameworks y Herramientas'
  },
  'skills.databases': {
    en: 'Databases',
    de: 'Datenbanken',
    es: 'Bases de Datos'
  },
  
  // Experience
  'experience.title': {
    en: 'Experience',
    de: 'Erfahrung',
    es: 'Experiencia'
  },
  
  // Contact
  'contact.title': {
    en: 'Contact',
    de: 'Kontakt',
    es: 'Contacto'
  },
  'contact.form.name': {
    en: 'Name',
    de: 'Name',
    es: 'Nombre'
  },
  'contact.form.email': {
    en: 'Email',
    de: 'E-Mail',
    es: 'Correo'
  },
  'contact.form.message': {
    en: 'Message',
    de: 'Nachricht',
    es: 'Mensaje'
  },
  'contact.form.send': {
    en: 'Send Message',
    de: 'Nachricht Senden',
    es: 'Enviar Mensaje'
  },
  
  // Impressum
  'impressum.title': {
    en: 'Impressum',
    de: 'Impressum',
    es: 'Aviso Legal'
  },
  
  // Portfolio
  'portfolio.button': {
    en: 'Photography Portfolio',
    de: 'Fotografie Portfolio',
    es: 'Portafolio de Fotografía'
  }
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[currentLanguage] || key;
  };

  return {
    currentLanguage,
    setCurrentLanguage,
    t
  };
};