module.exports = [
"[project]/OneSingleView/hooks/useAuth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/auth.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useAuth() {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        const initAuth = async ()=>{
            try {
                const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                if (mounted) {
                    setUser(currentUser);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error initializing auth:', error);
                if (mounted) setLoading(false);
            }
        };
        initAuth();
        const { data: { subscription } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onAuthStateChange"])((user)=>{
            if (mounted) {
                setUser(user);
                setLoading(false);
            }
        });
        return ()=>{
            mounted = false;
            subscription.unsubscribe();
        };
    }, []);
    return {
        user,
        loading
    };
}
}),
"[project]/OneSingleView/components/forms/FormInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function FormInput({ label, name, type = 'text', value, onChange, onBlur, error, placeholder, required = false, disabled = false, min, max, step, options = [], rows = 4, className = '' }) {
    const baseInputClass = `
    w-full px-4 py-2 border rounded-lg
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
    disabled:bg-gray-100 disabled:cursor-not-allowed
    transition-colors
    ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
    ${className}
  `;
    const renderInput = ()=>{
        if (type === 'select') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: name,
                name: name,
                value: value,
                onChange: onChange,
                onBlur: onBlur,
                disabled: disabled,
                required: required,
                className: baseInputClass,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: [
                            "Select ",
                            label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
                        lineNumber: 62,
                        columnNumber: 21
                    }, this),
                    options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: option.value,
                            children: option.label
                        }, option.value, false, {
                            fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, this);
        }
        if (type === 'textarea') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                id: name,
                name: name,
                value: value,
                onChange: onChange,
                onBlur: onBlur,
                placeholder: placeholder,
                disabled: disabled,
                required: required,
                rows: rows,
                className: baseInputClass
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: name,
            name: name,
            type: type,
            value: value,
            onChange: onChange,
            onBlur: onBlur,
            placeholder: placeholder,
            disabled: disabled,
            required: required,
            min: min,
            max: max,
            step: step,
            className: baseInputClass
        }, void 0, false, {
            fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
            lineNumber: 90,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block text-sm font-medium text-gray-700",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
                        lineNumber: 112,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this),
            renderInput(),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-600 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
                            lineNumber: 118,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
                        lineNumber: 117,
                        columnNumber: 21
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
                lineNumber: 116,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/forms/FormInput.tsx",
        lineNumber: 109,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/lib/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteFile",
    ()=>deleteFile,
    "getPolicyStoragePath",
    ()=>getPolicyStoragePath,
    "initializeStorage",
    ()=>initializeStorage,
    "uploadFile",
    ()=>uploadFile,
    "uploadMultipleFiles",
    ()=>uploadMultipleFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/supabase.ts [app-ssr] (ecmascript)");
