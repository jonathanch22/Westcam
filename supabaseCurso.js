// Usamos el mismo CDN de jsdelivr que tus otros archivos
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://kfgfriaanvvujgxxksbj.supabase.co'; 
const supabaseAnonKey = 'sb_publishable_6ZJ_VzxXeU3BgLHIJYYbow_a7fCiGeS'; 

export const clienteCurso = createClient(supabaseUrl, supabaseAnonKey);
