import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

// Revisa que esta línea tenga el formato correcto y las comillas simples
const supabaseUrl = 'https://kfgfriaanvvujgxxksbj.supabase.co'; 

// Esta es la clave que ya copiaste bien de tu imagen
const supabaseAnonKey = 'sb_publishable_6ZJ_VzxXeU3BgLHIJYYbow_a7fCiGeS'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

import { supabase } from './supabaseClient.js';

// --- AQUÍ VA TU FUNCIÓN ---
async function iniciarSesion(email, passwordIngresada) {
    const { data, error } = await supabase
        .from('usuarios')
        .select('id, nombre, password_hash')
        .eq('email', email)
        .single();

    if (error || !data) {
        alert("Usuario no encontrado.");
        return;
    }

    // Aquí iría la lógica de comparación que mencionamos antes
    alert("¡Bienvenido, " + data.nombre + "!");
}

const formularioLogin = document.getElementById('tuFormularioLogin'); // Asegúrate que tu <form> tenga este ID

formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se refresque

    // Captura los valores de los inputs
    const email = document.getElementById('emailInput').value;
    const pass = document.getElementById('passInput').value;

    // Ejecuta la función
    iniciarSesion(email, pass);
});