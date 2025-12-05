module.exports = [
"[project]/OneSingleView/lib/db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBanner",
    ()=>addBanner,
    "addClaim",
    ()=>addClaim,
    "addCommercialPolicy",
    ()=>addCommercialPolicy,
    "addCyberPolicy",
    ()=>addCyberPolicy,
    "addGarage",
    ()=>addGarage,
    "addHealthPolicy",
    ()=>addHealthPolicy,
    "addLifePolicy",
    ()=>addLifePolicy,
    "addMotorPolicy",
    ()=>addMotorPolicy,
    "addQuoteRequest",
    ()=>addQuoteRequest,
    "addReferral",
    ()=>addReferral,
    "addTravelPolicy",
    ()=>addTravelPolicy,
    "deleteBanner",
    ()=>deleteBanner,
    "deleteCommercialPolicy",
    ()=>deleteCommercialPolicy,
    "deleteGarage",
    ()=>deleteGarage,
    "deleteHealthPolicy",
    ()=>deleteHealthPolicy,
    "deleteMotorPolicy",
    ()=>deleteMotorPolicy,
    "getAllBanners",
    ()=>getAllBanners,
    "getAllClaims",
    ()=>getAllClaims,
    "getAllCommercialPolicies",
    ()=>getAllCommercialPolicies,
    "getAllGarages",
    ()=>getAllGarages,
    "getAllHealthPolicies",
    ()=>getAllHealthPolicies,
    "getAllMotorPolicies",
    ()=>getAllMotorPolicies,
    "getAllQuoteRequests",
    ()=>getAllQuoteRequests,
    "getAllUsers",
    ()=>getAllUsers,
    "getAppSettings",
    ()=>getAppSettings,
    "getCompanyGMCPolicy",
    ()=>getCompanyGMCPolicy,
    "getUserAuditLogs",
    ()=>getUserAuditLogs,
    "getUserById",
    ()=>getUserById,
    "getUserClaims",
    ()=>getUserClaims,
    "getUserCommercialPolicies",
    ()=>getUserCommercialPolicies,
    "getUserCyberPolicies",
    ()=>getUserCyberPolicies,
    "getUserHealthPolicies",
    ()=>getUserHealthPolicies,
    "getUserLifePolicies",
    ()=>getUserLifePolicies,
    "getUserMotorPolicies",
    ()=>getUserMotorPolicies,
    "getUserNotifications",
    ()=>getUserNotifications,
    "getUserPreferences",
    ()=>getUserPreferences,
    "getUserQuoteRequests",
    ()=>getUserQuoteRequests,
    "getUserRM",
    ()=>getUserRM,
    "getUserReferrals",
    ()=>getUserReferrals,
    "getUserTravelPolicies",
    ()=>getUserTravelPolicies,
    "logUserChange",
    ()=>logUserChange,
    "markAllNotificationsAsRead",
    ()=>markAllNotificationsAsRead,
    "markNotificationAsRead",
    ()=>markNotificationAsRead,
    "updateAppSetting",
    ()=>updateAppSetting,
    "updateClaim",
    ()=>updateClaim,
    "updateCommercialPolicy",
    ()=>updateCommercialPolicy,
    "updateHealthPolicy",
    ()=>updateHealthPolicy,
    "updateMotorPolicy",
    ()=>updateMotorPolicy,
    "updateQuoteRequest",
    ()=>updateQuoteRequest,
    "updateUserPreferences",
    ()=>updateUserPreferences,
    "updateUserProfile",
    ()=>updateUserProfile,
    "updateUserStatus",
    ()=>updateUserStatus,
    "uploadAvatar",
    ()=>uploadAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/supabase.ts [app-ssr] (ecmascript)");
;
// Helper to convert database rows to app types
function convertDates(data) {
    const converted = {
        ...data
    };
    Object.keys(converted).forEach((key)=>{
        if (converted[key] && typeof converted[key] === 'string') {
            // Try to parse as date
            const dateValue = new Date(converted[key]);
            if (!isNaN(dateValue.getTime()) && key.includes('date') || key.includes('_at')) {
                converted[key] = dateValue;
            }
        }
    });
    return converted;
}
/**
 * Check for duplicate policy number
 */ async function checkDuplicatePolicy(table, userId, policyNumber) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from(table).select('id').eq('user_id', userId).eq('policy_number', policyNumber).maybeSingle();
    if (data) {
        throw new Error('This policy number already exists in your account');
    }
}
async function getUserMotorPolicies(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('motor_policies').select('*').eq('user_id', userId).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>({
                ...convertDates(row),
                id: row.id,
                user_id: row.user_id
            }));
    } catch (error) {
        console.error('Error fetching motor policies:', error.message, error.details, error.hint);
        return [];
    }
}
async function getUserHealthPolicies(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').select('*').eq('user_id', userId).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching health policies:', error.message, error.details, error.hint);
        return [];
    }
}
async function getUserCommercialPolicies(userId, lobType) {
    try {
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('commercial_policies').select('*').eq('user_id', userId);
        if (lobType) {
            query = query.eq('lob_type', lobType);
        }
        const { data, error } = await query.order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching commercial policies:', error.message, error.details, error.hint);
        return [];
    }
}
async function getUserClaims(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('claims').select('*').eq('user_id', userId).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching claims:', error.message, error.details, error.hint);
        return [];
    }
}
async function getUserQuoteRequests(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('quote_requests').select('*').eq('user_id', userId).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching quote requests:', error);
        return [];
    }
}
async function addMotorPolicy(policy) {
    try {
        await checkDuplicatePolicy('motor_policies', policy.user_id, policy.policy_number);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('motor_policies').insert({
            user_id: policy.user_id,
            policy_number: policy.policy_number,
            vehicle_number: policy.vehicle_number,
            vehicle_type: policy.vehicle_type,
            manufacturer: policy.manufacturer,
            model: policy.model,
            fuel_type: policy.fuel_type,
            manufacturing_year: policy.manufacturing_year,
            number_plate_type: policy.number_plate_type,
            insurer_name: policy.insurer_name,
            premium_amount: policy.premium_amount,
            policy_start_date: policy.policy_start_date,
            policy_end_date: policy.policy_end_date,
            rc_docs: policy.rc_docs || [],
            previous_policy_docs: policy.previous_policy_docs || [],
            dl_docs: policy.dl_docs || []
        }).select().single();
        if (error) throw error;
        return data.id;
    } catch (error) {
        console.error('Error adding motor policy:', error);
        throw new Error(error.message || 'Failed to add motor policy');
    }
}
async function addHealthPolicy(policy) {
    try {
        await checkDuplicatePolicy('health_policies', policy.user_id, policy.policy_number);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').insert({
            user_id: policy.user_id,
            company_name: policy.company_name,
            policy_number: policy.policy_number,
            insurer_name: policy.insurer_name,
            sum_insured: policy.sum_insured,
            premium_amount: policy.premium_amount,
            expiry_date: policy.expiry_date,
            policy_docs: policy.policy_docs || [],
            no_of_lives: policy.no_of_lives
        }).select().single();
        if (error) throw error;
        return data.id;
    } catch (error) {
        console.error('Error adding health policy:', error);
        throw new Error(error.message || 'Failed to add health policy');
    }
}
async function addCommercialPolicy(policy) {
    try {
        await checkDuplicatePolicy('commercial_policies', policy.user_id, policy.policy_number);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('commercial_policies').insert({
            user_id: policy.user_id,
            lob_type: policy.lob_type,
            company_name: policy.company_name,
            policy_holder_name: policy.policy_holder_name,
            policy_number: policy.policy_number,
            insurer_name: policy.insurer_name,
            premium_amount: policy.premium_amount,
            sum_insured: policy.sum_insured,
            expiry_date: policy.expiry_date,
            policy_docs: policy.policy_docs || []
        }).select().single();
        if (error) throw error;
        return data.id;
    } catch (error) {
        console.error('Error adding commercial policy:', error);
        throw new Error(error.message || 'Failed to add commercial policy');
    }
}
async function updateMotorPolicy(id, updates) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('motor_policies').update(updates).eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error updating motor policy:', error);
        throw new Error(error.message || 'Failed to update motor policy');
    }
}
async function deleteMotorPolicy(id) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('motor_policies').delete().eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting motor policy:', error);
        throw new Error(error.message || 'Failed to delete motor policy');
    }
}
async function updateHealthPolicy(id, updates) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').update(updates).eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error updating health policy:', error);
        throw new Error(error.message || 'Failed to update health policy');
    }
}
async function deleteHealthPolicy(id) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').delete().eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting health policy:', error);
        throw new Error(error.message || 'Failed to delete health policy');
    }
}
async function updateCommercialPolicy(id, updates) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('commercial_policies').update(updates).eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error updating commercial policy:', error);
        throw new Error(error.message || 'Failed to update commercial policy');
    }
}
async function deleteCommercialPolicy(id) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('commercial_policies').delete().eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting commercial policy:', error);
        throw new Error(error.message || 'Failed to delete commercial policy');
    }
}
async function addClaim(claim) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('claims').insert({
            user_id: claim.user_id,
            policy_id: claim.policy_id,
            lob_type: claim.lob_type,
            claim_type: claim.claim_type,
            incident_date: claim.incident_date,
            description: claim.description,
            supporting_docs: claim.supporting_docs || [],
            status: claim.status
        }).select().single();
        if (error) throw error;
        return data.id;
    } catch (error) {
        console.error('Error adding claim:', error);
        throw new Error(error.message || 'Failed to add claim');
    }
}
async function updateClaim(id, updates) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('claims').update(updates).eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error updating claim:', error);
        throw new Error(error.message || 'Failed to update claim');
    }
}
async function addQuoteRequest(quote) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('quote_requests').insert({
            user_id: quote.user_id,
            lob_type: quote.lob_type,
            details: quote.details,
            uploaded_quote: quote.uploaded_quote,
            has_better_quote: quote.has_better_quote,
            status: quote.status
        }).select().single();
        if (error) throw error;
        return data.id;
    } catch (error) {
        console.error('Error adding quote request:', error);
        throw new Error(error.message || 'Failed to add quote request');
    }
}
async function updateQuoteRequest(id, updates) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('quote_requests').update(updates).eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error updating quote request:', error);
        throw new Error(error.message || 'Failed to update quote request');
    }
}
async function getUserReferrals(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('referrals').select('*').eq('user_id', userId).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching referrals:', error.message, error.details, error.hint);
        return [];
    }
}
async function addReferral(referral) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('referrals').insert({
            user_id: referral.user_id,
            friend_name: referral.friend_name,
            friend_mobile: referral.friend_mobile,
            friend_email: referral.friend_email,
            notes: referral.notes
        }).select().single();
        if (error) throw error;
        return data.id;
    } catch (error) {
        console.error('Error adding referral:', error);
        throw new Error(error.message || 'Failed to add referral');
    }
}
async function logUserChange(userId, field, oldValue, newValue) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_audit_log').insert({
            user_id: userId,
            field_changed: field,
            old_value: oldValue,
            new_value: newValue
        });
        if (error) throw error;
    } catch (error) {
        console.error('Error logging user change:', error);
    }
}
async function getAllUsers() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching all users:', error);
        return [];
    }
}
async function getUserById(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', userId).single();
        if (error) throw error;
        return convertDates(data);
    } catch (error) {
        console.error('Error fetching user details:', error);
        return null;
    }
}
async function updateUserStatus(userId, status) {
    try {
        // TODO: Ensure 'status' column exists in users table.
        // For now, we will just log this action as if it happened.
        console.log(`Updating user ${userId} status to ${status}`);
    // const { error } = await supabase
    //     .from('users')
    //     .update({ status })
    //     .eq('id', userId);
    // if (error) throw error;
    } catch (error) {
        console.error('Error updating user status:', error);
        throw error;
    }
}
async function getUserAuditLogs(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_audit_log').select('*').eq('user_id', userId).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching audit logs:', error.message || error);
        return [];
    }
}
async function getAllMotorPolicies() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('motor_policies').select('*, users(name, email)').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>({
                ...convertDates(row),
                user_name: row.users?.name,
                user_email: row.users?.email
            }));
    } catch (error) {
        console.error('Error fetching all motor policies:', error);
        return [];
    }
}
async function getAllHealthPolicies() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').select('*, users(name, email)').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>({
                ...convertDates(row),
                user_name: row.users?.name,
                user_email: row.users?.email
            }));
    } catch (error) {
        console.error('Error fetching all health policies:', error);
        return [];
    }
}
async function getAllCommercialPolicies() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('commercial_policies').select('*, users(name, email)').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>({
                ...convertDates(row),
                user_name: row.users?.name,
                user_email: row.users?.email
            }));
    } catch (error) {
        console.error('Error fetching all commercial policies:', error);
        return [];
    }
}
async function getAllClaims() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('claims').select('*, users(name, email)').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>({
                ...convertDates(row),
                user_name: row.users?.name,
                user_email: row.users?.email
            }));
    } catch (error) {
        console.error('Error fetching all claims:', error);
        return [];
    }
}
async function getAllQuoteRequests() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('quote_requests').select('*, users(name, email)').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return (data || []).map((row)=>({
                ...convertDates(row),
                user_name: row.users?.name,
                user_email: row.users?.email
            }));
    } catch (error) {
        console.error('Error fetching all quote requests:', error);
        return [];
    }
}
async function getAppSettings() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('app_settings').select('*').order('key');
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching app settings:', error);
        return [];
    }
}
async function updateAppSetting(key, value) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('app_settings').upsert({
            key,
            value,
            updated_at: new Date()
        });
        if (error) throw error;
    } catch (error) {
        console.error('Error updating app setting:', error);
        throw error;
    }
}
async function getAllBanners() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('banners').select('*').order('display_order');
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching banners:', error);
        return [];
    }
}
async function addBanner(banner) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('banners').insert(banner);
        if (error) throw error;
    } catch (error) {
        console.error('Error adding banner:', error);
        throw error;
    }
}
async function deleteBanner(id) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('banners').delete().eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting banner:', error);
        throw error;
    }
}
async function getAllGarages() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('garages').select('*').order('name');
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching garages:', error);
        return [];
    }
}
async function addGarage(garage) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('garages').insert(garage);
        if (error) throw error;
    } catch (error) {
        console.error('Error adding garage:', error);
        throw error;
    }
}
async function deleteGarage(id) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('garages').delete().eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting garage:', error);
        throw error;
    }
}
async function updateUserProfile(userId, updates) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').update(updates).eq('id', userId).select().single();
        if (error) throw error;
        return convertDates(data);
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
}
async function getUserRM(userId) {
    try {
        // First get the user's rm_id
        const { data: user, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('rm_id').eq('id', userId).single();
        if (userError) {
            // If user not found or error, return default RM for demo
            console.log('Error fetching user for RM, returning default:', userError);
            return {
                name: 'Amit Sharma',
                email: 'amit.sharma@onesingleview.com',
                mobile: '+91 98765 43210'
            };
        }
        if (!user?.rm_id) {
            // Return default RM if none assigned
            return {
                name: 'Amit Sharma',
                email: 'amit.sharma@onesingleview.com',
                mobile: '+91 98765 43210'
            };
        }
        // Then get the RM's details
        const { data: rm, error: rmError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('name, email, mobile').eq('id', user.rm_id).single();
        if (rmError) throw rmError;
        return rm;
    } catch (error) {
        console.error('Error fetching user RM:', error);
        // Return default RM on error to ensure UI shows something
        return {
            name: 'Amit Sharma',
            email: 'amit.sharma@onesingleview.com',
            mobile: '+91 98765 43210'
        };
    }
}
async function getUserPreferences(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_preferences').select('*').eq('user_id', userId).single();
        if (error && error.code === 'PGRST116') {
            // No preferences yet, create default
            return await createDefaultPreferences(userId);
        }
        if (error) throw error;
        return convertDates(data);
    } catch (error) {
        console.error('Error fetching user preferences:', error);
        throw error;
    }
}
/**
 * Create default preferences for a user
 */ async function createDefaultPreferences(userId) {
    try {
        const defaultPrefs = {
            user_id: userId,
            email_notifications: true,
            sms_notifications: false,
            policy_expiry_alerts: true,
            claim_updates: true
        };
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_preferences').insert(defaultPrefs).select().single();
        if (error) throw error;
        return convertDates(data);
    } catch (error) {
        console.error('Error creating default preferences:', error);
        throw error;
    }
}
async function updateUserPreferences(userId, preferences) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_preferences').upsert({
            user_id: userId,
            ...preferences,
            updated_at: new Date().toISOString()
        }).select().single();
        if (error) throw error;
        return convertDates(data);
    } catch (error) {
        console.error('Error updating user preferences:', error);
        throw error;
    }
}
async function getUserLifePolicies(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('life_policies').select('*').eq('user_id', userId).order('policy_end_date', {
        ascending: true
    });
    if (error) throw error;
    return (data || []).map((row)=>convertDates(row));
}
async function addLifePolicy(policy) {
    await checkDuplicatePolicy('life_policies', policy.user_id, policy.policy_number);
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('life_policies').insert([
        policy
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getUserTravelPolicies(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('travel_policies').select('*').eq('user_id', userId).order('policy_end_date', {
        ascending: true
    });
    if (error) throw error;
    return (data || []).map((row)=>convertDates(row));
}
async function addTravelPolicy(policy) {
    await checkDuplicatePolicy('travel_policies', policy.user_id, policy.policy_number);
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('travel_policies').insert([
        policy
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getCompanyGMCPolicy(companyName) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').select('*').eq('company_name', companyName).maybeSingle();
    if (error) throw error;
    return data ? convertDates(data) : null;
}
async function getUserCyberPolicies(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('cyber_policies').select('*').eq('user_id', userId).order('policy_end_date', {
        ascending: true
    });
    if (error) throw error;
    return (data || []).map((row)=>convertDates(row));
}
async function addCyberPolicy(policy) {
    await checkDuplicatePolicy('cyber_policies', policy.user_id, policy.policy_number);
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('cyber_policies').insert([
        policy
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getUserNotifications(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('*').eq('user_id', userId).order('created_at', {
        ascending: false
    }).limit(20);
    if (error) throw error;
    return (data || []).map((row)=>convertDates(row));
}
async function markNotificationAsRead(notificationId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('notifications').update({
        is_read: true
    }).eq('id', notificationId);
    if (error) throw error;
}
async function markAllNotificationsAsRead(userId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('notifications').update({
        is_read: true
    }).eq('user_id', userId).eq('is_read', false);
    if (error) throw error;
}
async function uploadAvatar(userId, file) {
    try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${userId}-${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;
        // Upload file
        const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('avatars').upload(filePath, file);
        if (uploadError) {
            throw uploadError;
        }
        // Get public URL
        const { data } = __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('avatars').getPublicUrl(filePath);
        // Update user profile
        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
            avatar_url: data.publicUrl
        }).eq('id', userId);
        if (updateError) {
            throw updateError;
        }
        return data.publicUrl;
    } catch (error) {
        console.error('Error uploading avatar:', error.message);
        return null;
    }
}
}),
];

//# sourceMappingURL=OneSingleView_lib_db_ts_195f60cc._.js.map