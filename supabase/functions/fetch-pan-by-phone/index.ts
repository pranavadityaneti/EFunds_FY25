// FIX: Add Deno types to resolve "Cannot find name 'Deno'" error.
// FIX: Updated the Deno types reference to a specific version to resolve TypeScript errors.
/// <reference types="https://esm.sh/v135/@supabase/functions-js@2.4.1/src/edge-runtime.d.ts" />
import { createClient } from '@supabase/supabase-js'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { phone } = await req.json()

    // Create a Supabase client with the Auth context of the logged in user.
    const supabaseClient = createClient(
      // Supabase API URL - env var exported by default.
      Deno.env.get('SUPABASE_URL') ?? '',
      // Supabase API ANON KEY - env var exported by default.
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    if (!phone) {
        return new Response(JSON.stringify({ error: 'Phone number is required' }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 400,
        })
    }

    const { data, error } = await supabaseClient
      .from('profiles')
      .select('pan')
      .eq('phone', phone)
      .single()

    if (error) {
      console.error('Supabase error:', error.message);
      throw new Error(error.message);
    }
    
    if (!data) {
        return new Response(JSON.stringify({ error: 'User not found' }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 404,
        });
    }

    return new Response(JSON.stringify({ pan: data.pan }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})