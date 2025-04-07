import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jevvskzbkkskdxtcghiz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldnZza3pia2tza2R4dGNnaGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNTQ1NjUsImV4cCI6MjA1OTYzMDU2NX0.sxEamkbx2OChrnETxAJCTrJXS1DmkFKC1mCrf5vnRg4';

export const supabase = createClient(supabaseUrl, supabaseKey);