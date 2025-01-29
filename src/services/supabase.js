import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iguauepouutljqsauuuz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlndWF1ZXBvdXV0bGpxc2F1dXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxMzg5OTQsImV4cCI6MjA1MzcxNDk5NH0.kLVYOvv23aBPGJ_v2fs74fLl1z2gDzFK_6r_okmdFYw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
