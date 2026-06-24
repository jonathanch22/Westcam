import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

// Revisa que esta línea tenga el formato correcto y las comillas simples
const supabaseUrl = 'https://kfgfriaanvvujgxxksbj.supabase.co'; 

// Esta es la clave que ya copiaste bien de tu imagen
const supabaseAnonKey = 'sb_publishable_6ZJ_VzxXeU3BgLHIJYYbow_a7fCiGeS'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);