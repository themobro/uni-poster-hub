
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check for Supabase environment variables before rendering
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  const root = createRoot(document.getElementById("root")!);
  root.render(
    <div className="container mx-auto p-8 text-center">
      <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Environment Configuration Error</h1>
        <p className="mb-4">
          Missing Supabase environment variables. Please make sure the following environment variables are set:
        </p>
        <ul className="list-disc list-inside mb-4 text-left inline-block">
          <li>VITE_SUPABASE_URL</li>
          <li>VITE_SUPABASE_ANON_KEY</li>
        </ul>
        <p>
          You can find these values in your Supabase project dashboard under Project Settings &gt; API.
        </p>
      </div>
    </div>
  );
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
