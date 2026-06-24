import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://kfgfriaanvvujgxxksbj.supabase.co'; 
const supabaseAnonKey = 'sb_publishable_6ZJ_VzxXeU3BgLHIJYYbow_a7fCiGeS'; 

// Esta es la única variable que exportaremos para todo el proyecto
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
