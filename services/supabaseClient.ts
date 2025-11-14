import { createClient, SupabaseClient } from '@supabase/supabase-js';

// IMPORTANT: Replace with your actual Supabase project URL and anon key.
// You can find these in your Supabase project's API settings.
const supabaseUrl = 'YOUR_SUPABASE_URL'; // e.g., 'https://ewweoaizkelmnhfxhtvf.supabase.co'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseUrl !== 'YOUR_SUPABASE_URL' && supabaseAnonKey && supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY') {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
    console.error(
        'CRITICAL: Supabase client is not configured. Please add your Supabase URL and anon key to services/supabaseClient.ts'
    );
}

export { supabase };
