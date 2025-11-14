// FIX: Add Deno types to resolve "Cannot find name 'Deno'" error.
// FIX: Updated the Deno types reference to a specific version to resolve TypeScript errors.
/// <reference types="https://esm.sh/v135/@supabase/functions-js@2.4.1/src/edge-runtime.d.ts" />
import { createClient } from '@supabase/supabase-js'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { pan } = await req.json()

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )
    
    if (!pan) {
        return new Response(JSON.stringify({ error: 'PAN is required' }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 400,
        })
    }
    
    // In a real application, you might join multiple tables.
    // Here we assume the full profile is stored in a JSONB column called 'profile_data'.
    const { data, error } = await supabaseClient
      .from('profiles')
      .select('profile_data')
      .eq('pan', pan)
      .single()

    if (error) {
       console.error('Supabase error:', error.message);
      throw new Error(error.message)
    }

    if (!data || !data.profile_data) {
        return new Response(JSON.stringify({ error: 'Profile not found for this PAN' }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 404,
        });
    }

    // The profile_data column directly contains the UserProfile object
    return new Response(JSON.stringify(data.profile_data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})