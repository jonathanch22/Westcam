import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseUrl = 'https://kfgfriaanvvujgxxksbj.supabase.co'; 
const supabaseAnonKey = 'sb_publishable_6ZJ_VzxXeU3BgLHIJYYbow_a7fCiGeS'; 

// Lo exportamos con un nombre único para este módulo
export const clienteCurso = createClient(supabaseUrl, supabaseAnonKey);