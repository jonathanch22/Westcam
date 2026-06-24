import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const supabaseUrl = 'https://kfgfriaanvvujgxxksbj.supabase.co'; 
const supabaseAnonKey = 'sb_publishable_6ZJ_VzxXeU3BgLHIJYYbow_a7fCiGeS'; 

// Exportamos con un nombre totalmente diferente para que no choque
export const clientePago = createClient(supabaseUrl, supabaseAnonKey);