-- Create enum for payment status
CREATE TYPE public.payment_status AS ENUM ('processing', 'paid', 'expired', 'cancelled', 'failed');

-- Create products table for dynamic pricing
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  description TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS on products
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Products are publicly readable (pricing info)
CREATE POLICY "Products are publicly readable"
ON public.products
FOR SELECT
USING (true);

-- Create payments table
CREATE TABLE public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_type TEXT NOT NULL,
  amount NUMERIC(10, 2) NOT NULL,
  status payment_status NOT NULL DEFAULT 'processing',
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  quiz_answers JSONB,
  quiz_questions JSONB,
  score INTEGER,
  max_score INTEGER,
  abacate_pay_id TEXT,
  pix_qr_code TEXT,
  pix_qr_code_base64 TEXT,
  pix_copy_paste TEXT,
  access_token TEXT UNIQUE DEFAULT encode(gen_random_bytes(32), 'hex'),
  paid_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS on payments
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Anyone can read their own payment by access_token (for result page)
CREATE POLICY "Anyone can read payment by access_token"
ON public.payments
FOR SELECT
USING (true);

-- Service role can do everything (edge functions use service role)
-- Note: Service role bypasses RLS, so no explicit policy needed

-- Create trigger to update updated_at on payments
CREATE TRIGGER update_payments_updated_at
BEFORE UPDATE ON public.payments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger to update updated_at on products
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default products
INSERT INTO public.products (key, name, price, description) VALUES
('spiritual_gifts_test', 'Resultado do Quiz + Guia da Vida Católica', 9.90, 'Acesso ao resultado personalizado do quiz e guia completo'),
('relationship_test', 'Relatório Premium - Avaliação do Relacionamento Cristão', 14.90, 'Relatório detalhado sobre seu relacionamento cristão');

-- Create index for faster lookups
CREATE INDEX idx_payments_abacate_pay_id ON public.payments(abacate_pay_id);
CREATE INDEX idx_payments_access_token ON public.payments(access_token);
CREATE INDEX idx_payments_status ON public.payments(status);
CREATE INDEX idx_products_key ON public.products(key);