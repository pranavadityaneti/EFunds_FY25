(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneSingleView/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Supabase Configuration
// Replace Firebase with Supabase
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://xhfcwpckvoqhoohpgvmd.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoZmN3cGNrdm9xaG9vaHBndm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MDEwNTcsImV4cCI6MjA3OTM3NzA1N30.vymk362z1IRYm3myCGonC1IUBXx7LAbpF33sj6tTRxw") || '';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// Prevent crash if credentials are missing
const createMockClient = ()=>{
    const mockBuilder = {
        select: ()=>mockBuilder,
        insert: ()=>mockBuilder,
        update: ()=>mockBuilder,
        delete: ()=>mockBuilder,
        eq: ()=>mockBuilder,
        in: ()=>mockBuilder,
        order: ()=>mockBuilder,
        limit: ()=>mockBuilder,
        single: ()=>Promise.resolve({
                data: null,
                error: null
            }),
        maybeSingle: ()=>Promise.resolve({
                data: null,
                error: null
            }),
        then: (resolve)=>resolve({
                data: [],
                error: null,
                count: 0
            })
    };
    return {
        from: ()=>mockBuilder,
        auth: {
            signUp: ()=>Promise.resolve({
                    data: {},
                    error: null
                }),
            signInWithPassword: ()=>Promise.resolve({
                    data: {},
                    error: null
                }),
            signOut: ()=>Promise.resolve({
                    error: null
                }),
            getUser: ()=>Promise.resolve({
                    data: {
                        user: null
                    },
                    error: null
                }),
            onAuthStateChange: ()=>({
                    data: {
                        subscription: {
                            unsubscribe: ()=>{}
                        }
                    }
                }),
            resetPasswordForEmail: ()=>Promise.resolve({
                    data: {},
                    error: null
                })
        }
    };
};
const supabase = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey) : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = supabase;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneSingleView/lib/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser,
    "hasRole",
    ()=>hasRole,
    "isAdmin",
    ()=>isAdmin,
    "isCustomer",
    ()=>isCustomer,
    "onAuthStateChange",
    ()=>onAuthStateChange,
    "resetPassword",
    ()=>resetPassword,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut,
    "signUp",
    ()=>signUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/supabase.ts [app-client] (ecmascript)");
