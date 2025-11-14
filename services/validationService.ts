import { supabase } from './supabaseClient';
import type { UserProfile } from '../types';

const checkSupabaseClient = () => {
    if (!supabase) {
        throw new Error("Supabase client is not initialized. Please check your configuration in services/supabaseClient.ts.");
    }
}

// --- LIVE DATA FETCHING SERVICE ---
export const fetchPanByPhone = async (phone: string): Promise<string> => {
    checkSupabaseClient();
    console.log(`Invoking Supabase function 'fetch-pan-by-phone' for ${phone}`);
    
    try {
        const { data, error } = await supabase!.functions.invoke('fetch-pan-by-phone', {
            body: { phone },
        });

        if (error) {
            throw new Error(error.message);
        }

        if (!data.pan) {
            throw new Error("PAN not found for the provided phone number.");
        }

        return data.pan;
    } catch (error: any) {
        console.error("Failed to fetch PAN by phone via Supabase:", error);
        throw new Error(error.message || 'An unknown error occurred while fetching PAN.');
    }
}

export const fetchUserProfile = async (pan: string, phone: string): Promise<UserProfile> => {
    checkSupabaseClient();
    console.log(`Invoking Supabase function 'fetch-user-profile' for PAN ${pan}`);

    try {
        const { data, error } = await supabase!.functions.invoke('fetch-user-profile', {
            body: { pan, phone },
        });
        
        if (error) {
            throw new Error(error.message);
        }

        // The data from the function is the user profile itself.
        const userProfile: UserProfile = data;
        return userProfile;

    } catch (error: any) {
        console.error("Failed to fetch user profile from Supabase:", error);
        throw new Error(error.message || 'An unknown error occurred while fetching the user profile.');
    }
};
