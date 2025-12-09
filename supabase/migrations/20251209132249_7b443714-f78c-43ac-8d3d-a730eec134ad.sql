-- Create payment confirmations table
CREATE TABLE public.payment_confirmations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  payment_id TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  confirmed_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE public.payment_confirmations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read payment status (public quiz)
CREATE POLICY "Anyone can read payment status"
ON public.payment_confirmations
FOR SELECT
USING (true);

-- Allow anyone to insert pending payments
CREATE POLICY "Anyone can create pending payments"
ON public.payment_confirmations
FOR INSERT
WITH CHECK (status = 'pending');

-- Allow updates to confirm payments (for admin/webhook)
CREATE POLICY "Anyone can update payment status"
ON public.payment_confirmations
FOR UPDATE
USING (true);