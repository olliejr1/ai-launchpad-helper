// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://mvkxssthxtpxygmgkbxb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12a3hzc3RoeHRweHlnbWdrYnhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzNzk4MTgsImV4cCI6MjA0ODk1NTgxOH0.A5oV7A9oY5XXylQFSRwDWEfTRuVFRT9Jn6TRhEBPet0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);