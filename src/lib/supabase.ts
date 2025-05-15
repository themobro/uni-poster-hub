
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Find these values in your Supabase project settings > API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