;
async function signUp(email, password, name, mobile, role, company_name) {
    try {
        // Create auth user with Supabase
        const { data: authData, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email,
            password
        });
        if (authError) throw authError;
        if (!authData.user) throw new Error('No user returned from signup');
        // Generate unique customer ID (1SV- + 6 random alphanumeric characters)
        const customerId = '1SV-' + Math.random().toString(36).substring(2, 8).toUpperCase();
        // Create user profile object
        const newUser = {
            id: authData.user.id,
            email,
            mobile,
            name,
            company_name: role === 'corporate_employee' || role === 'corporate_admin' ? company_name : undefined,
            role,
            customer_id: customerId
        };
        // Retry logic for creating user profile to handle race conditions
        let retries = 3;
        while(retries > 0){
            try {
                // Wait for auth user to be propagated
                await new Promise((resolve)=>setTimeout(resolve, 1000));
                const { error: dbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').insert({
                    id: authData.user.id,
                    email: newUser.email,
                    mobile: newUser.mobile,
                    name: newUser.name,
                    company_name: newUser.company_name,
                    role: newUser.role,
                    customer_id: newUser.customer_id
                });
                if (dbError) {
                    // If foreign key violation, throw to catch block to retry
                    if (dbError.code === '23503') throw dbError;
                    // If unique violation (409), check if profile already exists
                    if (dbError.code === '23505') {
                        console.log('User profile already exists, checking for orphan...');
                        // Check if a profile exists with this email but different ID (orphaned)
                        const { data: existingProfile, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('email', email).maybeSingle();
                        if (!fetchError && existingProfile) {
                            // If ID matches, it's a duplicate signup attempt, just return it
                            if (existingProfile.id === authData.user.id) {
                                return {
                                    ...existingProfile,
                                    created_at: new Date(existingProfile.created_at),
                                    updated_at: new Date(existingProfile.updated_at)
                                };
                            }
                            // If ID doesn't match, it's an orphaned profile. Update it with new Auth ID.
                            console.log('Found orphaned profile. Linking to new Auth ID...');
                            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
                                id: authData.user.id,
                                updated_at: new Date().toISOString()
                            }).eq('email', email);
                            if (updateError) {
                                console.error('Failed to link orphaned profile:', updateError);
                                throw updateError;
                            }
                            // Return the updated profile
                            return {
                                ...existingProfile,
                                id: authData.user.id,
                                created_at: new Date(existingProfile.created_at),
                                updated_at: new Date()
                            };
                        }
                    }
                    // Other errors, throw immediately
                    throw dbError;
                }
                break;
            } catch (error) {
                retries--;
                if (retries === 0) {
                    console.error('Failed to create user profile after retries:', error);
                    throw new Error('Failed to create user profile. Please try again.');
                }
                console.log(`Retrying user profile creation... (${retries} attempts left)`);
            }
        }
        return {
            ...newUser,
            created_at: new Date(),
            updated_at: new Date()
        };
    } catch (error) {
        console.error('Signup error:', error);
        throw new Error(error.message || 'Failed to sign up');
    }
}
async function resetPassword(email) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.resetPasswordForEmail(email, {
            redirectTo: ("TURBOPACK compile-time truthy", 1) ? `${window.location.origin}/update-password` : "TURBOPACK unreachable"
        });
        if (error) throw error;
    } catch (error) {
        console.error('Reset password error:', error);
        throw new Error(error.message || 'Failed to send reset password email');
    }
}
async function signIn(email, password) {
    try {
        const { data: authData, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password
        });
        if (authError) throw authError;
        if (!authData.user) throw new Error('No user returned from sign in');
        // Fetch user data from database
        const { data: userData, error: dbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', authData.user.id).maybeSingle();
        if (dbError) throw dbError;
        if (!userData) throw new Error('User profile not found. Please contact support.');
        return {
            id: userData.id,
            email: userData.email,
            mobile: userData.mobile,
            name: userData.name,
            company_name: userData.company_name,
            role: userData.role,
            created_at: new Date(userData.created_at),
            updated_at: new Date(userData.updated_at),
            rm_id: userData.rm_id,
            customer_id: userData.customer_id
        };
    } catch (error) {
        console.error('Sign in error:', error);
        throw new Error(error.message || 'Failed to sign in');
    }
}
async function signOut() {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        if (error) throw error;
    } catch (error) {
        console.error('Sign out error:', error);
        throw new Error(error.message || 'Failed to sign out');
    }
}
async function getCurrentUser() {
    try {
        const { data: { user: authUser } } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!authUser) return null;
        const { data: userData, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', authUser.id).maybeSingle();
        if (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
        if (!userData) {
            console.warn('User authenticated but no profile found');
            return null;
        }
        return {
            id: userData.id,
            email: userData.email,
            mobile: userData.mobile,
            name: userData.name,
            company_name: userData.company_name,
            role: userData.role,
            created_at: new Date(userData.created_at),
            updated_at: new Date(userData.updated_at),
            rm_id: userData.rm_id,
            customer_id: userData.customer_id
        };
    } catch (error) {
        console.error('Error getting current user:', error);
        return null;
    }
}
function onAuthStateChange(callback) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange(async (event, session)=>{
        if (session?.user) {
            const user = await getCurrentUser();
            callback(user);
        } else {
            callback(null);
        }
    });
}
function hasRole(user, roles) {
    return user ? roles.includes(user.role) : false;
}
function isAdmin(user) {
    return hasRole(user, [
        'admin'
    ]);
}
function isCustomer(user) {
    return hasRole(user, [
        'individual',
        'corporate_employee',
        'corporate_admin'
    ]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneSingleView/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculatePolicyStatus",
    ()=>calculatePolicyStatus,
    "cn",
    ()=>cn,
    "daysUntil",
    ()=>daysUntil,
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "formatDateForInput",
    ()=>formatDateForInput,
    "getCurrentFY",
    ()=>getCurrentFY,
    "getFY",
    ()=>getFY,
    "getFYDates",
    ()=>getFYDates,
    "isDateInFY",
    ()=>isDateInFY,
    "truncate",
    ()=>truncate
]);
function calculatePolicyStatus(endDate, thresholdDays = 15) {
    // Handle null, undefined, or invalid dates
    if (!endDate) return 'Expired';
    const date = typeof endDate === 'string' ? new Date(endDate) : endDate;
    // Check if date is valid
    if (isNaN(date.getTime())) return 'Expired';
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 'Expired';
    if (diffDays <= thresholdDays) return 'Expiring Soon';
    return 'Active';
}
function getFY(date) {
    const month = date.getMonth(); // 0-indexed (0 = January)
    const year = date.getFullYear();
    if (month >= 3) {
        // April (3) onwards
        return `FY ${year}-${(year + 1).toString().slice(-2)}`;
    } else {
        return `FY ${year - 1}-${year.toString().slice(-2)}`;
    }
}
function isDateInFY(date, fy) {
    return getFY(date) === fy;
}
function getFYDates(fy) {
    const years = fy.match(/\d{4}-\d{2}/)?.[0].split('-');
    if (!years || years.length !== 2) {
        throw new Error('Invalid FY format');
    }
    const startYear = parseInt(years[0]);
    const endYear = parseInt('20' + years[1]);
    return {
        start: new Date(startYear, 3, 1),
        end: new Date(endYear, 2, 31, 23, 59, 59)
    };
}
function getCurrentFY() {
    return getFY(new Date());
}
function formatCurrency(amount, currency = '₹') {
    return `${currency}${amount.toLocaleString('en-IN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })}`;
}
function formatDate(date) {
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}
function daysUntil(endDate) {
    if (!endDate) return 0;
    const date = typeof endDate === 'string' ? new Date(endDate) : endDate;
    if (isNaN(date.getTime())) return 0;
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
function truncate(text, length) {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
}
function formatDateForInput(date) {
    if (!date) return '';
    try {
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        if (isNaN(dateObj.getTime())) return '';
        return dateObj.toISOString().split('T')[0];
    } catch  {
        return '';
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InsuranceTipsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/plane.js [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const insuranceTips = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-600',
        title: 'Motor Insurance Tip',
        tip: 'Always compare NCB (No Claim Bonus) before renewal. You can save up to 50% on premiums!'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50',
        iconColor: 'text-green-600',
        title: 'Health Insurance Tip',
        tip: 'Opt for family floater plans for better coverage at lower premiums. Sum insured of ₹10L+ recommended.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600',
        title: 'Coverage Advisory',
        tip: 'Read policy exclusions carefully! Pre-existing diseases often have 2-4 year waiting periods.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
        color: 'from-orange-500 to-orange-600',
        bgColor: 'bg-orange-50',
        iconColor: 'text-orange-600',
        title: 'Travel Insurance Tip',
        tip: 'Buy travel insurance at least 7 days before departure for maximum coverage including trip cancellation.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        color: 'from-pink-500 to-pink-600',
        bgColor: 'bg-pink-50',
        iconColor: 'text-pink-600',
        title: 'Life Insurance Tip',
        tip: 'Term insurance gives maximum coverage at lowest cost. Buy early for better premiums!'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        color: 'from-indigo-500 to-indigo-600',
        bgColor: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
        title: 'Claim Smart',
        tip: 'Inform insurer within 24 hours of incident. Keep all bills & reports for smooth claim settlement.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        color: 'from-yellow-500 to-yellow-600',
        bgColor: 'bg-yellow-50',
        iconColor: 'text-yellow-600',
        title: 'Document Smart',
        tip: 'Keep digital copies of all policies in cloud storage. Quick access during emergencies saves time!'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        color: 'from-teal-500 to-teal-600',
        bgColor: 'bg-teal-50',
        iconColor: 'text-teal-600',
        title: 'Renewal Reminder',
        tip: 'Set policy renewal alerts 30 days early. Avoid late fees & coverage gaps with timely renewals.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        color: 'from-red-500 to-red-600',
        bgColor: 'bg-red-50',
        iconColor: 'text-red-600',
        title: 'Add-on Benefits',
        tip: 'Zero depreciation, roadside assistance & consumables cover are valuable add-ons for motors.'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        color: 'from-cyan-500 to-cyan-600',
        bgColor: 'bg-cyan-50',
        iconColor: 'text-cyan-600',
        title: 'Pro Tip',
        tip: 'Compare quotes from 3+ insurers before buying. Your RM can help you find the best deal!'
    }
];
function InsuranceTipsCarousel() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const nextTip = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % insuranceTips.length);
    };
    const prevTip = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + insuranceTips.length) % insuranceTips.length);
    };
    const currentTip = insuranceTips[currentIndex];
    const Icon = currentTip.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-3 pb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative ${currentTip.bgColor} rounded-xl p-5 border border-gray-100 overflow-hidden group min-h-[180px] flex flex-col`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${currentTip.color} opacity-10 rounded-full -mr-10 -mt-10`
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                    lineNumber: 107,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-1 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-2.5 bg-white rounded-lg shadow-sm`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: `w-6 h-6 ${currentTip.iconColor}`
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                                        lineNumber: 114,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: insuranceTips.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-1.5 rounded-full transition-all ${idx === currentIndex ? 'w-5 bg-gray-400' : 'w-1.5 bg-gray-300'}`
                                        }, idx, false, {
                                            fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                                            lineNumber: 118,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                            lineNumber: 112,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: `text-sm font-bold ${currentTip.iconColor} mb-3`,
                            children: currentTip.title
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                            lineNumber: 128,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-700 leading-relaxed mb-4 flex-1",
                            children: currentTip.tip
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mt-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prevTip,
                                    className: "p-1.5 hover:bg-white rounded-full transition-colors",
                                    "aria-label": "Previous tip",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "w-5 h-5 text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                                        lineNumber: 144,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-500 font-medium",
                                    children: [
                                        currentIndex + 1,
                                        " / ",
                                        insuranceTips.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: nextTip,
                                    className: "p-1.5 hover:bg-white rounded-full transition-colors",
                                    "aria-label": "Next tip",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-5 h-5 text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                                        lineNumber: 154,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                                    lineNumber: 149,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                            lineNumber: 138,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
                    lineNumber: 110,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
            lineNumber: 105,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx",
        lineNumber: 104,
        columnNumber: 9
    }, this);
}
_s(InsuranceTipsCarousel, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c = InsuranceTipsCarousel;
var _c;
__turbopack_context__.k.register(_c, "InsuranceTipsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneSingleView/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-client] (ecmascript) <export default as UserCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$layout$2f$InsuranceTipsCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/layout/InsuranceTipsCarousel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Sidebar({ user, onClose }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [openGroups, setOpenGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'Overview',
        'Policies',
        'Claims',
        'Documents',
        'Community',
        'Admin'
    ]);
    const [isUploadingAvatar, setIsUploadingAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleGroup = (label)=>{
        setOpenGroups((prev)=>prev.includes(label) ? prev.filter((g)=>g !== label) : [
                ...prev,
                label
            ]);
    };
    const navGroups = [
        {
            label: 'Overview',
            items: [
                {
                    href: '/dashboard',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
                    label: 'Dashboard'
                }
            ]
        },
        {
            label: 'Policies',
            items: [
                {
                    href: '/policies',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                    label: 'All Policies'
                }
            ]
        },
        {
            label: 'Claims',
            items: [
                {
                    href: '/claims',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"],
                    label: 'Claims'
                }
            ]
        },
        {
            label: 'Quick Actions',
            items: [
                {
                    href: '/quotes',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
                    label: 'Get Quote'
                },
                {
                    href: '/claims',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                    label: 'File Claim'
                }
            ]
        },
        {
            label: 'Documents',
            items: [
                {
                    href: '/documents',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"],
                    label: 'Documents'
                },
                {
                    href: '/history',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"],
                    label: 'History'
                }
            ]
        }
    ];
    // Add Admin group if user is admin
    if (user.role === 'admin') {
        navGroups.push({
            label: 'Admin',
            items: [
                {
                    href: '/admin/dashboard',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                    label: 'Admin Dashboard'
                },
                {
                    href: '/admin/reports',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                    label: 'Reports & Exports'
                }
            ]
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-72 h-full bg-white border-r border-gray-100 flex flex-col overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center flex-shrink-0 px-6 py-6 border-b border-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                            className: "w-5 h-5 text-white"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-3 text-lg font-bold text-gray-900 tracking-tight",
                        children: "PolicyPilot"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4 border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center text-center space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl shadow-lg overflow-hidden",
                                    children: user.avatar_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: user.avatar_url,
                                        alt: user.name,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 33
                                    }, this) : user.name.charAt(0).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this),
                                isUploadingAvatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center bg-black/60 rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-white"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this),
                                !isUploadingAvatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "avatar-upload",
                                    className: "absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/20 p-1.5 rounded-full backdrop-blur-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__["UserCircle"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                            lineNumber: 144,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                        lineNumber: 143,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                    lineNumber: 139,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "avatar-upload",
                                    type: "file",
                                    accept: "image/*",
                                    className: "hidden",
                                    disabled: isUploadingAvatar,
                                    onChange: async (e)=>{
                                        const file = e.target.files?.[0];
                                        if (!file || isUploadingAvatar) return;
                                        setIsUploadingAvatar(true);
                                        console.log('[Avatar Upload] Starting upload for file:', file.name);
                                        try {
                                            const { uploadAvatar } = await __turbopack_context__.A("[project]/OneSingleView/lib/db.ts [app-client] (ecmascript, async loader)");
                                            console.log('[Avatar Upload] Calling uploadAvatar function...');
                                            const url = await uploadAvatar(user.id, file);
                                            console.log('[Avatar Upload] Upload result:', url);
                                            if (url) {
                                                console.log('[Avatar Upload] Success! Updating UI...');
                                                // Update user object with new avatar URL
                                                user.avatar_url = url;
                                                // Use router.refresh() instead of full page reload
                                                router.refresh();
                                                setIsUploadingAvatar(false);
                                            } else {
                                                console.error('[Avatar Upload] Upload returned null');
                                                setIsUploadingAvatar(false);
                                                alert('Failed to upload image. Please check console for details.');
                                            }
                                        } catch (error) {
                                            console.error('[Avatar Upload] Error:', error);
                                            setIsUploadingAvatar(false);
                                            alert(`Failed to upload image: ${error instanceof Error ? error.message : 'Unknown error'}`);
                                        } finally{
                                            // Reset file input
                                            e.target.value = '';
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base font-bold text-gray-900 truncate",
                                    children: user.name
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                    lineNumber: 194,
                                    columnNumber: 25
                                }, this),
                                user.company_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-700 mt-0.5 font-medium truncate",
                                    children: user.company_name
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                    lineNumber: 199,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-0.5 font-medium",
                                    children: [
                                        "ID: ",
                                        user.customer_id || 'N/A'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                            lineNumber: 193,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/profile",
                                    className: "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircle$3e$__["UserCircle"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                            lineNumber: 215,
                                            columnNumber: 29
                                        }, this),
                                        "Profile"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                    lineNumber: 211,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: async ()=>{
                                        try {
                                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])();
                                            router.push('/');
                                            router.refresh();
                                        } catch (error) {
                                            console.error('Error signing out:', error);
                                        }
                                    },
                                    className: "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                            lineNumber: 230,
                                            columnNumber: 29
                                        }, this),
                                        "Sign Out"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                    lineNumber: 218,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                            lineNumber: 210,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-4 space-y-4 overflow-y-auto scrollbar-hide",
                children: navGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleGroup(group.label),
                                className: "flex items-center justify-between w-full px-2 mb-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider hover:text-gray-600 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: group.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                        lineNumber: 245,
                                        columnNumber: 29
                                    }, this),
                                    openGroups.includes(group.label) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                        lineNumber: 247,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                        lineNumber: 249,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                lineNumber: 241,
                                columnNumber: 25
                            }, this),
                            openGroups.includes(group.label) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0.5",
                                children: group.items.map((item)=>{
                                    const isActive = pathname === item.href;
                                    const Icon = item.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 group', isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 mr-3 transition-colors", isActive ? "text-primary-600" : "text-gray-400 group-hover:text-gray-600")
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                                lineNumber: 270,
                                                columnNumber: 45
                                            }, this),
                                            item.label
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                        lineNumber: 260,
                                        columnNumber: 41
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                                lineNumber: 254,
                                columnNumber: 29
                            }, this)
                        ]
                    }, group.label, true, {
                        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                        lineNumber: 240,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                lineNumber: 238,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$layout$2f$InsuranceTipsCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                    lineNumber: 286,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
                lineNumber: 285,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/layout/Sidebar.tsx",
        lineNumber: 106,
        columnNumber: 9
    }, this);
}
_s(Sidebar, "n5jIphnGmB96HqOC+JxTToSuQek=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneSingleView/components/layout/NotificationsMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationsMenu
]);
function NotificationsMenu({ userId }) {
    // Temporarily disabled as per user request due to errors
    return null;
}
_c = NotificationsMenu;
var _c;
__turbopack_context__.k.register(_c, "NotificationsMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneSingleView/lib/db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/supabase.ts [app-client] (ecmascript)");
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from(table).select('id').eq('user_id', userId).eq('policy_number', policyNumber).maybeSingle();
    if (data) {
        throw new Error('This policy number already exists in your account');
    }
}
async function getUserMotorPolicies(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('motor_policies').select('*').eq('user_id', userId).order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').select('*').eq('user_id', userId).order('created_at', {
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
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('commercial_policies').select('*').eq('user_id', userId);
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('claims').select('*').eq('user_id', userId).order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('quote_requests').select('*').eq('user_id', userId).order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('motor_policies').insert({
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').insert({
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('commercial_policies').insert({
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
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('motor_policies').update(updates).eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error updating motor policy:', error);
        throw new Error(error.message || 'Failed to update motor policy');
    }
}
async function deleteMotorPolicy(id) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('motor_policies').delete().eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting motor policy:', error);
        throw new Error(error.message || 'Failed to delete motor policy');
    }
}
async function updateHealthPolicy(id, updates) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').update(updates).eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error updating health policy:', error);
        throw new Error(error.message || 'Failed to update health policy');
    }
}
async function deleteHealthPolicy(id) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').delete().eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting health policy:', error);
        throw new Error(error.message || 'Failed to delete health policy');
    }
}
async function updateCommercialPolicy(id, updates) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('commercial_policies').update(updates).eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error updating commercial policy:', error);
        throw new Error(error.message || 'Failed to update commercial policy');
    }
}
async function deleteCommercialPolicy(id) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('commercial_policies').delete().eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting commercial policy:', error);
        throw new Error(error.message || 'Failed to delete commercial policy');
    }
}
async function addClaim(claim) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('claims').insert({
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
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('claims').update(updates).eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error updating claim:', error);
        throw new Error(error.message || 'Failed to update claim');
    }
}
async function addQuoteRequest(quote) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('quote_requests').insert({
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
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('quote_requests').update(updates).eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error updating quote request:', error);
        throw new Error(error.message || 'Failed to update quote request');
    }
}
async function getUserReferrals(userId) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('referrals').select('*').eq('user_id', userId).order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('referrals').insert({
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
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_audit_log').insert({
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', userId).single();
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_audit_log').select('*').eq('user_id', userId).order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('motor_policies').select('*, users(name, email)').order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').select('*, users(name, email)').order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('commercial_policies').select('*, users(name, email)').order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('claims').select('*, users(name, email)').order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('quote_requests').select('*, users(name, email)').order('created_at', {
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('app_settings').select('*').order('key');
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching app settings:', error);
        return [];
    }
}
async function updateAppSetting(key, value) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('app_settings').upsert({
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('banners').select('*').order('display_order');
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching banners:', error);
        return [];
    }
}
async function addBanner(banner) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('banners').insert(banner);
        if (error) throw error;
    } catch (error) {
        console.error('Error adding banner:', error);
        throw error;
    }
}
async function deleteBanner(id) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('banners').delete().eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting banner:', error);
        throw error;
    }
}
async function getAllGarages() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('garages').select('*').order('name');
        if (error) throw error;
        return (data || []).map((row)=>convertDates(row));
    } catch (error) {
        console.error('Error fetching garages:', error);
        return [];
    }
}
async function addGarage(garage) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('garages').insert(garage);
        if (error) throw error;
    } catch (error) {
        console.error('Error adding garage:', error);
        throw error;
    }
}
async function deleteGarage(id) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('garages').delete().eq('id', id);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting garage:', error);
        throw error;
    }
}
async function updateUserProfile(userId, updates) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').update(updates).eq('id', userId).select().single();
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
        const { data: user, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('rm_id').eq('id', userId).single();
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
        const { data: rm, error: rmError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('name, email, mobile').eq('id', user.rm_id).single();
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_preferences').select('*').eq('user_id', userId).single();
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_preferences').insert(defaultPrefs).select().single();
        if (error) throw error;
        return convertDates(data);
    } catch (error) {
        console.error('Error creating default preferences:', error);
        throw error;
    }
}
async function updateUserPreferences(userId, preferences) {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('user_preferences').upsert({
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('life_policies').select('*').eq('user_id', userId).order('policy_end_date', {
        ascending: true
    });
    if (error) throw error;
    return (data || []).map((row)=>convertDates(row));
}
async function addLifePolicy(policy) {
    await checkDuplicatePolicy('life_policies', policy.user_id, policy.policy_number);
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('life_policies').insert([
        policy
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getUserTravelPolicies(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('travel_policies').select('*').eq('user_id', userId).order('policy_end_date', {
        ascending: true
    });
    if (error) throw error;
    return (data || []).map((row)=>convertDates(row));
}
async function addTravelPolicy(policy) {
    await checkDuplicatePolicy('travel_policies', policy.user_id, policy.policy_number);
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('travel_policies').insert([
        policy
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getCompanyGMCPolicy(companyName) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_policies').select('*').eq('company_name', companyName).maybeSingle();
    if (error) throw error;
    return data ? convertDates(data) : null;
}
async function getUserCyberPolicies(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cyber_policies').select('*').eq('user_id', userId).order('policy_end_date', {
        ascending: true
    });
    if (error) throw error;
    return (data || []).map((row)=>convertDates(row));
}
async function addCyberPolicy(policy) {
    await checkDuplicatePolicy('cyber_policies', policy.user_id, policy.policy_number);
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cyber_policies').insert([
        policy
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getUserNotifications(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('*').eq('user_id', userId).order('created_at', {
        ascending: false
    }).limit(20);
    if (error) throw error;
    return (data || []).map((row)=>convertDates(row));
}
async function markNotificationAsRead(notificationId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').update({
        is_read: true
    }).eq('id', notificationId);
    if (error) throw error;
}
async function markAllNotificationsAsRead(userId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('notifications').update({
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
        const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('avatars').upload(filePath, file);
        if (uploadError) {
            throw uploadError;
        }
        // Get public URL
        const { data } = __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('avatars').getPublicUrl(filePath);
        // Update user profile
        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneSingleView/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$layout$2f$NotificationsMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/layout/NotificationsMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/db.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Header({ user, onMenuClick }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [rmInfo, setRmInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const loadRM = {
                "Header.useEffect.loadRM": async ()=>{
                    if (user?.id) {
                        try {
                            const rm = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserRM"])(user.id);
                            setRmInfo(rm);
                        } catch (error) {
                            console.error('Error loading RM info:', error);
                        }
                    }
                }
            }["Header.useEffect.loadRM"];
            loadRM();
        }
    }["Header.useEffect"], [
        user?.id
    ]);
    const handleSearch = (e)=>{
        if (e.key === 'Enter') {
            router.push(`/policies?search=${encodeURIComponent(searchQuery)}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white border-b border-gray-100 h-16 flex items-center justify-between px-4 md:px-8 sticky top-0 z-40 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onMenuClick,
                className: "lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    className: "w-6 h-6 text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 max-w-xl relative mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search policies, claims, or documents...",
                        className: "w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary-100 focus:bg-white transition-all placeholder-gray-400 text-gray-600",
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        onKeyDown: handleSearch
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 md:gap-4",
                children: [
                    rmInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-blue-600",
                                    children: "RM"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-blue-600 uppercase tracking-wide leading-tight",
                                        children: "Relationship Manager"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-gray-900 leading-tight",
                                        children: rmInfo.name
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                        lineNumber: 81,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 border-l border-r border-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "w-4 h-4 text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                        lineNumber: 86,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${rmInfo.mobile}`,
                                        className: "text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors",
                                        title: "Click to call",
                                        children: rmInfo.mobile
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                lineNumber: 85,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://wa.me/${rmInfo.mobile.replace(/[^0-9]/g, '')}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "p-2 bg-green-50 hover:bg-green-100 rounded-full transition-colors",
                                        title: "Chat on WhatsApp",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 text-green-600",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                                lineNumber: 106,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                            lineNumber: 105,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                        lineNumber: 98,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${rmInfo.email}`,
                                        className: "p-2 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors",
                                        title: "Send Email",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "w-4 h-4 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                            lineNumber: 114,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                lineNumber: 97,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                        lineNumber: 72,
                        columnNumber: 21
                    }, this),
                    rmInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:hidden items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-blue-600",
                                    children: "RM"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-bold text-blue-600 uppercase leading-tight",
                                        children: "R.M."
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                        lineNumber: 127,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-gray-900 leading-tight truncate max-w-[100px]",
                                        children: rmInfo.name
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${rmInfo.mobile}`,
                                className: "p-1.5 bg-indigo-50 hover:bg-indigo-100 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    className: "w-3.5 h-3.5 text-indigo-600"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                    lineNumber: 131,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                                lineNumber: 130,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                        lineNumber: 122,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$layout$2f$NotificationsMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        userId: user.id
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/layout/Header.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/layout/Header.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
_s(Header, "d/N7ixLZebbRP5HRrHF7V9U9VAU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneSingleView/app/(customer)/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/layout/Header.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CustomerLayout({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerLayout.useEffect": ()=>{
            const checkAuth = {
                "CustomerLayout.useEffect.checkAuth": async ()=>{
                    try {
                        const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                        if (!currentUser) {
                            router.push('/login');
                            return;
                        }
                        setUser(currentUser);
                    } catch (error) {
                        console.error('Auth check failed:', error);
                        router.push('/login');
                    } finally{
                        setLoading(false);
                    }
                }
            }["CustomerLayout.useEffect.checkAuth"];
            checkAuth();
            const { data: { subscription } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChange"])({
                "CustomerLayout.useEffect": (updatedUser)=>{
                    setUser(updatedUser);
                    if (!updatedUser) {
                        router.push('/login');
                    }
                }
            }["CustomerLayout.useEffect"]);
            return ({
                "CustomerLayout.useEffect": ()=>{
                    subscription.unsubscribe();
                }
            })["CustomerLayout.useEffect"];
        }
    }["CustomerLayout.useEffect"], [
        router
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
                lineNumber: 54,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
            lineNumber: 53,
            columnNumber: 13
        }, this);
    }
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-soft font-sans text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity ${isMobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
                onClick: ()=>setIsMobileSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-y-0 left-0 z-50 transform transition-transform lg:translate-x-0 ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    user: user,
                    onClose: ()=>setIsMobileSidebarOpen(false)
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:pl-72 transition-all duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        user: user,
                        onMenuClick: ()=>setIsMobileSidebarOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/app/(customer)/layout.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(CustomerLayout, "AONgwwr3EbygzKV3N6ZJkwUoyLE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CustomerLayout;
var _c;
__turbopack_context__.k.register(_c, "CustomerLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneSingleView_68a06c51._.js.map