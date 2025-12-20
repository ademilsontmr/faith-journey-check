-- Create quiz_sessions table to store user quiz progress
CREATE TABLE public.quiz_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_name TEXT,
  user_whatsapp TEXT,
  answers INTEGER[] DEFAULT '{}',
  completed_at TIMESTAMP WITH TIME ZONE,
  paid BOOLEAN DEFAULT FALSE,
  payment_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quiz_sessions ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (anyone can start a quiz)
CREATE POLICY "Anyone can create quiz sessions" 
ON public.quiz_sessions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading own session (by session_id in URL/localStorage)
CREATE POLICY "Anyone can read quiz sessions by id" 
ON public.quiz_sessions 
FOR SELECT 
USING (true);

-- Create policy for updating (webhook or same session)
CREATE POLICY "Anyone can update quiz sessions" 
ON public.quiz_sessions 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_quiz_sessions_updated_at
BEFORE UPDATE ON public.quiz_sessions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for quiz_sessions
ALTER TABLE public.quiz_sessions REPLICA IDENTITY FULL;

-- Add to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.quiz_sessions;