;
async function uploadFile(file, bucket) {
    try {
        // Generate unique filename to prevent duplicates
        const timestamp = Date.now();
        const randomStr = Math.random().toString(36).substring(2, 8);
        const fileExt = file.name.split('.').pop();
        const fileName = `${timestamp}_${randomStr}.${fileExt}`;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from(bucket).upload(fileName, file, {
            cacheControl: '3600',
            upsert: true
        });
        if (error) throw error;
        // Get public URL
        const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from(bucket).getPublicUrl(data.path);
        return publicUrl;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error(error.message || 'Failed to upload file');
    }
}
async function uploadMultipleFiles(files, bucket) {
    try {
        const uploadPromises = files.map((file)=>{
            return uploadFile(file, bucket);
        });
        return await Promise.all(uploadPromises);
    } catch (error) {
        console.error('Error uploading multiple files:', error);
        throw new Error(error.message || 'Failed to upload files');
    }
}
async function deleteFile(path) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('policy-documents').remove([
            path
        ]);
        if (error) throw error;
    } catch (error) {
        console.error('Error deleting file:', error);
        throw new Error(error.message || 'Failed to delete file');
    }
}
function getPolicyStoragePath(userId, policyType, docType) {
    return `${policyType}_policies/${userId}/${docType}`;
}
async function initializeStorage() {
    try {
        // Check if bucket exists
        const { data: buckets } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.listBuckets();
        const bucketExists = buckets?.some((bucket)=>bucket.name === 'policy-documents');
        if (!bucketExists) {
            // Create bucket
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.createBucket('policy-documents', {
                public: true,
                fileSizeLimit: 52428800,
                allowedMimeTypes: [
                    'application/pdf',
                    'image/*'
                ]
            });
            if (error) {
                console.error('Error creating storage bucket:', error);
            } else {
                console.log('Storage bucket created successfully');
            }
        }
    } catch (error) {
        console.error('Error initializing storage:', error);
    }
}
}),
"[project]/OneSingleView/components/forms/FileUpload.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/file.js [app-ssr] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/storage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function FileUpload({ label, name, accept = '.pdf,.jpg,.jpeg,.png', bucket, onUploadComplete, existingFile, required = false, maxSizeMB = 5 }) {
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingFile?.url || null);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(existingFile?.name || '');
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFileSelect = async (selectedFile)=>{
        setError('');
        // Validate file size
        if (selectedFile.size > maxSizeMB * 1024 * 1024) {
            setError(`File size must be less than ${maxSizeMB}MB`);
            return;
        }
        setFile(selectedFile);
        setFileName(selectedFile.name);
        // Show preview for images
        if (selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e)=>{
                setPreview(e.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }
        // Auto-upload
        await uploadFileToStorage(selectedFile);
    };
    const uploadFileToStorage = async (fileToUpload)=>{
        setUploading(true);
        setProgress(0);
        try {
            // Simulate progress
            const progressInterval = setInterval(()=>{
                setProgress((prev)=>Math.min(prev + 10, 90));
            }, 200);
            const fileUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadFile"])(fileToUpload, bucket);
            clearInterval(progressInterval);
            setProgress(100);
            setUploading(false);
            onUploadComplete(fileUrl, fileToUpload.name);
        } catch (err) {
            console.error('Upload error:', err);
            setError('Failed to upload file. Please try again.');
            setUploading(false);
            setFile(null);
            setPreview(null);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            handleFileSelect(droppedFile);
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
    };
    const handleRemove = ()=>{
        setFile(null);
        setPreview(null);
        setFileName('');
        setProgress(0);
        setError('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                        lineNumber: 116,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            !file && !existingFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDrop: handleDrop,
                onDragOver: handleDragOver,
                onClick: ()=>fileInputRef.current?.click(),
                className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary-500 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                        className: "w-8 h-8 text-gray-400 mx-auto mb-2"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                        lineNumber: 126,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mb-1",
                        children: "Click to upload or drag and drop"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                        lineNumber: 127,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500",
                        children: [
                            accept.toUpperCase(),
                            " (Max ",
                            maxSizeMB,
                            "MB)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                        lineNumber: 130,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: accept,
                        onChange: (e)=>e.target.files?.[0] && handleFileSelect(e.target.files[0]),
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                lineNumber: 120,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-gray-300 rounded-lg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3 flex-1",
                            children: [
                                preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: preview,
                                    alt: "Preview",
                                    className: "w-16 h-16 object-cover rounded"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                    lineNumber: 146,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                    className: "w-8 h-8 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                    lineNumber: 148,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0 max-w-[280px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-900 truncate break-all",
                                            title: fileName,
                                            children: fileName
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                            lineNumber: 151,
                                            columnNumber: 33
                                        }, this),
                                        uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full bg-gray-200 rounded-full h-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-primary-600 h-2 rounded-full transition-all",
                                                        style: {
                                                            width: `${progress}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: [
                                                        "Uploading... ",
                                                        progress,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                            lineNumber: 153,
                                            columnNumber: 37
                                        }, this),
                                        !uploading && progress === 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-green-600 flex items-center gap-1 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 41
                                                }, this),
                                                "Uploaded successfully"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                            lineNumber: 164,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                    lineNumber: 150,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                            lineNumber: 144,
                            columnNumber: 25
                        }, this),
                        !uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleRemove,
                            className: "text-red-600 hover:text-red-800 p-1 ml-4 hover:bg-red-50 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                                lineNumber: 177,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                            lineNumber: 172,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                    lineNumber: 143,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                lineNumber: 142,
                columnNumber: 17
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-600 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                            lineNumber: 187,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                        lineNumber: 186,
                        columnNumber: 21
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
                lineNumber: 185,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/forms/FileUpload.tsx",
        lineNumber: 113,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Insurance Companies List
__turbopack_context__.s([
    "CAR_MANUFACTURERS",
    ()=>CAR_MANUFACTURERS,
    "INSURANCE_COMPANIES",
    ()=>INSURANCE_COMPANIES
]);
const INSURANCE_COMPANIES = [
    'HDFC ERGO',
    'GO DIGIT',
    'ICICI LOMBARD',
    'TATA AIG',
    'SHRIRAM GIC',
    'ACKO GIC',
    'CHOLA MS',
    'INDUSIND GIC',
    'BAJAJ GIC',
    'IFFCO GIC',
    'liberty gic',
    'Royal sundaram',
    'magma',
    'kotak gic',
    'sbi gic',
    'national insurance',
    'oriental',
    'united India gic',
    'new india gic',
    'OTHERS'
];
const CAR_MANUFACTURERS = [
    'Maruti Suzuki',
    'Hyundai',
    'Tata',
    'Honda',
    'Toyota',
    'Mahindra',
    'Kia',
    'Volkswagen',
    'Renault',
    'Nissan',
    'Ford',
    'Skoda',
    'MG',
    'Jeep',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Volvo',
    'Others'
];
}),
"[project]/OneSingleView/lib/validation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Form validation utilities
__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "getErrorMessage",
    ()=>getErrorMessage,
    "getOneYearFromNow",
    ()=>getOneYearFromNow,
    "getTodayString",
    ()=>getTodayString,
    "parseDate",
    ()=>parseDate,
    "validateDateRange",
    ()=>validateDateRange,
    "validateEmail",
    ()=>validateEmail,
    "validateGSTNumber",
    ()=>validateGSTNumber,
    "validatePAN",
    ()=>validatePAN,
    "validatePhoneNumber",
    ()=>validatePhoneNumber,
    "validatePolicyNumber",
    ()=>validatePolicyNumber,
    "validatePremiumAmount",
    ()=>validatePremiumAmount,
    "validateRequired",
    ()=>validateRequired,
    "validateVehicleNumber",
    ()=>validateVehicleNumber
]);
const validateVehicleNumber = (vehicleNumber)=>{
    // Indian vehicle number format: AA00AA0000 or AA00A0000
    const regex = /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$/;
    return regex.test(vehicleNumber.replace(/\s+/g, ''));
};
const validatePolicyNumber = (policyNumber)=>{
    // Basic validation: at least 5 characters
    return policyNumber.trim().length >= 5;
};
const validatePremiumAmount = (amount, min = 0, max = 10000000)=>{
    return amount >= min && amount <= max && !isNaN(amount);
};
const validateDateRange = (startDate, endDate)=>{
    return startDate < endDate;
};
const validatePhoneNumber = (phone)=>{
    // Indian phone number: 10 digits, optionally starting with +91
    const regex = /^(\+91)?[6-9]\d{9}$/;
    return regex.test(phone.replace(/[\s-]/g, ''));
};
const validateEmail = (email)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
const validateGSTNumber = (gst)=>{
    // GST format: 22 characters
    const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return regex.test(gst);
};
const validatePAN = (pan)=>{
    // PAN format: AAAAA0000A
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return regex.test(pan);
};
const formatCurrency = (amount)=>{
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
};
const formatDate = (date)=>{
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
const parseDate = (dateString)=>{
    return new Date(dateString);
};
const getTodayString = ()=>{
    return new Date().toISOString().split('T')[0];
};
const getOneYearFromNow = ()=>{
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date.toISOString().split('T')[0];
};
const validateRequired = (value)=>{
    if (typeof value === 'string') {
        return value.trim().length > 0;
    }
    return value !== null && value !== undefined && value !== '';
};
const getErrorMessage = (fieldName, validationType)=>{
    const messages = {
        required: `${fieldName} is required`,
        vehicleNumber: 'Invalid vehicle number format (e.g., KA01AB1234)',
        policyNumber: 'Policy number must be at least 5 characters',
        premium: 'Invalid premium amount',
        dateRange: 'End date must be after start date',
        phone: 'Invalid phone number (10 digits)',
        email: 'Invalid email address',
        gst: 'Invalid GST number format',
        pan: 'Invalid PAN format'
    };
    return messages[validationType] || `Invalid ${fieldName}`;
};
}),
"[project]/OneSingleView/components/forms/MotorPolicyForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MotorPolicyForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FormInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FileUpload.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/validation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function MotorPolicyForm({ userId, initialData, onClose, onSuccess }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        vehicle_number: initialData?.vehicle_number || '',
        policy_number: initialData?.policy_number || '',
        vehicle_type: initialData?.vehicle_type || 'Car',
        manufacturer: initialData?.manufacturer || '',
        model: initialData?.model || '',
        fuel_type: initialData?.fuel_type || 'Petrol',
        manufacturing_year: initialData?.manufacturing_year || new Date().getFullYear(),
        number_plate_type: initialData?.number_plate_type || 'White',
        ownership_type: initialData?.ownership_type || 'Individual',
        policy_type: initialData?.policy_type || 'Comprehensive',
        insurer_name: initialData?.insurer_name || '',
        premium_amount: initialData?.premium_amount || 0,
        policy_start_date: initialData?.policy_start_date ? new Date(initialData.policy_start_date) : new Date(),
        policy_end_date: initialData?.policy_end_date ? new Date(initialData.policy_end_date) : new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        rc_docs: initialData?.rc_docs || [],
        previous_policy_docs: initialData?.previous_policy_docs || [],
        dl_docs: initialData?.dl_docs || []
    });
    // Auto-calculate end date when start date changes (1 day before same date next year)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (formData.policy_start_date && !initialData) {
            const startDate = new Date(formData.policy_start_date);
            const endDate = new Date(startDate);
            endDate.setFullYear(endDate.getFullYear() + 1);
            endDate.setDate(endDate.getDate() - 1); // 1 day before
            setFormData((prev)=>({
                    ...prev,
                    policy_end_date: endDate
                }));
        }
    }, [
        formData.policy_start_date,
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'number' ? Number(value) : value
            }));
        // Clear error when user types
        if (errors[name]) {
            setErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors[name];
                return newErrors;
            });
        }
    };
    const handleDateChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: new Date(value)
            }));
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateVehicleNumber"])(formData.vehicle_number || '')) {
            newErrors.vehicle_number = 'Invalid vehicle number format (e.g., KA01AB1234)';
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePolicyNumber"])(formData.policy_number || '')) {
            newErrors.policy_number = 'Policy number is required';
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePremiumAmount"])(formData.premium_amount || 0)) {
            newErrors.premium_amount = 'Invalid premium amount';
        }
        if (formData.policy_start_date && formData.policy_end_date) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDateRange"])(formData.policy_start_date, formData.policy_end_date)) {
                newErrors.policy_end_date = 'End date must be after start date';
            }
        }
        if (!formData.manufacturer) newErrors.manufacturer = 'Manufacturer is required';
        if (!formData.model) newErrors.model = 'Model is required';
        if (!formData.insurer_name) newErrors.insurer_name = 'Insurer name is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        try {
            const policyData = {
                ...formData,
                user_id: userId,
                // Ensure dates are Date objects
                policy_start_date: new Date(formData.policy_start_date),
                policy_end_date: new Date(formData.policy_end_date),
                rc_docs: formData.rc_docs || [],
                previous_policy_docs: formData.previous_policy_docs || [],
                dl_docs: formData.dl_docs || []
            };
            if (initialData?.id) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateMotorPolicy"])(initialData.id, policyData);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMotorPolicy"])(policyData);
            }
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error saving policy:', error);
            setErrors((prev)=>({
                    ...prev,
                    submit: 'Failed to save policy. Please try again.'
                }));
        } finally{
            setLoading(false);
        }
    };
    const handleFileUpload = (field)=>(url)=>{
            setFormData((prev)=>({
                    ...prev,
                    [field]: [
                        ...prev[field] || [],
                        url
                    ]
                }));
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-900",
                            children: initialData ? 'Edit Motor Policy' : 'Add New Motor Policy'
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                            lineNumber: 165,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                            lineNumber: 168,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                    lineNumber: 164,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-8",
                    children: [
                        errors.submit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 text-red-600 p-4 rounded-lg text-sm",
                            children: errors.submit
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                            lineNumber: 175,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                    children: "Vehicle Details"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                    lineNumber: 182,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Vehicle Number",
                                            name: "vehicle_number",
                                            value: formData.vehicle_number || '',
                                            onChange: handleChange,
                                            placeholder: "KA01AB1234",
                                            error: errors.vehicle_number,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 184,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Vehicle Type",
                                            name: "vehicle_type",
                                            type: "select",
                                            value: formData.vehicle_type || 'Car',
                                            onChange: handleChange,
                                            options: [
                                                {
                                                    value: 'Car',
                                                    label: 'Car'
                                                },
                                                {
                                                    value: 'Bike',
                                                    label: 'Bike'
                                                },
                                                {
                                                    value: 'Bus',
                                                    label: 'Bus'
                                                },
                                                {
                                                    value: 'GCV',
                                                    label: 'Goods Carrying Vehicle'
                                                },
                                                {
                                                    value: 'Misc',
                                                    label: 'Miscellaneous'
                                                }
                                            ],
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 193,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Number Plate Type",
                                            name: "number_plate_type",
                                            type: "select",
                                            value: formData.number_plate_type ?? '',
                                            onChange: handleChange,
                                            required: true,
                                            options: [
                                                {
                                                    value: 'White',
                                                    label: 'White (Pvt)'
                                                },
                                                {
                                                    value: 'Yellow',
                                                    label: 'Yellow (Commercial)'
                                                },
                                                {
                                                    value: 'EV',
                                                    label: 'EV (Green)'
                                                },
                                                {
                                                    value: 'Others',
                                                    label: 'Others'
                                                }
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 208,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Ownership Type",
                                            name: "ownership_type",
                                            type: "select",
                                            value: formData.ownership_type ?? 'Individual',
                                            onChange: handleChange,
                                            required: true,
                                            options: [
                                                {
                                                    value: 'Individual',
                                                    label: 'Individual'
                                                },
                                                {
                                                    value: 'Company',
                                                    label: 'Company'
                                                }
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 222,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Policy Type",
                                            name: "policy_type",
                                            type: "select",
                                            value: formData.policy_type ?? 'Comprehensive',
                                            onChange: handleChange,
                                            required: true,
                                            options: [
                                                {
                                                    value: 'Comprehensive',
                                                    label: 'Comprehensive'
                                                },
                                                {
                                                    value: 'TP',
                                                    label: 'TP (Third Party)'
                                                }
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 234,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Manufacturer",
                                            name: "manufacturer",
                                            type: "select",
                                            value: formData.manufacturer || '',
                                            onChange: handleChange,
                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAR_MANUFACTURERS"].map((m)=>({
                                                    value: m,
                                                    label: m
                                                })),
                                            error: errors.manufacturer,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 246,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Model",
                                            name: "model",
                                            value: formData.model || '',
                                            onChange: handleChange,
                                            placeholder: "e.g. Swift",
                                            error: errors.model,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 256,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Fuel Type",
                                            name: "fuel_type",
                                            type: "select",
                                            value: formData.fuel_type || 'Petrol',
                                            onChange: handleChange,
                                            options: [
                                                {
                                                    value: 'Petrol',
                                                    label: 'Petrol'
                                                },
                                                {
                                                    value: 'Diesel',
                                                    label: 'Diesel'
                                                },
                                                {
                                                    value: 'CNG',
                                                    label: 'CNG'
                                                },
                                                {
                                                    value: 'Electric',
                                                    label: 'Electric'
                                                },
                                                {
                                                    value: 'Hybrid',
                                                    label: 'Hybrid'
                                                }
                                            ],
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 265,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Manufacturing Year",
                                            name: "manufacturing_year",
                                            type: "number",
                                            value: formData.manufacturing_year || new Date().getFullYear(),
                                            onChange: handleChange,
                                            min: 1990,
                                            max: new Date().getFullYear(),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 280,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                    lineNumber: 183,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                            lineNumber: 181,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                    children: "Policy Details"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                    lineNumber: 295,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Policy Number",
                                            name: "policy_number",
                                            value: formData.policy_number || '',
                                            onChange: handleChange,
                                            placeholder: "Enter policy number",
                                            error: errors.policy_number,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 297,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Insurer Name",
                                            name: "insurer_name",
                                            type: "select",
                                            value: formData.insurer_name || '',
                                            onChange: handleChange,
                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INSURANCE_COMPANIES"].map((c)=>({
                                                    value: c,
                                                    label: c
                                                })),
                                            error: errors.insurer_name,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 306,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Premium Amount (₹)",
                                            name: "premium_amount",
                                            type: "number",
                                            value: formData.premium_amount || '',
                                            onChange: handleChange,
                                            error: errors.premium_amount,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 316,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Start Date",
                                            name: "policy_start_date",
                                            type: "date",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateForInput"])(formData.policy_start_date),
                                            onChange: handleDateChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 325,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "End Date",
                                            name: "policy_end_date",
                                            type: "date",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateForInput"])(formData.policy_end_date),
                                            onChange: handleDateChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 333,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                    lineNumber: 296,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                            lineNumber: 294,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                    children: "Documents"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                    lineNumber: 346,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "RC Copy",
                                            name: "rc_docs",
                                            bucket: "rc-copies",
                                            onUploadComplete: handleFileUpload('rc_docs'),
                                            existingFile: formData.rc_docs && formData.rc_docs.length > 0 ? {
                                                url: formData.rc_docs[0],
                                                name: 'RC Document'
                                            } : undefined
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 348,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Previous Policy",
                                            name: "previous_policy_docs",
                                            bucket: "policy-documents",
                                            onUploadComplete: handleFileUpload('previous_policy_docs'),
                                            existingFile: formData.previous_policy_docs && formData.previous_policy_docs.length > 0 ? {
                                                url: formData.previous_policy_docs[0],
                                                name: 'Previous Policy'
                                            } : undefined
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                            lineNumber: 355,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                    lineNumber: 347,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                            lineNumber: 345,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-4 pt-6 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50",
                                    disabled: loading,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                    lineNumber: 366,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center",
                                    disabled: loading,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                                lineNumber: 381,
                                                columnNumber: 37
                                            }, this),
                                            "Saving..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                                lineNumber: 386,
                                                columnNumber: 37
                                            }, this),
                                            "Save Policy"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                                    lineNumber: 374,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                            lineNumber: 365,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
                    lineNumber: 173,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
            lineNumber: 163,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneSingleView/components/forms/MotorPolicyForm.tsx",
        lineNumber: 162,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/forms/HealthPolicyForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HealthPolicyForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FormInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FileUpload.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/validation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function HealthPolicyForm({ userId, initialData, onClose, onSuccess }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        company_name: initialData?.company_name || '',
        policy_number: initialData?.policy_number || '',
        insurer_name: initialData?.insurer_name || '',
        sum_insured: initialData?.sum_insured || 0,
        premium_amount: initialData?.premium_amount || 0,
        expiry_date: initialData?.expiry_date ? new Date(initialData.expiry_date) : new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        policy_docs: initialData?.policy_docs || [],
        no_of_lives: initialData?.no_of_lives || 0
    });
    // Auto-calculate expiry date when it's a new policy (1 year from today - 1 day)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!initialData) {
            const today = new Date();
            const expiryDate = new Date(today);
            expiryDate.setFullYear(expiryDate.getFullYear() + 1);
            expiryDate.setDate(expiryDate.getDate() - 1); // 1 day before
            setFormData((prev)=>({
                    ...prev,
                    expiry_date: expiryDate
                }));
        }
    }, [
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'number' ? Number(value) : value
            }));
        if (errors[name]) {
            setErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors[name];
                return newErrors;
            });
        }
    };
    const handleDateChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: new Date(value)
            }));
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePolicyNumber"])(formData.policy_number || '')) {
            newErrors.policy_number = 'Policy number is required';
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePremiumAmount"])(formData.premium_amount || 0)) {
            newErrors.premium_amount = 'Invalid premium amount';
        }
        if (!formData.insurer_name) newErrors.insurer_name = 'Insurer name is required';
        if (!formData.company_name) newErrors.company_name = 'Company name is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        try {
            const policyData = {
                ...formData,
                user_id: userId,
                expiry_date: new Date(formData.expiry_date),
                policy_number: formData.policy_number || '',
                insurer_name: formData.insurer_name || '',
                premium_amount: formData.premium_amount || 0,
                policy_docs: formData.policy_docs || []
            };
            if (initialData?.id) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateHealthPolicy"])(initialData.id, policyData);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addHealthPolicy"])(policyData);
            }
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error saving policy:', error);
            setErrors((prev)=>({
                    ...prev,
                    submit: 'Failed to save policy. Please try again.'
                }));
        } finally{
            setLoading(false);
        }
    };
    const handleFileUpload = (url)=>{
        setFormData((prev)=>({
                ...prev,
                policy_docs: [
                    ...prev.policy_docs || [],
                    url
                ]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-900",
                            children: initialData ? 'Edit Health Insurance Policy' : 'Add New Health Insurance Policy'
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                lineNumber: 144,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                    lineNumber: 139,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-8",
                    children: [
                        errors.submit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 text-red-600 p-4 rounded-lg text-sm",
                            children: errors.submit
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                            lineNumber: 150,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                    children: "Policy Details"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Company Name",
                                            name: "company_name",
                                            value: formData.company_name || '',
                                            onChange: handleChange,
                                            placeholder: "e.g. Acme Corp",
                                            error: errors.company_name,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                            lineNumber: 159,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Policy Number",
                                            name: "policy_number",
                                            value: formData.policy_number || '',
                                            onChange: handleChange,
                                            placeholder: "Enter policy number",
                                            error: errors.policy_number,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                            lineNumber: 168,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Insurer Name",
                                            name: "insurer_name",
                                            type: "select",
                                            value: formData.insurer_name || '',
                                            onChange: handleChange,
                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INSURANCE_COMPANIES"].map((c)=>({
                                                    value: c,
                                                    label: c
                                                })),
                                            error: errors.insurer_name,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                            lineNumber: 177,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Sum Insured (₹)",
                                            name: "sum_insured",
                                            type: "number",
                                            value: formData.sum_insured || '',
                                            onChange: handleChange,
                                            placeholder: "e.g. 500000"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                            lineNumber: 187,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Premium Amount (₹)",
                                            name: "premium_amount",
                                            type: "number",
                                            value: formData.premium_amount || '',
                                            onChange: handleChange,
                                            error: errors.premium_amount,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                            lineNumber: 195,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Expiry Date",
                                            name: "expiry_date",
                                            type: "date",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateForInput"])(formData.expiry_date),
                                            onChange: handleDateChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                            lineNumber: 204,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Number of Lives",
                                            name: "no_of_lives",
                                            type: "number",
                                            value: formData.no_of_lives || '',
                                            onChange: handleChange,
                                            placeholder: "e.g. 50"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                            lineNumber: 212,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                            lineNumber: 156,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                    children: "Documents"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                    lineNumber: 225,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Policy Document",
                                        name: "policy_docs",
                                        bucket: "policy-documents",
                                        onUploadComplete: handleFileUpload,
                                        existingFile: formData.policy_docs && formData.policy_docs.length > 0 ? {
                                            url: formData.policy_docs[0],
                                            name: 'Policy Document'
                                        } : undefined
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                        lineNumber: 227,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                    lineNumber: 226,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                            lineNumber: 224,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-4 pt-6 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50",
                                    disabled: loading,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                    lineNumber: 238,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center",
                                    disabled: loading,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                                lineNumber: 253,
                                                columnNumber: 37
                                            }, this),
                                            "Saving..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                                lineNumber: 258,
                                                columnNumber: 37
                                            }, this),
                                            "Save Policy"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                                    lineNumber: 246,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                            lineNumber: 237,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
                    lineNumber: 148,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
            lineNumber: 138,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneSingleView/components/forms/HealthPolicyForm.tsx",
        lineNumber: 137,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommercialPolicyForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FormInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FileUpload.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/validation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function CommercialPolicyForm({ userId, initialData, onClose, onSuccess }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        lob_type: initialData?.lob_type || 'GPA',
        company_name: initialData?.company_name || '',
        policy_holder_name: initialData?.policy_holder_name || '',
        policy_number: initialData?.policy_number || '',
        insurer_name: initialData?.insurer_name || '',
        premium_amount: initialData?.premium_amount || 0,
        sum_insured: initialData?.sum_insured || 0,
        expiry_date: initialData?.expiry_date ? new Date(initialData.expiry_date) : new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        policy_docs: initialData?.policy_docs || []
    });
    // Auto-calculate expiry date when it's a new policy (1 year from today - 1 day)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!initialData) {
            const today = new Date();
            const expiryDate = new Date(today);
            expiryDate.setFullYear(expiryDate.getFullYear() + 1);
            expiryDate.setDate(expiryDate.getDate() - 1); // 1 day before
            setFormData((prev)=>({
                    ...prev,
                    expiry_date: expiryDate
                }));
        }
    }, [
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'number' ? Number(value) : value
            }));
        if (errors[name]) {
            setErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors[name];
                return newErrors;
            });
        }
    };
    const handleDateChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: new Date(value)
            }));
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePolicyNumber"])(formData.policy_number || '')) {
            newErrors.policy_number = 'Policy number is required';
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePremiumAmount"])(formData.premium_amount || 0)) {
            newErrors.premium_amount = 'Invalid premium amount';
        }
        if (!formData.insurer_name) newErrors.insurer_name = 'Insurer name is required';
        if (!formData.lob_type) newErrors.lob_type = 'LOB Type is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        try {
            const policyData = {
                ...formData,
                user_id: userId,
                expiry_date: new Date(formData.expiry_date),
                policy_number: formData.policy_number || '',
                insurer_name: formData.insurer_name || '',
                premium_amount: formData.premium_amount || 0,
                lob_type: formData.lob_type || 'GPA',
                policy_docs: formData.policy_docs || []
            };
            if (initialData?.id) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCommercialPolicy"])(initialData.id, policyData);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addCommercialPolicy"])(policyData);
            }
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error saving policy:', error);
            setErrors((prev)=>({
                    ...prev,
                    submit: 'Failed to save policy. Please try again.'
                }));
        } finally{
            setLoading(false);
        }
    };
    const handleFileUpload = (url)=>{
        setFormData((prev)=>({
                ...prev,
                policy_docs: [
                    ...prev.policy_docs || [],
                    url
                ]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-900",
                            children: initialData ? 'Edit Commercial Policy' : 'Add New Commercial Policy'
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-8",
                    children: [
                        errors.submit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 text-red-600 p-4 rounded-lg text-sm",
                            children: errors.submit
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                            lineNumber: 152,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                    children: "Policy Details"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                    lineNumber: 159,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "LOB Type",
                                            name: "lob_type",
                                            type: "select",
                                            value: formData.lob_type || 'GPA',
                                            onChange: handleChange,
                                            options: [
                                                {
                                                    value: 'GPA',
                                                    label: 'GPA'
                                                },
                                                {
                                                    value: 'Fire',
                                                    label: 'Fire'
                                                },
                                                {
                                                    value: 'Other',
                                                    label: 'Other'
                                                }
                                            ],
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                            lineNumber: 161,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Company Name",
                                            name: "company_name",
                                            value: formData.company_name || '',
                                            onChange: handleChange,
                                            placeholder: "e.g. Acme Corp"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                            lineNumber: 174,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Policy Holder Name",
                                            name: "policy_holder_name",
                                            value: formData.policy_holder_name || '',
                                            onChange: handleChange,
                                            placeholder: "e.g. John Doe"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                            lineNumber: 181,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Policy Number",
                                            name: "policy_number",
                                            value: formData.policy_number || '',
                                            onChange: handleChange,
                                            placeholder: "Enter policy number",
                                            error: errors.policy_number,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                            lineNumber: 188,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Insurer Name",
                                            name: "insurer_name",
                                            type: "select",
                                            value: formData.insurer_name || '',
                                            onChange: handleChange,
                                            options: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INSURANCE_COMPANIES"].map((c)=>({
                                                    value: c,
                                                    label: c
                                                })),
                                            error: errors.insurer_name,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                            lineNumber: 197,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Sum Insured (₹)",
                                            name: "sum_insured",
                                            type: "number",
                                            value: formData.sum_insured || '',
                                            onChange: handleChange,
                                            placeholder: "e.g. 500000"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                            lineNumber: 207,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Premium Amount (₹)",
                                            name: "premium_amount",
                                            type: "number",
                                            value: formData.premium_amount || '',
                                            onChange: handleChange,
                                            error: errors.premium_amount,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                            lineNumber: 215,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Expiry Date",
                                            name: "expiry_date",
                                            type: "date",
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateForInput"])(formData.expiry_date),
                                            onChange: handleDateChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                            lineNumber: 224,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                            lineNumber: 158,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                    children: "Documents"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                    lineNumber: 237,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Policy Document",
                                        name: "policy_docs",
                                        bucket: "policy-documents",
                                        onUploadComplete: handleFileUpload,
                                        existingFile: formData.policy_docs && formData.policy_docs.length > 0 ? {
                                            url: formData.policy_docs[0],
                                            name: 'Policy Document'
                                        } : undefined
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                        lineNumber: 239,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                    lineNumber: 238,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                            lineNumber: 236,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-4 pt-6 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50",
                                    disabled: loading,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                    lineNumber: 250,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center",
                                    disabled: loading,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-4 h-4 mr-2 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                                lineNumber: 265,
                                                columnNumber: 37
                                            }, this),
                                            "Saving..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                                lineNumber: 270,
                                                columnNumber: 37
                                            }, this),
                                            "Save Policy"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                                    lineNumber: 258,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                            lineNumber: 249,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
                    lineNumber: 150,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
            lineNumber: 140,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx",
        lineNumber: 139,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/forms/LifePolicyForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LifePolicyForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FormInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FileUpload.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function LifePolicyForm({ userId, initialData, onClose, onSuccess }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        policy_number: initialData?.policy_number || '',
        insurer_name: initialData?.insurer_name || '',
        premium_amount: initialData?.premium_amount || 0,
        sum_assured: initialData?.sum_assured || 0,
        nominee_name: initialData?.nominee_name || '',
        policy_start_date: initialData?.policy_start_date ? new Date(initialData.policy_start_date) : new Date(),
        policy_end_date: initialData?.policy_end_date ? new Date(initialData.policy_end_date) : new Date(new Date().setFullYear(new Date().getFullYear() + 20)),
        document_url: initialData?.document_url || ''
    });
    // Auto-calculate end date when start date changes (1 day before same date next year)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (formData.policy_start_date && !initialData) {
            const startDate = new Date(formData.policy_start_date);
            const endDate = new Date(startDate);
            endDate.setFullYear(endDate.getFullYear() + 1);
            endDate.setDate(endDate.getDate() - 1); // 1 day before
            setFormData((prev)=>({
                    ...prev,
                    policy_end_date: endDate
                }));
        }
    }, [
        formData.policy_start_date,
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'number' ? Number(value) : value
            }));
    };
    const handleDateChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: new Date(value)
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLifePolicy"])({
                ...formData,
                user_id: userId,
                status: 'Active'
            });
            onSuccess();
        } catch (error) {
            console.error('Error saving life policy:', error);
            setErrors({
                submit: 'Failed to save policy'
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-gray-900",
                children: "Life Insurance Details"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Policy Number",
                        name: "policy_number",
                        value: formData.policy_number,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Policy Number",
                        name: "policy_number",
                        value: formData.policy_number,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Insurer Name",
                        name: "insurer_name",
                        type: "select",
                        value: formData.insurer_name,
                        onChange: handleChange,
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INSURANCE_COMPANIES"].map((c)=>({
                                value: c,
                                label: c
                            })),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Premium Amount (₹)",
                        name: "premium_amount",
                        type: "number",
                        value: formData.premium_amount,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Sum Assured (₹)",
                        name: "sum_assured",
                        type: "number",
                        value: formData.sum_assured,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Nominee Name",
                        name: "nominee_name",
                        value: formData.nominee_name,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Start Date",
                        name: "policy_start_date",
                        type: "date",
                        value: formData.policy_start_date.toISOString().split('T')[0],
                        onChange: handleDateChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "End Date",
                        name: "policy_end_date",
                        type: "date",
                        value: formData.policy_end_date.toISOString().split('T')[0],
                        onChange: handleDateChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: "Policy Document",
                name: "document_url",
                bucket: "policy-documents",
                onUploadComplete: (url)=>setFormData((prev)=>({
                            ...prev,
                            document_url: url
                        }))
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end space-x-4 pt-4 border-t",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "px-4 py-2 border rounded-lg hover:bg-gray-50",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center",
                        children: [
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 mr-2 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                                lineNumber: 109,
                                columnNumber: 32
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                                lineNumber: 109,
                                columnNumber: 84
                            }, this),
                            "Save Policy"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/forms/LifePolicyForm.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/forms/TravelPolicyForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TravelPolicyForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FormInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FileUpload.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function TravelPolicyForm({ userId, initialData, onClose, onSuccess }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        policy_number: initialData?.policy_number || '',
        insurer_name: initialData?.insurer_name || '',
        premium_amount: initialData?.premium_amount || 0,
        destination: initialData?.destination || '',
        trip_type: initialData?.trip_type || 'Single Trip',
        policy_start_date: initialData?.policy_start_date ? new Date(initialData.policy_start_date) : new Date(),
        policy_end_date: initialData?.policy_end_date ? new Date(initialData.policy_end_date) : new Date(new Date().setDate(new Date().getDate() + 7)),
        document_url: initialData?.document_url || ''
    });
    // Auto-calculate end date when start date changes (1 day before same date next year)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (formData.policy_start_date && !initialData) {
            const startDate = new Date(formData.policy_start_date);
            const endDate = new Date(startDate);
            endDate.setFullYear(endDate.getFullYear() + 1);
            endDate.setDate(endDate.getDate() - 1); // 1 day before
            setFormData((prev)=>({
                    ...prev,
                    policy_end_date: endDate
                }));
        }
    }, [
        formData.policy_start_date,
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'number' ? Number(value) : value
            }));
    };
    const handleDateChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: new Date(value)
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addTravelPolicy"])({
                ...formData,
                user_id: userId,
                status: 'Active'
            });
            onSuccess();
        } catch (error) {
            console.error('Error saving travel policy:', error);
            setErrors({
                submit: 'Failed to save policy'
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-gray-900",
                children: "Travel Insurance Details"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Policy Number",
                        name: "policy_number",
                        value: formData.policy_number,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Insurer Name",
                        name: "insurer_name",
                        type: "select",
                        value: formData.insurer_name,
                        onChange: handleChange,
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INSURANCE_COMPANIES"].map((c)=>({
                                value: c,
                                label: c
                            })),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Premium Amount (₹)",
                        name: "premium_amount",
                        type: "number",
                        value: formData.premium_amount,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Destination",
                        name: "destination",
                        value: formData.destination,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Trip Type",
                        name: "trip_type",
                        type: "select",
                        value: formData.trip_type,
                        onChange: handleChange,
                        options: [
                            {
                                value: 'Single Trip',
                                label: 'Single Trip'
                            },
                            {
                                value: 'Multi Trip',
                                label: 'Multi Trip'
                            }
                        ],
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Start Date",
                        name: "policy_start_date",
                        type: "date",
                        value: formData.policy_start_date.toISOString().split('T')[0],
                        onChange: handleDateChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "End Date",
                        name: "policy_end_date",
                        type: "date",
                        value: formData.policy_end_date.toISOString().split('T')[0],
                        onChange: handleDateChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: "Policy Document",
                name: "document_url",
                bucket: "policy-documents",
                onUploadComplete: (url)=>setFormData((prev)=>({
                            ...prev,
                            document_url: url
                        }))
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end space-x-4 pt-4 border-t",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "px-4 py-2 border rounded-lg hover:bg-gray-50",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center",
                        children: [
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 mr-2 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                                lineNumber: 116,
                                columnNumber: 32
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                                lineNumber: 116,
                                columnNumber: 84
                            }, this),
                            "Save Policy"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/forms/TravelPolicyForm.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/forms/CyberPolicyForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CyberPolicyForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FormInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FileUpload.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function CyberPolicyForm({ userId, initialData, onClose, onSuccess }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        policy_number: initialData?.policy_number || '',
        insurer_name: initialData?.insurer_name || '',
        premium_amount: initialData?.premium_amount || 0,
        sum_insured: initialData?.sum_insured || 0,
        cyber_risk_type: initialData?.cyber_risk_type || 'Personal',
        policy_start_date: initialData?.policy_start_date ? new Date(initialData.policy_start_date) : new Date(),
        policy_end_date: initialData?.policy_end_date ? new Date(initialData.policy_end_date) : new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        document_url: initialData?.document_url || ''
    });
    // Auto-calculate end date when start date changes (1 day before same date next year)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (formData.policy_start_date && !initialData) {
            const startDate = new Date(formData.policy_start_date);
            const endDate = new Date(startDate);
            endDate.setFullYear(endDate.getFullYear() + 1);
            endDate.setDate(endDate.getDate() - 1); // 1 day before
            setFormData((prev)=>({
                    ...prev,
                    policy_end_date: endDate
                }));
        }
    }, [
        formData.policy_start_date,
        initialData
    ]);
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'number' ? Number(value) : value
            }));
    };
    const handleDateChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: new Date(value)
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addCyberPolicy"])({
                ...formData,
                user_id: userId,
                status: 'Active'
            });
            onSuccess();
        } catch (error) {
            console.error('Error saving cyber policy:', error);
            setErrors({
                submit: 'Failed to save policy'
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-gray-900",
                children: "Cyber Insurance Details"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Policy Number",
                        name: "policy_number",
                        value: formData.policy_number,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Policy Number",
                        name: "policy_number",
                        value: formData.policy_number,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Insurer Name",
                        name: "insurer_name",
                        type: "select",
                        value: formData.insurer_name,
                        onChange: handleChange,
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INSURANCE_COMPANIES"].map((c)=>({
                                value: c,
                                label: c
                            })),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Premium Amount (₹)",
                        name: "premium_amount",
                        type: "number",
                        value: formData.premium_amount,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Sum Insured (₹)",
                        name: "sum_insured",
                        type: "number",
                        value: formData.sum_insured,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Risk Type",
                        name: "cyber_risk_type",
                        type: "select",
                        value: formData.cyber_risk_type,
                        onChange: handleChange,
                        options: [
                            {
                                value: 'Personal',
                                label: 'Personal'
                            },
                            {
                                value: 'Business',
                                label: 'Business'
                            }
                        ],
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Start Date",
                        name: "policy_start_date",
                        type: "date",
                        value: formData.policy_start_date.toISOString().split('T')[0],
                        onChange: handleDateChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "End Date",
                        name: "policy_end_date",
                        type: "date",
                        value: formData.policy_end_date.toISOString().split('T')[0],
                        onChange: handleDateChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                label: "Policy Document",
                name: "document_url",
                bucket: "policy-documents",
                onUploadComplete: (url)=>setFormData((prev)=>({
                            ...prev,
                            document_url: url
                        }))
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end space-x-4 pt-4 border-t",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "px-4 py-2 border rounded-lg hover:bg-gray-50",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center",
                        children: [
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 mr-2 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                                lineNumber: 117,
                                columnNumber: 32
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                                lineNumber: 117,
                                columnNumber: 84
                            }, this),
                            "Save Policy"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/forms/CyberPolicyForm.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/policies/AddPolicyModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddPolicyModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$MotorPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/MotorPolicyForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$HealthPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/HealthPolicyForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$CommercialPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$LifePolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/LifePolicyForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$TravelPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/TravelPolicyForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$CyberPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/CyberPolicyForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function AddPolicyModal({ isOpen, onClose, userId, onSuccess, initialType = undefined }) {
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialType);
    // Reset selected type when modal opens/closes or initialType changes
    __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (isOpen) {
            setSelectedType(initialType);
        }
    }, [
        isOpen,
        initialType
    ]);
    if (!isOpen) return null;
    const handleSuccess = ()=>{
        onSuccess();
        onClose();
        setSelectedType(undefined);
    };
    const renderForm = ()=>{
        switch(selectedType){
            case 'Motor':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$MotorPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    userId: userId,
                    onClose: onClose,
                    onSuccess: handleSuccess
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                    lineNumber: 44,
                    columnNumber: 24
                }, this);
            case 'Health':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$HealthPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    userId: userId,
                    onClose: onClose,
                    onSuccess: handleSuccess
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                    lineNumber: 46,
                    columnNumber: 24
                }, this);
            case 'Commercial':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$CommercialPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    userId: userId,
                    onClose: onClose,
                    onSuccess: handleSuccess
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                    lineNumber: 48,
                    columnNumber: 24
                }, this);
            case 'Life':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$LifePolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    userId: userId,
                    onClose: onClose,
                    onSuccess: handleSuccess
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                    lineNumber: 50,
                    columnNumber: 24
                }, this);
            case 'Travel':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$TravelPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    userId: userId,
                    onClose: onClose,
                    onSuccess: handleSuccess
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                    lineNumber: 52,
                    columnNumber: 24
                }, this);
            case 'Cyber':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$CyberPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    userId: userId,
                    onClose: onClose,
                    onSuccess: handleSuccess
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                    lineNumber: 54,
                    columnNumber: 24
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
            children: selectedType ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedType(undefined),
                                        className: "text-sm text-gray-500 hover:text-gray-900",
                                        children: "Select Type"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 67,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-900",
                                        children: [
                                            "Add ",
                                            selectedType,
                                            " Policy"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 74,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                lineNumber: 66,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                        lineNumber: 65,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: renderForm()
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                        lineNumber: 80,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                lineNumber: 64,
                columnNumber: 21
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: "Add New Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 mt-1",
                                        children: "Select the type of policy you want to add"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 89,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                lineNumber: 87,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                lineNumber: 91,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                        lineNumber: 86,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedType('Motor'),
                                className: "flex items-center p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 101,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 group-hover:text-blue-700",
                                                children: "Motor Insurance"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 105,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Car, Bike, and other vehicle policies"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 106,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 104,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-5 h-5 text-gray-300 ml-auto group-hover:text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 108,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                lineNumber: 97,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedType('Health'),
                                className: "flex items-center p-4 border border-gray-200 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all group text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-pink-100 text-pink-600 rounded-lg group-hover:bg-pink-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                            lineNumber: 116,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 115,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 group-hover:text-pink-700",
                                                children: "Health Insurance"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 119,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Individual and Family Floater plans"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 120,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 118,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-5 h-5 text-gray-300 ml-auto group-hover:text-pink-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 122,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                lineNumber: 111,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedType('Commercial'),
                                className: "flex items-center p-4 border border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all group text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-purple-100 text-purple-600 rounded-lg group-hover:bg-purple-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 129,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 group-hover:text-purple-700",
                                                children: "Commercial Insurance"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 133,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Fire, Marine, and Liability policies"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 134,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 132,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-5 h-5 text-gray-300 ml-auto group-hover:text-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 136,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                lineNumber: 125,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedType('Life'),
                                className: "flex items-center p-4 border border-gray-200 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all group text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-pink-100 text-pink-600 rounded-lg group-hover:bg-pink-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                            lineNumber: 144,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 143,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 group-hover:text-pink-700",
                                                children: "Life Insurance"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 147,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Term life and endowment plans"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 148,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 146,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-5 h-5 text-gray-300 ml-auto group-hover:text-pink-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 150,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                lineNumber: 139,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedType('Travel'),
                                className: "flex items-center p-4 border border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all group text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-orange-100 text-orange-600 rounded-lg group-hover:bg-orange-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                            lineNumber: 158,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 157,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 group-hover:text-orange-700",
                                                children: "Travel Insurance"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 161,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Domestic and International travel"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 162,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 160,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-5 h-5 text-gray-300 ml-auto group-hover:text-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 164,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                lineNumber: 153,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedType('Cyber'),
                                className: "flex items-center p-4 border border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-indigo-100 text-indigo-600 rounded-lg group-hover:bg-indigo-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                            lineNumber: 172,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 171,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 group-hover:text-indigo-700",
                                                children: "Cyber Insurance"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 175,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Protection against digital threats"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                                lineNumber: 176,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 174,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-5 h-5 text-gray-300 ml-auto group-hover:text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                        lineNumber: 178,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                                lineNumber: 167,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                        lineNumber: 96,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
                lineNumber: 85,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
            lineNumber: 62,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneSingleView/components/policies/AddPolicyModal.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/policies/EditPolicyModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditPolicyModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$MotorPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/MotorPolicyForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$HealthPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/HealthPolicyForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$CommercialPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/CommercialPolicyForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$TravelPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/TravelPolicyForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$LifePolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/LifePolicyForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$CyberPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/CyberPolicyForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function EditPolicyModal({ isOpen, onClose, policy, onSuccess }) {
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen || !policy) return null;
    const policyType = policy.type || 'Motor';
    const handleSuccess = ()=>{
        if (onSuccess) onSuccess();
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-900",
                            children: [
                                "Edit ",
                                policyType,
                                " Policy"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                            disabled: saving,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto px-6 py-4",
                    children: [
                        policyType === 'Motor' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$MotorPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            userId: policy.user_id,
                            onSuccess: handleSuccess,
                            onClose: onClose,
                            initialData: policy
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, this),
                        policyType === 'Health' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$HealthPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            userId: policy.user_id,
                            onSuccess: handleSuccess,
                            onClose: onClose,
                            initialData: policy
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                            lineNumber: 57,
                            columnNumber: 25
                        }, this),
                        policyType === 'Commercial' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$CommercialPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            userId: policy.user_id,
                            onSuccess: handleSuccess,
                            onClose: onClose,
                            initialData: policy
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                            lineNumber: 65,
                            columnNumber: 25
                        }, this),
                        policyType === 'Travel' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$TravelPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            userId: policy.user_id,
                            onSuccess: handleSuccess,
                            onClose: onClose,
                            initialData: policy
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                            lineNumber: 73,
                            columnNumber: 25
                        }, this),
                        policyType === 'Life' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$LifePolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            userId: policy.user_id,
                            onSuccess: handleSuccess,
                            onClose: onClose,
                            initialData: policy
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                            lineNumber: 81,
                            columnNumber: 25
                        }, this),
                        policyType === 'Cyber' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$CyberPolicyForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            userId: policy.user_id,
                            onSuccess: handleSuccess,
                            onClose: onClose,
                            initialData: policy
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                            lineNumber: 89,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneSingleView/components/policies/EditPolicyModal.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/app/(customer)/policies/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PoliciesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/hooks/useAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$policies$2f$AddPolicyModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/policies/AddPolicyModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$policies$2f$EditPolicyModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/policies/EditPolicyModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function PoliciesContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialQuery = searchParams.get('search') || '';
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialQuery);
    const [allPolicies, setAllPolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPolicy, setSelectedPolicy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const refreshData = async ()=>{
        if (!user) return;
        setLoading(true);
        try {
            const [motor, gmc, commercial] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserMotorPolicies"])(user.id),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserHealthPolicies"])(user.id),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserCommercialPolicies"])(user.id)
            ]);
            // Add type identifier to each policy
            const motorTyped = motor.map((p)=>({
                    ...p,
                    type: 'Motor'
                }));
            const gmcTyped = gmc.map((p)=>({
                    ...p,
                    type: 'Health'
                }));
            const commercialTyped = commercial.map((p)=>({
                    ...p,
                    type: 'Commercial'
                }));
            setAllPolicies([
                ...motorTyped,
                ...gmcTyped,
                ...commercialTyped
            ]);
        } catch (error) {
            console.error('Error reloading policies:', error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user) {
            refreshData();
        }
    }, [
        user
    ]);
    // Filter logic
    const filteredPolicies = allPolicies.filter((policy)=>{
        const matchesSearch = searchQuery === '' || policy.policy_number.toLowerCase().includes(searchQuery.toLowerCase()) || policy.insurer_name.toLowerCase().includes(searchQuery.toLowerCase()) || 'vehicle_number' in policy && policy.vehicle_number.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                lineNumber: 72,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
            lineNumber: 71,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "All Policies"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "Manage and view all your insurance policies"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search policies...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsModalOpen(true),
                                className: "btn btn-primary flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, this),
                                    "Add Policy"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            filteredPolicies.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 bg-white rounded-xl border border-gray-200 border-dashed",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-6 h-6 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                            lineNumber: 109,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                        lineNumber: 108,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium text-gray-900",
                        children: "No policies found"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                        lineNumber: 111,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mt-1",
                        children: "Try adjusting your search or add a new policy"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                        lineNumber: 112,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                lineNumber: 107,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: filteredPolicies.map((policy)=>{
                    const isMotor = policy.type === 'Motor';
                    const isHealth = policy.type === 'Health';
                    const Icon = isMotor ? __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"] : isHealth ? __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"] : __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"];
                    const colorClass = isMotor ? 'text-blue-600 bg-blue-50' : isHealth ? 'text-green-600 bg-green-50' : 'text-purple-600 bg-purple-50';
                    const expiryDate = new Date(isHealth || policy.type === 'Commercial' ? policy.expiry_date : policy.policy_end_date);
                    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(expiryDate);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all p-5 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setSelectedPolicy(policy);
                                    setIsEditModalOpen(true);
                                },
                                className: "absolute top-4 right-4 p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors z-10",
                                title: "Edit Policy",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                lineNumber: 130,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/policies/${isMotor ? 'motor' : isHealth ? 'health' : 'commercial'}/${policy.id}`,
                                className: "block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-4 pr-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-2 rounded-lg ${colorClass}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2.5 py-0.5 rounded-full text-xs font-medium ${status === 'Active' ? 'bg-green-100 text-green-800' : status === 'Expiring Soon' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`,
                                                children: status
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-gray-900 mb-1",
                                        children: policy.insurer_name
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mb-1",
                                        children: policy.policy_number
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-medium text-gray-600 mb-3",
                                        children: [
                                            policy.type,
                                            " Insurance"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500",
                                                        children: "Premium"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.premium_amount)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500",
                                                        children: "Valid Till"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: expiryDate.toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 41
                                            }, this),
                                            isMotor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500",
                                                        children: "Vehicle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: policy.vehicle_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                                lineNumber: 143,
                                columnNumber: 33
                            }, this)
                        ]
                    }, policy.id, true, {
                        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                        lineNumber: 125,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                lineNumber: 115,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$policies$2f$AddPolicyModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                userId: user?.id || '',
                onSuccess: refreshData
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$policies$2f$EditPolicyModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isEditModalOpen,
                onClose: ()=>{
                    setIsEditModalOpen(false);
                    setSelectedPolicy(null);
                },
                policy: selectedPolicy,
                onSuccess: refreshData
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
                lineNumber: 193,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
function PoliciesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
            lineNumber: 208,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PoliciesContent, {}, void 0, false, {
            fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
            lineNumber: 209,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneSingleView/app/(customer)/policies/page.tsx",
        lineNumber: 208,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=OneSingleView_397bc39a._.js.map