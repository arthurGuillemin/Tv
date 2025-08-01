const { createClient } = require('@supabase/supabase-js');

const url = process.env.supabase_url;
const key = process.env.supabase_key;
if (!url || !key) throw new Error('Variables Supabase manquantes');

const supabase = createClient(url, key);

module.exports = supabase;
