// supabaseClient.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://kfgfriaanvvujgxxksbj.supabase.co/rest/v1/';
const supabaseKey = 'sb_publishable_6ZJ_VzxXeU3BgLHIJYYbow_a7fCiGeS';

export const supabase = createClient(supabaseUrl, supabaseKey);