
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Find these values in your Supabase project settings > API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "ERROR: Missing Supabase environment variables. Please make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment."
  );
}

export const supabase = createClient<Database>(
  supabaseUrl as string, 
  supabaseAnonKey as string
);
