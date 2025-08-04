-- Create profiles table for CV content
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  bio TEXT,
  location TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create experience table
CREATE TABLE public.experience (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('work', 'education')),
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  description TEXT,
  is_current BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create skills table
CREATE TABLE public.skills (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  level INTEGER DEFAULT 5,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to CV data
CREATE POLICY "Allow public read access to profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Allow public read access to experience" ON public.experience FOR SELECT USING (true);
CREATE POLICY "Allow public read access to skills" ON public.skills FOR SELECT USING (true);

-- Create policy for contact messages (public can insert)
CREATE POLICY "Allow public insert to contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.profiles (name, title, subtitle, bio, location, email) VALUES 
('Jay William Barros', 'Cosmonaut Engineer', 'Building the future, one algorithm at a time', 'Passionate software engineer with expertise in AI, robotics, and space technology. I bridge the gap between cutting-edge research and practical applications.', 'Berlin, Germany / United States', 'jay@wil.bar');

-- Insert sample experience data
INSERT INTO public.experience (profile_id, type, title, company, location, start_date, end_date, description, is_current, sort_order) VALUES 
((SELECT id FROM public.profiles LIMIT 1), 'work', 'Senior Software Engineer', 'SpaceTech Industries', 'Berlin, Germany', '2022-01-01', NULL, 'Leading development of autonomous navigation systems for spacecraft', true, 1),
((SELECT id FROM public.profiles LIMIT 1), 'work', 'AI Research Engineer', 'Future Labs', 'San Francisco, CA', '2020-03-01', '2021-12-31', 'Developed machine learning algorithms for space exploration missions', false, 2),
((SELECT id FROM public.profiles LIMIT 1), 'education', 'M.S. Computer Science', 'Technical University of Berlin', 'Berlin, Germany', '2018-09-01', '2020-02-29', 'Specialization in Artificial Intelligence and Robotics', false, 3),
((SELECT id FROM public.profiles LIMIT 1), 'education', 'B.S. Software Engineering', 'University of California', 'California, USA', '2014-09-01', '2018-06-30', 'Focus on embedded systems and space applications', false, 4);

-- Insert sample skills data
INSERT INTO public.skills (profile_id, category, name, level, sort_order) VALUES 
((SELECT id FROM public.profiles LIMIT 1), 'languages', 'Python', 5, 1),
((SELECT id FROM public.profiles LIMIT 1), 'languages', 'C++', 5, 2),
((SELECT id FROM public.profiles LIMIT 1), 'languages', 'JavaScript', 4, 3),
((SELECT id FROM public.profiles LIMIT 1), 'languages', 'TypeScript', 4, 4),
((SELECT id FROM public.profiles LIMIT 1), 'languages', 'Rust', 4, 5),
((SELECT id FROM public.profiles LIMIT 1), 'languages', 'Go', 3, 6),
((SELECT id FROM public.profiles LIMIT 1), 'frameworks', 'React', 5, 1),
((SELECT id FROM public.profiles LIMIT 1), 'frameworks', 'Node.js', 4, 2),
((SELECT id FROM public.profiles LIMIT 1), 'frameworks', 'FastAPI', 5, 3),
((SELECT id FROM public.profiles LIMIT 1), 'frameworks', 'TensorFlow', 4, 4),
((SELECT id FROM public.profiles LIMIT 1), 'frameworks', 'Docker', 4, 5),
((SELECT id FROM public.profiles LIMIT 1), 'frameworks', 'Kubernetes', 3, 6),
((SELECT id FROM public.profiles LIMIT 1), 'databases', 'PostgreSQL', 5, 1),
((SELECT id FROM public.profiles LIMIT 1), 'databases', 'MongoDB', 4, 2),
((SELECT id FROM public.profiles LIMIT 1), 'databases', 'Redis', 4, 3),
((SELECT id FROM public.profiles LIMIT 1), 'databases', 'InfluxDB', 3, 4),
((SELECT id FROM public.profiles LIMIT 1), 'tools', 'Git', 5, 1),
((SELECT id FROM public.profiles LIMIT 1), 'tools', 'Linux', 5, 2),
((SELECT id FROM public.profiles LIMIT 1), 'tools', 'Arduino', 4, 3),
((SELECT id FROM public.profiles LIMIT 1), 'tools', 'RaspberryPi', 4, 4),
((SELECT id FROM public.profiles LIMIT 1), 'tools', 'AWS', 4, 5),
((SELECT id FROM public.profiles LIMIT 1), 'tools', 'GCP', 3, 6);