
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Find these values in your Supabase project settings > API
const supabaseUrl = "https://zyzyfdxdegrxjmtijvuu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5enlmZHhkZWdyeGptdGlqdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMDU3OTcsImV4cCI6MjA2Mjg4MTc5N30.pndULxcfBriShOClGqRS1dilsxojyWwiYvurGvSyVXs";

// Check if environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "ERROR: Missing Supabase environment variables. Please make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment."
  );
}

// Only create the client if both URL and key are available
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : null as any; // This allows the app to initialize but Supabase calls will fail gracefully

