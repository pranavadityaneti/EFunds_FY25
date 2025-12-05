module.exports = [
"[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClaimsOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
;
function ClaimsOverview({ activeCount, settledCount, rejectedCount }) {
    const total = activeCount + settledCount + rejectedCount;
    const settledPercentage = total > 0 ? Math.round(settledCount / total * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl p-4 shadow-soft border border-gray-100 h-full flex flex-col justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-gray-900 font-bold text-sm",
                        children: "Claims Overview"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/claims",
                        className: "text-primary-600 text-xs font-bold hover:underline flex items-center",
                        children: [
                            "View All ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-3 h-3 ml-1"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                lineNumber: 22,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-orange-50 rounded-xl p-2.5 text-center border border-orange-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 mx-auto bg-white rounded-full flex items-center justify-center mb-1 shadow-sm text-orange-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold text-gray-900 leading-none mb-1",
                                children: activeCount
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-bold text-orange-600 uppercase tracking-wide",
                                children: "In Progress"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-50 rounded-xl p-2.5 text-center border border-green-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 mx-auto bg-white rounded-full flex items-center justify-center mb-1 shadow-sm text-green-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold text-gray-900 leading-none mb-1",
                                children: settledCount
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-bold text-green-600 uppercase tracking-wide",
                                children: "Settled"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 rounded-xl p-2.5 text-center border border-red-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 mx-auto bg-white rounded-full flex items-center justify-center mb-1 shadow-sm text-red-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold text-gray-900 leading-none mb-1",
                                children: rejectedCount
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-bold text-red-600 uppercase tracking-wide",
                                children: "Rejected"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 border-t border-dashed border-gray-200 pt-2.5 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 font-medium mb-2",
                        children: "No active claims"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/claims?action=new",
                        className: "block w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-primary-600/20 transition-all active:scale-95",
                        children: "Register a New Claim"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdvertisingBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
'use client';
;
;
function AdvertisingBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-lg shadow-blue-500/25 relative overflow-hidden transition-transform hover:-translate-y-1 h-full flex flex-col justify-center",
        style: {
            width: 'calc(100% + 96px)',
            maxWidth: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-white/20 rounded-lg backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                                    className: "w-4 h-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                                    lineNumber: 12,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                                lineNumber: 11,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold uppercase tracking-wider text-blue-100 bg-white/10 px-2 py-1 rounded-full",
                                children: "Partner Offer"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-2xl mb-3 leading-tight",
                        children: "Your imaging exams have never been so uncomplicated."
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-white text-blue-700 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center hover:bg-blue-50 transition-colors shadow-sm",
                            children: [
                                "Book Now ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4 ml-2"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                                    lineNumber: 23,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-48 h-48 bg-blue-500/30 rounded-full blur-2xl -ml-12 -mb-12"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute right-0 bottom-0 opacity-20",
                width: "200",
                height: "200",
                viewBox: "0 0 200 200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 200 C 50 200 100 150 100 100 C 100 50 150 0 200 0",
                    stroke: "white",
                    strokeWidth: "2",
                    fill: "none",
                    strokeDasharray: "5,5"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsDonutChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const COLORS = {
    motor: '#3B82F6',
    health: '#8b5cf6',
    travel: '#06B6D4',
    commercial: '#F59E0B',
    life: '#EC4899',
    cyber: '#10B981'
};
const LABELS = {
    motor: 'Motor',
    health: 'Health',
    travel: 'Travel',
    commercial: 'Commercial',
    life: 'Life',
    cyber: 'Cyber'
};
function AnalyticsDonutChart({ data }) {
    const chartData = [
        {
            name: LABELS.motor,
            value: data.motor,
            color: COLORS.motor
        },
        {
            name: LABELS.health,
            value: data.health,
            color: COLORS.health
        },
        {
            name: LABELS.travel,
            value: data.travel,
            color: COLORS.travel
        },
        {
            name: LABELS.commercial,
            value: data.commercial,
            color: COLORS.commercial
        },
        {
            name: LABELS.life,
            value: data.life,
            color: COLORS.life
        },
        {
            name: LABELS.cyber,
            value: data.cyber,
            color: COLORS.cyber
        }
    ].filter((item)=>item.value > 0);
    const totalValue = chartData.reduce((acc, item)=>acc + item.value, 0);
    if (chartData.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-white rounded-2xl p-6 shadow-soft border border-gray-100 flex flex-col items-center justify-center text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl",
                        children: "📊"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "No data available"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-white rounded-2xl p-6 shadow-soft border border-gray-100 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-gray-900 font-bold text-base mb-6",
                children: "Source of Premium"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative min-h-[200px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: "100%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                    data: chartData,
                                    cx: "50%",
                                    cy: "50%",
                                    innerRadius: 60,
                                    outerRadius: 80,
                                    paddingAngle: 5,
                                    dataKey: "value",
                                    cornerRadius: 6,
                                    stroke: "none",
                                    children: chartData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                                            fill: entry.color
                                        }, `cell-${index}`, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                                            lineNumber: 71,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    formatter: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(value),
                                    contentStyle: {
                                        backgroundColor: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        padding: '8px 12px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    },
                                    itemStyle: {
                                        color: '#1F293B',
                                        fontSize: '12px',
                                        fontWeight: 600
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "100%"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium text-gray-400 uppercase tracking-wider",
                                children: "Distribution"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid grid-cols-2 gap-x-4 gap-y-2",
                children: chartData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded-full flex-shrink-0",
                                style: {
                                    backgroundColor: item.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600 font-medium truncate",
                                children: [
                                    item.name,
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-gray-900 ml-auto",
                                children: [
                                    (item.value / totalValue * 100).toFixed(0),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                                lineNumber: 101,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PolicyRenewalReminder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$umbrella$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Umbrella$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/umbrella.js [app-ssr] (ecmascript) <export default as Umbrella>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function PolicyRenewalReminder({ motorPolicies, healthPolicies, commercialPolicies, travelPolicies = [], lifePolicies = [], cyberPolicies = [] }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Find ALL policies expiring soon
    const expiringPolicies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const allPolicies = [
            ...motorPolicies.map((p)=>({
                    ...p,
                    type: 'Motor'
                })),
            ...healthPolicies.map((p)=>({
                    ...p,
                    type: 'Health'
                })),
            ...commercialPolicies.map((p)=>({
                    ...p,
                    type: 'Commercial'
                })),
            ...travelPolicies.map((p)=>({
                    ...p,
                    type: 'Travel'
                })),
            ...lifePolicies.map((p)=>({
                    ...p,
                    type: 'Life'
                })),
            ...cyberPolicies.map((p)=>({
                    ...p,
                    type: 'Cyber'
                }))
        ];
        // Filter policies that are expiring soon
        const filtered = allPolicies.filter((p)=>{
            const isMotor = p.type === 'Motor';
            const isHealth = p.type === 'Health';
            const endDateValue = isMotor ? p.policy_end_date : isHealth ? p.expiry_date : p.expiry_date;
            const endDate = endDateValue ? new Date(endDateValue) : null;
            const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(endDate);
            return status === 'Expiring Soon';
        });
        // Sort by expiry date to get the nearest ones first
        filtered.sort((a, b)=>{
            const isMotorA = a.type === 'Motor';
            const isHealthA = a.type === 'Health';
            const isMotorB = b.type === 'Motor';
            const isHealthB = b.type === 'Health';
            const aEndDate = isMotorA ? a.policy_end_date : isHealthA ? a.expiry_date : a.expiry_date;
            const bEndDate = isMotorB ? b.policy_end_date : isHealthB ? b.expiry_date : b.expiry_date;
            const aTime = aEndDate ? new Date(aEndDate).getTime() : 0;
            const bTime = bEndDate ? new Date(bEndDate).getTime() : 0;
            return aTime - bTime;
        });
        return filtered;
    }, [
        motorPolicies,
        healthPolicies,
        commercialPolicies,
        travelPolicies,
        lifePolicies,
        cyberPolicies
    ]);
    // Auto-swipe every 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (expiringPolicies.length <= 1) return;
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>(prev + 1) % expiringPolicies.length);
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        expiringPolicies.length
    ]);
    const handlePrevious = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + expiringPolicies.length) % expiringPolicies.length);
    };
    const handleNext = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % expiringPolicies.length);
    };
    if (expiringPolicies.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl border border-gray-200 shadow-soft p-6 h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-green-50 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "w-5 h-5 text-green-600"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-900",
                            children: "Renewal Reminders"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                            lineNumber: 101,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    className: "w-8 h-8 text-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 105,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-900 font-semibold mb-1",
                                children: "All policies are up to date!"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 108,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "No upcoming renewals in the next 30 days."
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                        lineNumber: 104,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
            lineNumber: 96,
            columnNumber: 13
        }, this);
    }
    const currentPolicy = expiringPolicies[currentIndex];
    // Calculate days until expiry for current policy
    const isMotor = currentPolicy.type === 'Motor';
    const isHealth = currentPolicy.type === 'Health';
    const endDateValue = isMotor ? currentPolicy.policy_end_date : isHealth ? currentPolicy.expiry_date : currentPolicy.expiry_date;
    const endDate = endDateValue ? new Date(endDateValue) : null;
    const today = new Date();
    const daysUntilExpiry = endDate ? Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) : 0;
    // Get policy-specific details
    const vehicleNumber = isMotor ? currentPolicy.vehicle_number : null;
    const sumInsured = isHealth ? currentPolicy.sum_insured : currentPolicy.type === 'Life' ? currentPolicy.sum_insured : null;
    const getIcon = ()=>{
        switch(currentPolicy.type){
            case 'Motor':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                    className: "w-5 h-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                    lineNumber: 137,
                    columnNumber: 24
                }, this);
            case 'Health':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    className: "w-5 h-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                    lineNumber: 139,
                    columnNumber: 24
                }, this);
            case 'Life':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$umbrella$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Umbrella$3e$__["Umbrella"], {
                    className: "w-5 h-5 text-pink-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                    lineNumber: 141,
                    columnNumber: 24
                }, this);
            case 'Commercial':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    className: "w-5 h-5 text-orange-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                    lineNumber: 143,
                    columnNumber: 24
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: "w-5 h-5 text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                    lineNumber: 145,
                    columnNumber: 24
                }, this);
        }
    };
    const handleRenew = ()=>{
        const typeSlug = currentPolicy.type.toLowerCase();
        router.push(`/policies/${typeSlug}/${currentPolicy.id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border border-gray-200 shadow-soft p-6 h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-orange-50 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    className: "w-5 h-5 text-orange-600"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-gray-900",
                                children: "Upcoming Renewals"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 162,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this),
                    expiringPolicies.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePrevious,
                                className: "p-1 hover:bg-gray-100 rounded transition-colors",
                                "aria-label": "Previous policy",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-4 h-4 text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                    lineNumber: 171,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 font-medium",
                                children: [
                                    currentIndex + 1,
                                    " / ",
                                    expiringPolicies.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 173,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNext,
                                className: "p-1 hover:bg-gray-100 rounded transition-colors",
                                "aria-label": "Next policy",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-4 h-4 text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                    lineNumber: 181,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 176,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                        lineNumber: 165,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px bg-gray-200 -mx-6 mb-4"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                lineNumber: 187,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "break-words",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 text-sm leading-relaxed",
                            children: [
                                "Your ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-gray-900",
                                    children: currentPolicy.type
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                    lineNumber: 194,
                                    columnNumber: 30
                                }, this),
                                " policy",
                                vehicleNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block sm:inline",
                                    children: [
                                        ' ',
                                        "for ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-primary-600",
                                            children: vehicleNumber
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                            lineNumber: 197,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                    lineNumber: 196,
                                    columnNumber: 29
                                }, this),
                                sumInsured && !vehicleNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block sm:inline",
                                    children: [
                                        ' ',
                                        "for ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-primary-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(sumInsured)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                            lineNumber: 202,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                    lineNumber: 201,
                                    columnNumber: 29
                                }, this),
                                ' ',
                                "expires in ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-orange-600",
                                    children: [
                                        daysUntilExpiry,
                                        " days"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                    lineNumber: 205,
                                    columnNumber: 41
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                            lineNumber: 193,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                        lineNumber: 192,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 font-medium",
                                children: "Status:"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 211,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-orange-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                        lineNumber: 213,
                                        columnNumber: 25
                                    }, this),
                                    "Expiring Soon"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-1.5 bg-gray-50 rounded",
                                        children: getIcon()
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                        lineNumber: 221,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Policy Type"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                                lineNumber: 225,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-900",
                                                children: currentPolicy.type
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                                lineNumber: 226,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                        lineNumber: 224,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Insurer"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                        lineNumber: 231,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: currentPolicy.insurer_name
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                        lineNumber: 232,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 230,
                                columnNumber: 21
                            }, this),
                            sumInsured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Sum Insured"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                        lineNumber: 237,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(sumInsured)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                        lineNumber: 238,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this),
                            vehicleNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Vehicle Number"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                        lineNumber: 244,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-900",
                                        children: vehicleNumber
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                        lineNumber: 245,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 243,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                        lineNumber: 219,
                        columnNumber: 17
                    }, this),
                    expiringPolicies.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-1.5 pt-2",
                        children: expiringPolicies.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentIndex(index),
                                className: `h-1.5 rounded-full transition-all ${index === currentIndex ? 'w-6 bg-primary-600' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`,
                                "aria-label": `Go to policy ${index + 1}`
                            }, index, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                                lineNumber: 254,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                        lineNumber: 252,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                lineNumber: 190,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleRenew,
                className: "mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-sm font-medium",
                children: [
                    "Renew Now",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                        lineNumber: 274,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx",
        lineNumber: 155,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/dashboard/FlipCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlipCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function FlipCard({ title, icon: Icon, activeCount, expiringSoonCount, colorClass, onClick }) {
    const totalPolicies = activeCount + expiringSoonCount;
    // Map color names to Tailwind classes
    const colorMap = {
        blue: {
            bg: 'bg-blue-50',
            text: 'text-blue-600',
            hover: 'group-hover:bg-blue-100',
            border: 'border-blue-100'
        },
        green: {
            bg: 'bg-green-50',
            text: 'text-green-600',
            hover: 'group-hover:bg-green-100',
            border: 'border-green-100'
        },
        purple: {
            bg: 'bg-purple-50',
            text: 'text-purple-600',
            hover: 'group-hover:bg-purple-100',
            border: 'border-purple-100'
        },
        orange: {
            bg: 'bg-orange-50',
            text: 'text-orange-600',
            hover: 'group-hover:bg-orange-100',
            border: 'border-orange-100'
        },
        pink: {
            bg: 'bg-pink-50',
            text: 'text-pink-600',
            hover: 'group-hover:bg-pink-100',
            border: 'border-pink-100'
        },
        cyan: {
            bg: 'bg-cyan-50',
            text: 'text-cyan-600',
            hover: 'group-hover:bg-cyan-100',
            border: 'border-cyan-100'
        }
    };
    const colors = colorMap[colorClass] || colorMap['blue'];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "group h-32 w-full perspective-1000 cursor-pointer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full w-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg bg-white border ${colors.border} flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:shadow-xl`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-3 rounded-full ${colors.bg} bg-opacity-10 mb-3`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: `w-8 h-8 ${colors.text}`
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/FlipCard.tsx",
                                lineNumber: 38,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/FlipCard.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-bold text-gray-700 text-center",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/FlipCard.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/FlipCard.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl font-bold mb-1",
                            children: totalPolicies
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/FlipCard.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-medium text-gray-300 uppercase tracking-wider",
                            children: "Total Policies"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/FlipCard.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/FlipCard.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneSingleView/components/dashboard/FlipCard.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneSingleView/components/dashboard/FlipCard.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MonthlyActivityChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/filter.js [app-ssr] (ecmascript) <export default as Filter>");
'use client';
;
;
;
;
;
function MonthlyActivityChart({ data: initialData, allPolicies }) {
    const [metric, setMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('count');
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    // Process data based on filter and metric
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        const processedData = months.map((month)=>({
                name: month,
                Active: 0,
                Expiring: 0,
                Expired: 0
            }));
        const filteredPolicies = filterType === 'All' ? allPolicies : allPolicies.filter((p)=>{
            const type = p.vehicle_number ? 'Motor' : p.no_of_lives !== undefined ? 'Health' : p.lob_type || 'Other';
            return type === filterType;
        });
        filteredPolicies.forEach((policy)=>{
            const date = new Date(policy.created_at); // Using creation date for distribution
            const monthIndex = date.getMonth();
            const status = policy.status || 'Active'; // Default to Active if status missing
            // Map status to chart categories
            let category = 'Active';
            if (status === 'Expiring Soon') category = 'Expiring';
            else if (status === 'Expired') category = 'Expired';
            else category = 'Active';
            if (metric === 'count') {
                processedData[monthIndex][category] += 1;
            } else {
                processedData[monthIndex][category] += Number(policy.premium_amount) || 0;
            }
        });
        return processedData;
    }, [
        allPolicies,
        metric,
        filterType
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl shadow-soft border border-gray-100 h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-gray-900",
                                children: "Monthly Activity"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "Policy status distribution over time"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 p-1 rounded-lg flex text-xs font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMetric('count'),
                                        className: `px-3 py-1.5 rounded-md transition-all ${metric === 'count' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`,
                                        children: "Count"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMetric('premium'),
                                        className: `px-3 py-1.5 rounded-md transition-all ${metric === 'premium' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`,
                                        children: "Premium"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: filterType,
                                        onChange: (e)=>setFilterType(e.target.value),
                                        className: "pl-3 pr-8 py-1.5 text-xs font-medium bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none appearance-none cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "All",
                                                children: "All Types"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                                lineNumber: 93,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Motor",
                                                children: "Motor"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                                lineNumber: 94,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Health",
                                                children: "Health"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                                lineNumber: 95,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Travel",
                                                children: "Travel"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                                lineNumber: 96,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Commercial",
                                                children: "Commercial"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                                lineNumber: 97,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Life",
                                                children: "Life"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                                lineNumber: 98,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Cyber",
                                                children: "Cyber"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                                lineNumber: 99,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-3 h-3 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                        lineNumber: 101,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: chartData,
                        margin: {
                            top: 10,
                            right: 10,
                            left: -20,
                            bottom: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                vertical: false,
                                stroke: "#f3f4f6"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "name",
                                axisLine: false,
                                tickLine: false,
                                tick: {
                                    fill: '#6b7280',
                                    fontSize: 11
                                },
                                dy: 10
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                axisLine: false,
                                tickLine: false,
                                tick: {
                                    fill: '#6b7280',
                                    fontSize: 11
                                },
                                tickFormatter: (value)=>metric === 'premium' ? `₹${value / 1000}k` : value
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                cursor: {
                                    fill: '#f9fafb'
                                },
                                contentStyle: {
                                    backgroundColor: '#fff',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    fontSize: '12px'
                                },
                                formatter: (value)=>[
                                        metric === 'premium' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(value) : value,
                                        ''
                                    ]
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                                iconType: "circle",
                                wrapperStyle: {
                                    fontSize: '12px',
                                    paddingTop: '20px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "Active",
                                stackId: "a",
                                fill: "#22c55e",
                                radius: [
                                    0,
                                    0,
                                    4,
                                    4
                                ],
                                barSize: 20
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 141,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "Expiring",
                                stackId: "a",
                                fill: "#f97316",
                                radius: [
                                    0,
                                    0,
                                    0,
                                    0
                                ],
                                barSize: 20
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 142,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "Expired",
                                stackId: "a",
                                fill: "#ef4444",
                                radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ],
                                barSize: 20
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                                lineNumber: 143,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                        lineNumber: 108,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                    lineNumber: 107,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProtectFamilyCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
function ProtectFamilyCard({ onGetQuote }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 rounded-2xl shadow-card border border-gray-100 h-full flex flex-col justify-between relative overflow-hidden group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                                    lineNumber: 17,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gray-100 text-gray-600 text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide uppercase",
                                children: "Recommended"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-bold text-gray-900 mb-1.5",
                        children: "Protect your Family"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 leading-relaxed",
                        children: "Get comprehensive health coverage with cashless claims."
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end justify-between mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 rounded-lg px-2.5 py-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5",
                                children: "Starting from"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-gray-900",
                                children: [
                                    "₹500",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 font-medium",
                                        children: "/mo"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                                        lineNumber: 33,
                                        columnNumber: 74
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onGetQuote,
                        className: "flex items-center text-primary-600 text-xs font-bold hover:text-primary-700 transition-colors group-hover:translate-x-1 duration-300",
                        children: [
                            "Get a Quote",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-3.5 h-3.5 ml-1"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-8 -right-8 w-24 h-24 bg-red-50 rounded-full opacity-50 blur-2xl group-hover:opacity-100 transition-opacity duration-500"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoverageGapCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
function CoverageGapCard({ missingPolicyType, onExplore }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl shadow-card border border-blue-100 h-full flex flex-col justify-between relative overflow-hidden group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                                    lineNumber: 17,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-white/80 text-blue-700 text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide uppercase shadow-sm",
                                children: "Insight"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-bold text-gray-900 mb-1.5",
                        children: "Recommended for You"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600 leading-relaxed",
                        children: [
                            "You currently don't have a ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-blue-700",
                                children: missingPolicyType
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                                lineNumber: 26,
                                columnNumber: 48
                            }, this),
                            " insurance policy added."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onExplore,
                className: "mt-3 w-full flex items-center justify-center gap-1.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95",
                children: [
                    "Explore Plans",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "w-3.5 h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-4 -right-4 w-20 h-20 bg-indigo-200 rounded-full opacity-30 blur-2xl"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/dashboard/ReportsModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/filter.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
'use client';
;
;
;
function ReportsModal({ isOpen, onClose }) {
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('last_30_days');
    const [policyType, setPolicyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [format, setFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('pdf');
    const [downloading, setDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    const handleDownload = async ()=>{
        setDownloading(true);
        try {
            // Ensure this only runs in the browser (SSR safety)
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
            // Mock data generation based on filters
            const data = undefined;
            const timestamp = undefined;
            const filename = undefined;
        } catch (error) {
            console.error('Error generating report:', error);
        } finally{
            setDownloading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl w-full max-w-md shadow-2xl transform transition-all",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-gray-100 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900",
                            children: "Generate Report"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                lineNumber: 85,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-bold text-gray-700 block",
                                    children: "Date Range"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: "w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: "w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                            lineNumber: 101,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-bold text-gray-700 block",
                                    children: "Policy Type"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: policyType,
                                            onChange: (e)=>setPolicyType(e.target.value),
                                            className: "w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none bg-white transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: "All Policies"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "motor",
                                                    children: "Motor Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "health",
                                                    children: "Health Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "commercial",
                                                    children: "Commercial Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "life",
                                                    children: "Life Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "travel",
                                                    children: "Travel Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "cyber",
                                                    children: "Cyber Insurance"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                            lineNumber: 112,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-bold text-gray-700 block",
                                    children: "Format"
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFormat('pdf'),
                                            className: `py-2.5 px-4 rounded-xl text-sm font-bold border transition-all ${format === 'pdf' ? 'bg-primary-50 border-primary-200 text-primary-700 ring-2 ring-primary-500 ring-offset-1' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`,
                                            children: "PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFormat('excel'),
                                            className: `py-2.5 px-4 rounded-xl text-sm font-bold border transition-all ${format === 'excel' ? 'bg-primary-50 border-primary-200 text-primary-700 ring-2 ring-primary-500 ring-offset-1' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`,
                                            children: "Excel"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                            lineNumber: 145,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFormat('csv'),
                                            className: `py-2.5 px-4 rounded-xl text-sm font-bold border transition-all ${format === 'csv' ? 'bg-primary-50 border-primary-200 text-primary-700 ring-2 ring-primary-500 ring-offset-1' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`,
                                            children: "CSV"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                            lineNumber: 154,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                    lineNumber: 135,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                            lineNumber: 133,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-5 py-2.5 text-sm font-bold text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-xl transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                            lineNumber: 168,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDownload,
                            disabled: downloading,
                            className: "px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary-600/20 transition-all active:scale-95 flex items-center disabled:opacity-70 disabled:cursor-not-allowed",
                            children: downloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                        lineNumber: 181,
                                        columnNumber: 33
                                    }, this),
                                    "Generating..."
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                                        lineNumber: 186,
                                        columnNumber: 33
                                    }, this),
                                    "Download Report"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                            lineNumber: 174,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
                    lineNumber: 167,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
            lineNumber: 81,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneSingleView/components/dashboard/ReportsModal.tsx",
        lineNumber: 80,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PolicyDetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
'use client';
;
;
;
;
function PolicyDetailModal({ isOpen, onClose, title, type, motorPolicies = [], healthPolicies, commercialPolicies = [], travelPolicies = [], lifePolicies = [], cyberPolicies = [] }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // null = no sort
    const [showClaimsInfo, setShowClaimsInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handlePolicyClick = (policyType, id)=>{
        onClose();
        router.push(`/policies/${policyType.toLowerCase()}/${id}`);
    };
    const handleClaimsStatusClick = ()=>{
        setShowClaimsInfo(true);
    };
    const handleViewQuote = (policy)=>{
        // This will open the quote document if available
        if (policy.quote_document_url) {
            window.open(policy.quote_document_url, '_blank');
        } else {
            alert('No quote document available for this policy');
        }
    };
    const renderPolicyRow = (policy, policyType)=>{
        const getPolicyDates = ()=>{
            if ('policy_end_date' in policy) {
                return {
                    start: policy.policy_start_date,
                    end: policy.policy_end_date
                };
            }
            return {
                start: policy.policy_start_date,
                end: policy.expiry_date
            };
        };
        const dates = getPolicyDates();
        const premium = Number(policy.premium_amount);
        // Determine primary field based on policy type
        let primaryField = policy.policy_number;
        if (policyType === 'Motor') {
            primaryField = policy.vehicle_number;
        } else if (policyType === 'Health') {
            primaryField = policy.company_name || 'N/A';
        } else if (policyType === 'Commercial') {
            primaryField = policy.company_name || policy.policy_holder_name || 'N/A';
        } else if ([
            'Travel',
            'Life',
            'Cyber'
        ].includes(policyType)) {
            if (policyType === 'Travel') primaryField = policy.destination || 'Travel Policy';
            if (policyType === 'Life') primaryField = policy.nominee_name || 'Life Policy';
            if (policyType === 'Cyber') primaryField = policy.cyber_risk_type || 'Cyber Policy';
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            className: "hover:bg-gray-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-4 py-3 text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handlePolicyClick(policyType, policy.id),
                        className: "text-primary-600 hover:text-primary-700 font-semibold hover:underline text-left",
                        children: primaryField
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-4 py-3 text-sm text-gray-900",
                    children: policy.policy_number
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 98,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-4 py-3 text-sm text-gray-900",
                    children: policy.insurer_name
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 99,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-4 py-3 text-sm text-gray-600",
                    children: policyType
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 100,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-4 py-3 text-sm text-gray-900 font-semibold",
                    children: [
                        "₹",
                        premium.toLocaleString()
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 101,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-4 py-3 text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `px-2 py-1 rounded-full text-xs font-semibold ${policy.status === 'Active' ? 'bg-green-100 text-green-700' : policy.status === 'Expiring Soon' ? 'bg-orange-100 text-orange-700' : policy.status === 'Expired' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`,
                        children: policy.status
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-4 py-3 text-sm text-gray-600",
                    children: dates.end ? new Date(dates.end).toLocaleDateString() : 'N/A'
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this),
                type === 'expiring' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-4 py-3 text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        onClick: handleClaimsStatusClick,
                        className: "px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-primary-500 outline-none",
                        defaultValue: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 125,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "yes",
                                children: "Yes"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 126,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "no",
                                children: "No"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 127,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                        lineNumber: 120,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 119,
                    columnNumber: 21
                }, this),
                type === 'expiring' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-4 py-3 text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleViewQuote(policy),
                        className: "inline-flex items-center gap-1 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 139,
                                columnNumber: 29
                            }, this),
                            "View Quote"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                        lineNumber: 135,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 134,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: "px-4 py-3 text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            policyType === 'Motor' && policy.rc_docs && policy.rc_docs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: policy.rc_docs[0],
                                target: "_blank",
                                rel: "noopener noreferrer",
                                download: true,
                                className: "inline-flex items-center gap-1 px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                        lineNumber: 157,
                                        columnNumber: 33
                                    }, this),
                                    "RC Copy"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 150,
                                columnNumber: 29
                            }, this),
                            policyType === 'Motor' && policy.previous_policy_docs && policy.previous_policy_docs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: policy.previous_policy_docs[0],
                                target: "_blank",
                                rel: "noopener noreferrer",
                                download: true,
                                className: "inline-flex items-center gap-1 px-2 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                        lineNumber: 170,
                                        columnNumber: 33
                                    }, this),
                                    "Policy Copy"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 163,
                                columnNumber: 29
                            }, this),
                            [
                                'Health',
                                'Commercial',
                                'Travel',
                                'Life',
                                'Cyber'
                            ].includes(policyType) && policy.policy_docs && policy.policy_docs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: policy.policy_docs[0],
                                target: "_blank",
                                rel: "noopener noreferrer",
                                download: true,
                                className: "inline-flex items-center gap-1 px-2 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                        lineNumber: 183,
                                        columnNumber: 33
                                    }, this),
                                    "Policy Doc"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 176,
                                columnNumber: 29
                            }, this),
                            !(policyType === 'Motor' && (policy.rc_docs && policy.rc_docs.length > 0 || policy.previous_policy_docs && policy.previous_policy_docs.length > 0) || [
                                'Health',
                                'Commercial',
                                'Travel',
                                'Life',
                                'Cyber'
                            ].includes(policyType) && policy.policy_docs && policy.policy_docs.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400",
                                children: "No docs"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 190,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                        lineNumber: 147,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 146,
                    columnNumber: 17
                }, this)
            ]
        }, policy.id, true, {
            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
            lineNumber: 89,
            columnNumber: 13
        }, this);
    };
    const allPolicies = [
        ...motorPolicies.map((p)=>({
                ...p,
                policyType: 'Motor'
            })),
        ...healthPolicies.map((p)=>({
                ...p,
                policyType: 'Health'
            })),
        ...commercialPolicies.map((p)=>({
                ...p,
                policyType: 'Commercial'
            })),
        ...travelPolicies.map((p)=>({
                ...p,
                policyType: 'Travel'
            })),
        ...lifePolicies.map((p)=>({
                ...p,
                policyType: 'Life'
            })),
        ...cyberPolicies.map((p)=>({
                ...p,
                policyType: 'Cyber'
            }))
    ];
    // Filter based on type
    const displayPolicies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let filtered = allPolicies;
        if (type === 'expiring') {
            filtered = allPolicies.filter((p)=>p.status === 'Expiring Soon');
        } else if (type === 'expired') {
            filtered = allPolicies.filter((p)=>p.status === 'Expired');
        } else if (type === 'total' || type === 'premium') {
            filtered = allPolicies.filter((p)=>p.status === 'Active' || p.status === 'Expiring Soon');
        }
        // Apply search filter for 'total' type
        if (type === 'total' && searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter((p)=>{
                return p.policy_number?.toLowerCase().includes(query) || p.insurer_name?.toLowerCase().includes(query) || p.vehicle_number?.toLowerCase().includes(query) || p.company_name?.toLowerCase().includes(query) || p.destination?.toLowerCase().includes(query) || p.nominee_name?.toLowerCase().includes(query) || p.policyType?.toLowerCase().includes(query);
            });
        }
        // Apply premium sort for 'premium' type (user-controlled)
        if (type === 'premium' && sortDirection) {
            filtered = [
                ...filtered
            ].sort((a, b)=>{
                const diff = Number(b.premium_amount) - Number(a.premium_amount);
                return sortDirection === 'high' ? diff : -diff;
            });
        }
        return filtered;
    }, [
        allPolicies,
        type,
        searchQuery,
        sortDirection
    ]);
    // Calculate total premium for premium view
    const totalPremium = type === 'premium' ? displayPolicies.reduce((sum, p)=>sum + Number(p.premium_amount), 0) : 0;
    // Return early if modal is not open - AFTER all hooks are called
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl max-w-5xl w-full max-h-[90vh] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-6 border-b border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 261,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-1",
                                            children: [
                                                displayPolicies.length,
                                                " ",
                                                displayPolicies.length === 1 ? 'policy' : 'policies',
                                                type === 'premium' && ` • Total: ₹${totalPremium.toLocaleString()}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 262,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                    lineNumber: 260,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                        lineNumber: 271,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                    lineNumber: 267,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                            lineNumber: 259,
                            columnNumber: 21
                        }, this),
                        type === 'total' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4 border-b border-gray-200 bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                        lineNumber: 279,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search policies (policy number, insurer, vehicle number, etc.)",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                        lineNumber: 280,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 278,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                            lineNumber: 277,
                            columnNumber: 25
                        }, this),
                        type === 'premium' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4 border-b border-gray-200 bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "Sort by Premium:"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                        lineNumber: 295,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSortDirection(sortDirection === 'high' ? null : 'high'),
                                                className: `flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-all ${sortDirection === 'high' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 41
                                                    }, this),
                                                    "High to Low"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                lineNumber: 297,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSortDirection(sortDirection === 'low' ? null : 'low'),
                                                className: `flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg transition-all ${sortDirection === 'low' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Low to High"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                lineNumber: 307,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                        lineNumber: 296,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 294,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                            lineNumber: 293,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-2 bg-gray-50 border-b border-gray-200 flex gap-4 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 325,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 326,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                    lineNumber: 324,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-orange-500"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 329,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "Expiring Soon (<20 days)"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 330,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                    lineNumber: 328,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 333,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "Expired"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 334,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                    lineNumber: 332,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                            lineNumber: 323,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto p-6",
                            children: displayPolicies.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500",
                                    children: searchQuery ? 'No policies match your search' : 'No policies found'
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                    lineNumber: 342,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 341,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-200 rounded-xl overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full min-w-[600px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-gray-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",
                                                        children: "Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",
                                                        children: "Policy Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",
                                                        children: "Insurer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",
                                                        children: "Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",
                                                        children: [
                                                            "Premium",
                                                            type === 'premium' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                                className: "w-3 h-3 inline ml-1 text-blue-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",
                                                        children: "End Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 45
                                                    }, this),
                                                    type === 'expiring' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",
                                                                children: "Claims Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",
                                                                children: "Quote"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider",
                                                        children: "View Doc"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                lineNumber: 350,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 349,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-gray-100 bg-white",
                                            children: [
                                                displayPolicies.filter((p)=>p.policyType === 'Motor').map((p)=>renderPolicyRow(p, 'Motor')),
                                                displayPolicies.filter((p)=>p.policyType === 'Health').map((p)=>renderPolicyRow(p, 'Health')),
                                                displayPolicies.filter((p)=>p.policyType === 'Commercial').map((p)=>renderPolicyRow(p, 'Commercial')),
                                                displayPolicies.filter((p)=>p.policyType === 'Travel').map((p)=>renderPolicyRow(p, 'Travel')),
                                                displayPolicies.filter((p)=>p.policyType === 'Life').map((p)=>renderPolicyRow(p, 'Life')),
                                                displayPolicies.filter((p)=>p.policyType === 'Cyber').map((p)=>renderPolicyRow(p, 'Cyber'))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 390,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                    lineNumber: 348,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 347,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                            lineNumber: 339,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-t border-gray-200 bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "Click on a policy to view full details"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 405,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                            lineNumber: 404,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 257,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                lineNumber: 256,
                columnNumber: 13
            }, this),
            showClaimsInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-xl max-w-md w-full p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 bg-blue-100 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        className: "w-5 h-5 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                        lineNumber: 418,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                    lineNumber: 417,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900 mb-2",
                                            children: "Claims Status"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 421,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                "Please click on ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Yes"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 53
                                                }, this),
                                                ", if you have applied for any type of claim which is under process."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                            lineNumber: 422,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                    lineNumber: 420,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                            lineNumber: 416,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowClaimsInfo(false),
                                className: "px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium",
                                children: "Got it"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                                lineNumber: 428,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                            lineNumber: 427,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                    lineNumber: 415,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx",
                lineNumber: 414,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
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
"[project]/OneSingleView/components/forms/QuoteRequestForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuoteRequestForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FormInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/FileUpload.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/db.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function QuoteRequestForm({ userId, onClose, onSuccess }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        lob_type: 'Motor',
        details: '',
        uploaded_quote: '',
        required_documents: '',
        has_better_quote: false
    });
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setFormData((prev)=>({
                    ...prev,
                    [name]: e.target.checked
                }));
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
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
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.details) newErrors.details = 'Please provide some details about your requirement';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addQuoteRequest"])({
                user_id: userId,
                lob_type: formData.lob_type,
                details: formData.details,
                uploaded_quote: formData.uploaded_quote,
                has_better_quote: formData.has_better_quote,
                status: 'New'
            });
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error saving quote request:', error);
            setErrors((prev)=>({
                    ...prev,
                    submit: 'Failed to submit request. Please try again.'
                }));
        } finally{
            setLoading(false);
        }
    };
    const handleFileUpload = (url)=>{
        setFormData((prev)=>({
                ...prev,
                uploaded_quote: url
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-900",
                            children: "Request a Quote"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                lineNumber: 102,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                            lineNumber: 101,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-6",
                    children: [
                        errors.submit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 text-red-600 p-4 rounded-lg text-sm",
                            children: errors.submit
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                            lineNumber: 108,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FormInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    label: "Insurance Type",
                                    name: "lob_type",
                                    type: "select",
                                    value: formData.lob_type,
                                    onChange: handleChange,
                                    options: [
                                        {
                                            value: 'Motor',
                                            label: 'Motor Insurance'
                                        },
                                        {
                                            value: 'Health',
                                            label: 'Health Insurance'
                                        },
                                        {
                                            value: 'Life',
                                            label: 'Life Insurance'
                                        },
                                        {
                                            value: 'Others',
                                            label: 'Other Insurance'
                                        }
                                    ],
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Requirement Details"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "details",
                                            value: formData.details,
                                            onChange: handleChange,
                                            rows: 4,
                                            className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${errors.details ? 'border-red-500 bg-red-50' : 'border-gray-300'}`,
                                            placeholder: "Describe what you are looking for (e.g., Comprehensive car insurance for Honda City 2020)..."
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                            lineNumber: 133,
                                            columnNumber: 29
                                        }, this),
                                        errors.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.details
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                            lineNumber: 142,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    label: "PLEASE UPLOAD REQUIRED DOCUMENTS",
                                    name: "required_documents",
                                    bucket: "quote-documents",
                                    onUploadComplete: (url)=>setFormData((prev)=>({
                                                ...prev,
                                                required_documents: url
                                            })),
                                    existingFile: formData.required_documents ? {
                                        url: formData.required_documents,
                                        name: 'Required Documents'
                                    } : undefined
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            id: "has_better_quote",
                                            name: "has_better_quote",
                                            checked: formData.has_better_quote,
                                            onChange: handleChange,
                                            className: "rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                            lineNumber: 155,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "has_better_quote",
                                            className: "text-sm text-gray-700",
                                            children: "I have a quote from another insurer"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                            lineNumber: 163,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, this),
                                formData.has_better_quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    label: "Upload Existing Quote (Optional)",
                                    name: "uploaded_quote",
                                    bucket: "quote-documents",
                                    onUploadComplete: handleFileUpload,
                                    existingFile: formData.uploaded_quote ? {
                                        url: formData.uploaded_quote,
                                        name: 'Existing Quote'
                                    } : undefined
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                    lineNumber: 169,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                            lineNumber: 113,
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
                                    fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                    lineNumber: 180,
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
                                                fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                                lineNumber: 195,
                                                columnNumber: 37
                                            }, this),
                                            "Submitting..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                                lineNumber: 200,
                                                columnNumber: 37
                                            }, this),
                                            "Submit Request"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                                    lineNumber: 188,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                            lineNumber: 179,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
                    lineNumber: 106,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
            lineNumber: 96,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneSingleView/components/forms/QuoteRequestForm.tsx",
        lineNumber: 95,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/components/dashboard/StickyAddPolicy.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StickyAddPolicy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$QuoteRequestForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/forms/QuoteRequestForm.tsx [app-ssr] (ecmascript)");
;
;
;
;
function StickyAddPolicy({ userId, className = '' }) {
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-50 flex flex-col items-end ${className}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsModalOpen(true),
                    className: "h-10 px-4 rounded-full shadow-lg shadow-primary-500/50 flex items-center justify-center text-white bg-primary-600 transition-all duration-300 hover:scale-105 hover:shadow-primary-500/70 focus:outline-none focus:ring-2 focus:ring-primary-200 animate-pulse-slow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "w-5 h-5 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/StickyAddPolicy.tsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-sm",
                            children: "New"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/StickyAddPolicy.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/StickyAddPolicy.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/StickyAddPolicy.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$forms$2f$QuoteRequestForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                userId: userId,
                onClose: ()=>setIsModalOpen(false),
                onSuccess: ()=>{
                    setIsModalOpen(false);
                    window.location.reload();
                }
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/StickyAddPolicy.tsx",
                lineNumber: 21,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[project]/OneSingleView/lib/exportUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportDashboardToPDF",
    ()=>exportDashboardToPDF,
    "exportPoliciesByDate",
    ()=>exportPoliciesByDate,
    "exportPoliciesByType",
    ()=>exportPoliciesByType,
    "exportToCSV",
    ()=>exportToCSV,
    "exportToXLS",
    ()=>exportToXLS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/html2canvas/dist/html2canvas.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
async function exportDashboardToPDF(element, filename = 'dashboard.pdf') {
    try {
        // Capture the dashboard element as canvas
        const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        // Add first page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        // Add additional pages if needed
        while(heightLeft > 0){
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        pdf.save(filename);
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Failed to generate PDF');
    }
}
async function exportPoliciesByType(policyType, policies, userName) {
    try {
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        let yPosition = 20;
        // Add header
        pdf.setFontSize(20);
        pdf.setTextColor(40, 40, 40);
        pdf.text(`${policyType} Policies`, pageWidth / 2, yPosition, {
            align: 'center'
        });
        yPosition += 10;
        pdf.setFontSize(12);
        pdf.setTextColor(100, 100, 100);
        pdf.text(`Report for: ${userName}`, pageWidth / 2, yPosition, {
            align: 'center'
        });
        pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, pageWidth / 2, yPosition + 5, {
            align: 'center'
        });
        yPosition += 15;
        // Add policies
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        if (policies.length === 0) {
            pdf.text('No policies found', 20, yPosition);
        } else {
            policies.forEach((policy, index)=>{
                if (yPosition > pageHeight - 40) {
                    pdf.addPage();
                    yPosition = 20;
                }
                // Policy number
                pdf.setFont('helvetica', 'bold');
                pdf.text(`Policy ${index + 1}: ${policy.policy_number || 'N/A'}`, 20, yPosition);
                yPosition += 6;
                pdf.setFont('helvetica', 'normal');
                // Policy details based on type
                if (policyType === 'Motor') {
                    pdf.text(`Vehicle: ${policy.vehicle_number || 'N/A'}`, 25, yPosition);
                    yPosition += 5;
                    pdf.text(`Make/Model: ${policy.make || 'N/A'} ${policy.model || 'N/A'}`, 25, yPosition);
                    yPosition += 5;
                } else if (policyType === 'Health') {
                    pdf.text(`Sum Insured: ${policy.sum_insured ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.sum_insured) : 'N/A'}`, 25, yPosition);
                    yPosition += 5;
                    pdf.text(`Members: ${policy.no_of_lives || 'N/A'}`, 25, yPosition);
                    yPosition += 5;
                }
                // Common fields
                pdf.text(`Insurer: ${policy.insurer_name || 'N/A'}`, 25, yPosition);
                yPosition += 5;
                pdf.text(`Premium: ${policy.premium_amount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.premium_amount) : 'N/A'}`, 25, yPosition);
                yPosition += 5;
                const expiryDate = policy.expiry_date || policy.policy_end_date;
                if (expiryDate) {
                    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(new Date(expiryDate));
                    pdf.text(`Expiry: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(expiryDate))} - ${status}`, 25, yPosition);
                    yPosition += 5;
                }
                yPosition += 5; // Space between policies
            });
        }
        // Add footer
        const totalPages = pdf.internal.pages.length - 1;
        for(let i = 1; i <= totalPages; i++){
            pdf.setPage(i);
            pdf.setFontSize(8);
            pdf.setTextColor(150, 150, 150);
            pdf.text(`Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 10, {
                align: 'center'
            });
        }
        pdf.save(`${policyType.toLowerCase()}_policies.pdf`);
    } catch (error) {
        console.error('Error generating policies PDF:', error);
        throw new Error('Failed to generate policies PDF');
    }
}
async function exportPoliciesByDate(startDate, endDate, allPolicies, userName, filename) {
    try {
        // Filter policies by creation date
        const filteredPolicies = allPolicies.filter((policy)=>{
            const createdAt = new Date(policy.created_at);
            return createdAt >= startDate && createdAt <= endDate;
        });
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const marginLeft = 20;
        const marginRight = 20;
        const contentWidth = pageWidth - marginLeft - marginRight;
        let yPosition = 20;
        // Helper function to check if we need a new page
        const checkNewPage = (requiredSpace)=>{
            if (yPosition + requiredSpace > pageHeight - 20) {
                pdf.addPage();
                yPosition = 20;
                return true;
            }
            return false;
        };
        // Add header
        pdf.setFontSize(18);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(40, 40, 40);
        pdf.text('INSURANCE PORTFOLIO EXPORT REPORT', pageWidth / 2, yPosition, {
            align: 'center'
        });
        yPosition += 10;
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(100, 100, 100);
        pdf.text(`Report for: ${userName}`, pageWidth / 2, yPosition, {
            align: 'center'
        });
        yPosition += 5;
        pdf.text(`Period: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(startDate)} to ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(endDate)}`, pageWidth / 2, yPosition, {
            align: 'center'
        });
        yPosition += 5;
        pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, pageWidth / 2, yPosition, {
            align: 'center'
        });
        yPosition += 12;
        if (filteredPolicies.length === 0) {
            pdf.setFontSize(11);
            pdf.setTextColor(60, 60, 60);
            pdf.text('No policies found for this date range', pageWidth / 2, yPosition, {
                align: 'center'
            });
        } else {
            // Group policies by type for summary
            const policyGroups = filteredPolicies.reduce((acc, policy)=>{
                const type = policy.vehicle_number ? 'Motor' : policy.no_of_lives !== undefined ? 'Health' : policy.lob_type || 'Other';
                if (!acc[type]) acc[type] = [];
                acc[type].push(policy);
                return acc;
            }, {});
            // Render each policy card
            filteredPolicies.forEach((policy, index)=>{
                const policyType = policy.vehicle_number ? 'Motor' : policy.no_of_lives !== undefined ? 'Health' : policy.lob_type || 'Other';
                const expiryDate = policy.expiry_date || policy.policy_end_date;
                const status = expiryDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(new Date(expiryDate)) : 'N/A';
                // Check if we need a new page (estimate ~50mm per card)
                checkNewPage(55);
                // Card header - Policy number and status
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(11);
                pdf.setTextColor(40, 40, 40);
                pdf.text(`${policyType.toUpperCase()} POLICY #${index + 1}`, marginLeft, yPosition);
                // Status badge
                const statusColors = {
                    'Active': [
                        34,
                        197,
                        94
                    ],
                    'Expiring Soon': [
                        251,
                        191,
                        36
                    ],
                    'Expired': [
                        239,
                        68,
                        68
                    ]
                };
                const statusColor = statusColors[status] || [
                    100,
                    100,
                    100
                ];
                pdf.setTextColor(statusColor[0], statusColor[1], statusColor[2]);
                pdf.setFontSize(9);
                pdf.text(`● ${status}`, pageWidth - marginRight - 30, yPosition, {
                    align: 'right'
                });
                yPosition += 6;
                // Draw card border
                pdf.setDrawColor(200, 200, 200);
                pdf.setLineWidth(0.2);
                const cardTop = yPosition - 2;
                // Policy details
                pdf.setFontSize(9);
                pdf.setTextColor(60, 60, 60);
                pdf.setFont('helvetica', 'normal');
                pdf.text(`Policy Number: ${policy.policy_number || 'N/A'}`, marginLeft + 2, yPosition);
                yPosition += 5;
                pdf.text(`Insurer: ${policy.insurer_name || 'N/A'}`, marginLeft + 2, yPosition);
                yPosition += 6;
                // Type-specific details
                if (policyType === 'Motor') {
                    // Vehicle Details section
                    pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(8.5);
                    pdf.setTextColor(80, 80, 80);
                    pdf.text('VEHICLE DETAILS', marginLeft + 2, yPosition);
                    yPosition += 4;
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(8);
                    pdf.setTextColor(60, 60, 60);
                    pdf.text(`├─ Vehicle Number: ${policy.vehicle_number || 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`├─ Type: ${policy.vehicle_type || 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`├─ Make/Model: ${policy.manufacturer || ''} ${policy.model || ''}`.trim() || 'N/A', marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`├─ Fuel Type: ${policy.fuel_type || 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`├─ Mfg Year: ${policy.manufacturing_year || 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`├─ Plate Type: ${policy.number_plate_type || 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`└─ Ownership: ${policy.ownership_type || 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 6;
                    // Financial section
                    pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(8.5);
                    pdf.text('FINANCIAL', marginLeft + 2, yPosition);
                    yPosition += 4;
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(8);
                    pdf.text(`Premium: ${policy.premium_amount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.premium_amount) : 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 6;
                    // Coverage Period
                    pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(8.5);
                    pdf.text('COVERAGE PERIOD', marginLeft + 2, yPosition);
                    yPosition += 4;
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(8);
                    pdf.text(`├─ Start: ${policy.policy_start_date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.policy_start_date)) : 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`├─ End: ${policy.policy_end_date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.policy_end_date)) : 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`└─ Created: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.created_at))}`, marginLeft + 4, yPosition);
                    yPosition += 2;
                } else if (policyType === 'Health') {
                    // Health/GMC Details
                    pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(8.5);
                    pdf.text('COVERAGE DETAILS', marginLeft + 2, yPosition);
                    yPosition += 4;
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(8);
                    if (policy.company_name) {
                        pdf.text(`├─ Company: ${policy.company_name}`, marginLeft + 4, yPosition);
                        yPosition += 4;
                    }
                    pdf.text(`├─ Sum Insured: ${policy.sum_insured ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.sum_insured) : 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`└─ Lives Covered: ${policy.no_of_lives || 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 6;
                    // Financial
                    pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(8.5);
                    pdf.text('FINANCIAL', marginLeft + 2, yPosition);
                    yPosition += 4;
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(8);
                    pdf.text(`Premium: ${policy.premium_amount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.premium_amount) : 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 6;
                    // Policy Period
                    pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(8.5);
                    pdf.text('POLICY PERIOD', marginLeft + 2, yPosition);
                    yPosition += 4;
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(8);
                    pdf.text(`├─ Expiry: ${expiryDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(expiryDate)) : 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`└─ Created: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.created_at))}`, marginLeft + 4, yPosition);
                    yPosition += 2;
                } else {
                    // Commercial/Other
                    pdf.setFont('helvetica', 'bold');
                    pdf.setFontSize(8.5);
                    pdf.text('POLICY DETAILS', marginLeft + 2, yPosition);
                    yPosition += 4;
                    pdf.setFont('helvetica', 'normal');
                    pdf.setFontSize(8);
                    if (policy.lob_type) {
                        pdf.text(`├─ LOB Type: ${policy.lob_type}`, marginLeft + 4, yPosition);
                        yPosition += 4;
                    }
                    if (policy.company_name) {
                        pdf.text(`├─ Company: ${policy.company_name}`, marginLeft + 4, yPosition);
                        yPosition += 4;
                    }
                    if (policy.policy_holder_name) {
                        pdf.text(`├─ Policy Holder: ${policy.policy_holder_name}`, marginLeft + 4, yPosition);
                        yPosition += 4;
                    }
                    pdf.text(`├─ Sum Insured: ${policy.sum_insured ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.sum_insured) : 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`├─ Premium: ${policy.premium_amount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.premium_amount) : 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`├─ Expiry: ${expiryDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(expiryDate)) : 'N/A'}`, marginLeft + 4, yPosition);
                    yPosition += 4;
                    pdf.text(`└─ Created: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.created_at))}`, marginLeft + 4, yPosition);
                    yPosition += 2;
                }
                // Draw card border (rounded rect)
                const cardHeight = yPosition - cardTop;
                pdf.rect(marginLeft, cardTop, contentWidth, cardHeight);
                yPosition += 6; // Space after card
            });
            // Summary section
            checkNewPage(30);
            yPosition += 4;
            // Draw summary box
            pdf.setDrawColor(200, 200, 200);
            pdf.setFillColor(245, 245, 245);
            pdf.rect(marginLeft, yPosition, contentWidth, 25, 'FD');
            yPosition += 5;
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(10);
            pdf.setTextColor(40, 40, 40);
            pdf.text('SUMMARY', marginLeft + 2, yPosition);
            yPosition += 6;
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9);
            pdf.setTextColor(60, 60, 60);
            const totalPremium = filteredPolicies.reduce((sum, p)=>sum + (Number(p.premium_amount) || 0), 0);
            pdf.text(`Total Policies: ${filteredPolicies.length}`, marginLeft + 2, yPosition);
            yPosition += 5;
            // Breakdown by type
            const typeBreakdown = Object.entries(policyGroups).map(([type, policies])=>`${type}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policies.reduce((sum, p)=>sum + (Number(p.premium_amount) || 0), 0))} (${policies.length} policies)`).join(' | ');
            pdf.text(`├─ ${typeBreakdown}`, marginLeft + 2, yPosition);
            yPosition += 6;
            pdf.setFont('helvetica', 'bold');
            pdf.text(`Total Premium: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(totalPremium)}`, marginLeft + 2, yPosition);
        }
        // Add footer to all pages
        const totalPages = pdf.internal.pages.length - 1;
        for(let i = 1; i <= totalPages; i++){
            pdf.setPage(i);
            pdf.setFontSize(8);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(150, 150, 150);
            pdf.text(`Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 10, {
                align: 'center'
            });
        }
        pdf.save(filename || `policies_${startDate.toISOString().split('T')[0]}_to_${endDate.toISOString().split('T')[0]}.pdf`);
    } catch (error) {
        console.error('Error generating date range PDF:', error);
        throw new Error('Failed to generate date range PDF');
    }
}
// Helper to prepare data for Excel/CSV
function prepareDataForExport(policies) {
    return policies.map((policy)=>{
        const expiryDate = policy.expiry_date || policy.policy_end_date;
        const status = expiryDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(new Date(expiryDate)) : 'N/A';
        // Motor specific (15 fields)
        if (policy.vehicle_number) {
            return {
                'Policy Number': policy.policy_number || 'N/A',
                'Status': status,
                'Insurer Name': policy.insurer_name || 'N/A',
                'Vehicle Number': policy.vehicle_number || 'N/A',
                'Vehicle Type': policy.vehicle_type || 'N/A',
                'Manufacturer': policy.manufacturer || 'N/A',
                'Model': policy.model || 'N/A',
                'Fuel Type': policy.fuel_type || 'N/A',
                'Mfg Year': policy.manufacturing_year || 'N/A',
                'Plate Type': policy.number_plate_type || 'N/A',
                'Ownership': policy.ownership_type || 'N/A',
                'Premium': policy.premium_amount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.premium_amount) : 'N/A',
                'Start Date': policy.policy_start_date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.policy_start_date)) : 'N/A',
                'End Date': policy.policy_end_date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.policy_end_date)) : 'N/A',
                'Created On': policy.created_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.created_at)) : 'N/A'
            };
        }
        // Health specific (9 fields)
        if (policy.no_of_lives !== undefined || policy.sum_insured !== undefined) {
            return {
                'Policy Number': policy.policy_number || 'N/A',
                'Status': status,
                'Insurer Name': policy.insurer_name || 'N/A',
                'Company Name': policy.company_name || 'N/A',
                'Sum Insured': policy.sum_insured ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.sum_insured) : 'N/A',
                'No. of Lives': policy.no_of_lives || 'N/A',
                'Premium': policy.premium_amount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.premium_amount) : 'N/A',
                'Expiry Date': expiryDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(expiryDate)) : 'N/A',
                'Created On': policy.created_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.created_at)) : 'N/A'
            };
        }
        // Commercial specific (10 fields)
        if (policy.lob_type && [
            'GPA',
            'Fire',
            'Other'
        ].includes(policy.lob_type)) {
            return {
                'Policy Number': policy.policy_number || 'N/A',
                'Status': status,
                'LOB Type': policy.lob_type || 'N/A',
                'Insurer Name': policy.insurer_name || 'N/A',
                'Company Name': policy.company_name || 'N/A',
                'Policy Holder': policy.policy_holder_name || 'N/A',
                'Sum Insured': policy.sum_insured ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.sum_insured) : 'N/A',
                'Premium': policy.premium_amount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.premium_amount) : 'N/A',
                'Expiry Date': expiryDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(expiryDate)) : 'N/A',
                'Created On': policy.created_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.created_at)) : 'N/A'
            };
        }
        // Generic (Travel/Life/Cyber) - 8 fields
        return {
            'Policy Number': policy.policy_number || 'N/A',
            'Status': status,
            'Type': policy.lob_type || 'N/A',
            'Insurer Name': policy.insurer_name || 'N/A',
            'Sum Insured': policy.sum_insured ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.sum_insured) : 'N/A',
            'Premium': policy.premium_amount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.premium_amount) : 'N/A',
            'Expiry Date': expiryDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(expiryDate)) : 'N/A',
            'Created On': policy.created_at ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(new Date(policy.created_at)) : 'N/A'
        };
    });
}
function exportToXLS(policies, filename) {
    try {
        console.log('Exporting to XLS with filename:', filename);
        const data = prepareDataForExport(policies);
        const ws = __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
        const wb = __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, "Policies");
        // Generate buffer
        const wbout = __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["write"](wb, {
            bookType: 'xlsx',
            type: 'array'
        });
        // Create Blob
        const blob = new Blob([
            wbout
        ], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        // Trigger download
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `${filename}.xlsx`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('XLS download triggered');
    } catch (error) {
        console.error('Error exporting to Excel:', error);
        throw new Error('Failed to export to Excel');
    }
}
function exportToCSV(policies, filename) {
    try {
        console.log('Exporting to CSV with filename:', filename);
        const data = prepareDataForExport(policies);
        const ws = __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
        const csv = __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_csv(ws);
        const blob = new Blob([
            csv
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `${filename}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('CSV download triggered');
    } catch (error) {
        console.error('Error exporting to CSV:', error);
        throw new Error('Failed to export to CSV');
    }
}
}),
"[project]/OneSingleView/components/dashboard/ExportButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExportButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$umbrella$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Umbrella$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/umbrella.js [app-ssr] (ecmascript) <export default as Umbrella>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$exportUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/exportUtils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ExportButton({ onExportDashboard, motorPolicies, healthPolicies, commercialPolicies, travelPolicies, lifePolicies, cyberPolicies, userName }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exportSuccess, setExportSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Filter States
    const [selectedTypes, setSelectedTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedFormat, setSelectedFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('PDF');
    // Initialize dates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const end = new Date();
        const start = new Date();
        start.setMonth(start.getMonth() - 1);
        setEndDate(end.toISOString().split('T')[0]);
        setStartDate(start.toISOString().split('T')[0]);
    }, []);
    const togglePolicyType = (type)=>{
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter((t)=>t !== type));
        } else {
            setSelectedTypes([
                ...selectedTypes,
                type
            ]);
        }
    };
    const handleExport = async ()=>{
        try {
            setIsExporting(true);
            // Collect all selected policies
            let policiesToExport = [];
            // If no types selected, assume all
            const typesToInclude = selectedTypes.length > 0 ? selectedTypes : [
                'Motor',
                'Health',
                'Travel',
                'Commercial',
                'Life',
                'Cyber'
            ];
            if (typesToInclude.includes('Motor')) policiesToExport = [
                ...policiesToExport,
                ...motorPolicies
            ];
            if (typesToInclude.includes('Health')) policiesToExport = [
                ...policiesToExport,
                ...healthPolicies
            ];
            if (typesToInclude.includes('Travel')) policiesToExport = [
                ...policiesToExport,
                ...travelPolicies
            ];
            if (typesToInclude.includes('Commercial')) policiesToExport = [
                ...policiesToExport,
                ...commercialPolicies
            ];
            if (typesToInclude.includes('Life')) policiesToExport = [
                ...policiesToExport,
                ...lifePolicies
            ];
            if (typesToInclude.includes('Cyber')) policiesToExport = [
                ...policiesToExport,
                ...cyberPolicies
            ];
            // Filter by date range only (removed status filter)
            const start = new Date(startDate);
            const end = new Date(endDate);
            // Set end date to end of day
            end.setHours(23, 59, 59, 999);
            policiesToExport = policiesToExport.filter((p)=>{
                const created = new Date(p.created_at);
                // Filter by date only
                return created >= start && created <= end;
            });
            // Generate descriptive filename
            const dateRangeStr = `${startDate}_to_${endDate}`;
            let typeStr = 'All_Policies';
            if (selectedTypes.length > 0) {
                if (selectedTypes.length === 1) {
                    typeStr = `${selectedTypes[0]}_Policies`;
                } else {
                    typeStr = 'Mixed_Policies';
                }
            }
            const filename = `${typeStr}_${dateRangeStr}`;
            if (selectedFormat === 'PDF') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$exportUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportPoliciesByDate"])(start, end, policiesToExport, userName, `${filename}.pdf`);
            } else if (selectedFormat === 'XLS') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$exportUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportToXLS"])(policiesToExport, filename);
            } else if (selectedFormat === 'CSV') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$exportUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportToCSV"])(policiesToExport, filename);
            }
            setExportSuccess(true);
            setTimeout(()=>{
                setExportSuccess(false);
                setIsOpen(false);
            }, 2000);
        } catch (error) {
            console.error('Export failed:', error);
            alert('Failed to export data. Please try again.');
        } finally{
            setIsExporting(false);
        }
    };
    const policyOptions = [
        {
            type: 'Motor',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"]
        },
        {
            type: 'Health',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
        },
        {
            type: 'Travel',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"]
        },
        {
            type: 'Commercial',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
        },
        {
            type: 'Life',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$umbrella$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Umbrella$3e$__["Umbrella"]
        },
        {
            type: 'Cyber',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all text-gray-700 font-semibold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                        className: "w-5 h-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    "Export"
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/20 z-40",
                        onClick: ()=>setIsOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                        lineNumber: 146,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-full mt-2 w-[480px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-6 py-4 border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-900",
                                        children: "Export Data"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                        lineNumber: 150,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-gray-400 hover:text-gray-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                            lineNumber: 152,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                        lineNumber: 151,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-6 max-h-[70vh] overflow-y-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-3",
                                                children: "Policy Type"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                lineNumber: 159,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-3",
                                                children: policyOptions.map((option)=>{
                                                    const isSelected = selectedTypes.includes(option.type);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>togglePolicyType(option.type),
                                                        className: `flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${isSelected ? 'border-primary-600 bg-primary-50 text-primary-700 ring-1 ring-primary-600' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(option.icon, {
                                                                className: `w-6 h-6 mb-2 ${isSelected ? 'text-primary-600' : 'text-gray-500'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium",
                                                                children: option.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, option.type, true, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 45
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                lineNumber: 160,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                        lineNumber: 158,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-3",
                                                children: "Date Range"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                lineNumber: 182,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs text-gray-500 mb-1",
                                                                children: "From"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: startDate,
                                                                onChange: (e)=>setStartDate(e.target.value),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                                lineNumber: 186,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs text-gray-500 mb-1",
                                                                children: "To"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: endDate,
                                                                onChange: (e)=>setEndDate(e.target.value),
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                lineNumber: 183,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                        lineNumber: 181,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-900 mb-3",
                                                children: "Format"
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                lineNumber: 207,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-4",
                                                children: [
                                                    'PDF',
                                                    'XLS',
                                                    'CSV'
                                                ].map((format)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center cursor-pointer group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                name: "format",
                                                                value: format,
                                                                checked: selectedFormat === format,
                                                                onChange: ()=>setSelectedFormat(format),
                                                                className: "w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-sm text-gray-700 group-hover:text-gray-900",
                                                                children: format
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, format, true, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                lineNumber: 208,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                        lineNumber: 206,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                lineNumber: 156,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setSelectedTypes([]);
                                            const end = new Date();
                                            const start = new Date();
                                            start.setMonth(start.getMonth() - 1);
                                            setEndDate(end.toISOString().split('T')[0]);
                                            setStartDate(start.toISOString().split('T')[0]);
                                        },
                                        className: "text-sm text-gray-500 hover:text-gray-700 font-medium",
                                        children: "Clear all"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                        lineNumber: 228,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleExport,
                                        disabled: isExporting,
                                        className: "px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-sm hover:shadow transition-all flex items-center disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: isExporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-4 h-4 mr-2 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 41
                                                }, this),
                                                "Exporting..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: "Export"
                                        }, void 0, false)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                        lineNumber: 241,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                                lineNumber: 227,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                        lineNumber: 147,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            exportSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full right-0 mt-4 px-4 py-3 bg-green-50 text-green-700 border border-green-200 rounded-xl shadow-lg flex items-center animate-in slide-in-from-top-2 fade-in z-50 whitespace-nowrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "w-5 h-5 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                        lineNumber: 265,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: "Export successful!"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                        lineNumber: 266,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
                lineNumber: 264,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/dashboard/ExportButton.tsx",
        lineNumber: 134,
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
"[project]/OneSingleView/components/dashboard/PolicyTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PolicyTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$umbrella$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Umbrella$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/umbrella.js [app-ssr] (ecmascript) <export default as Umbrella>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-ssr] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$policies$2f$AddPolicyModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/policies/AddPolicyModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function PolicyTable({ policyType, motorPolicies, healthPolicies, commercialPolicies, travelPolicies = [], lifePolicies = [], cyberPolicies = [], userId, onPolicyAdded }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Get policies based on type
    const getPolicies = ()=>{
        switch(policyType){
            case 'Motor':
                return motorPolicies.map((p)=>({
                        ...p,
                        type: 'Motor'
                    }));
            case 'Health':
                return healthPolicies.map((p)=>({
                        ...p,
                        type: 'Health'
                    }));
            case 'Commercial':
                return commercialPolicies.map((p)=>({
                        ...p,
                        type: 'Commercial'
                    }));
            case 'Travel':
                return travelPolicies.map((p)=>({
                        ...p,
                        type: 'Travel'
                    }));
            case 'Life':
                return lifePolicies.map((p)=>({
                        ...p,
                        type: 'Life'
                    }));
            case 'Cyber':
                return cyberPolicies.map((p)=>({
                        ...p,
                        type: 'Cyber'
                    }));
            default:
                return [];
        }
    };
    const allPolicies = getPolicies();
    // Filter, search, and sort policies
    const filteredAndSortedPolicies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let result = allPolicies;
        // Filter: Show only Active and Expiring Soon policies
        result = result.filter((p)=>{
            const isMotor = p.type === 'Motor';
            const isHealth = p.type === 'Health';
            const endDateValue = isMotor ? p.policy_end_date : isHealth ? p.expiry_date : p.expiry_date;
            const endDate = endDateValue ? new Date(endDateValue) : null;
            const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(endDate);
            return status === 'Active' || status === 'Expiring Soon';
        });
        // Search
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter((p)=>{
                const isMotor = p.type === 'Motor';
                const isHealth = p.type === 'Health';
                const startDateValue = isMotor ? p.policy_start_date : isHealth ? p.start_date : p.start_date;
                const endDateValue = isMotor ? p.policy_end_date : isHealth ? p.expiry_date : p.expiry_date;
                const endDate = endDateValue ? new Date(endDateValue) : null;
                const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(endDate);
                // Convert dates to strings for search
                const startDateStr = startDateValue ? new Date(startDateValue).toLocaleDateString('en-IN').toLowerCase() : '';
                const endDateStr = endDateValue ? new Date(endDateValue).toLocaleDateString('en-IN').toLowerCase() : '';
                // Search in common fields
                const matchesCommon = p.policy_number?.toLowerCase().includes(query) || p.insurer_name?.toLowerCase().includes(query) || p.premium_amount?.toString().includes(query) || status?.toLowerCase().includes(query) || startDateStr.includes(query) || endDateStr.includes(query);
                // For Motor policies, also search vehicle number
                const matchesVehicle = isMotor && p.vehicle_number?.toLowerCase().includes(query);
                return matchesCommon || matchesVehicle;
            });
        }
        // Sort
        if (sortField && sortDirection) {
            result = [
                ...result
            ].sort((a, b)=>{
                let aValue;
                let bValue;
                const isMotorA = a.type === 'Motor';
                const isHealthA = a.type === 'Health';
                const isMotorB = b.type === 'Motor';
                const isHealthB = b.type === 'Health';
                switch(sortField){
                    case 'policy_number':
                        aValue = a.policy_number || '';
                        bValue = b.policy_number || '';
                        break;
                    case 'insurer_name':
                        aValue = a.insurer_name || '';
                        bValue = b.insurer_name || '';
                        break;
                    case 'premium_amount':
                        aValue = Number(a.premium_amount) || 0;
                        bValue = Number(b.premium_amount) || 0;
                        break;
                    case 'start_date':
                        const aStartDate = isMotorA ? a.policy_start_date : a.start_date;
                        const bStartDate = isMotorB ? b.policy_start_date : b.start_date;
                        aValue = aStartDate ? new Date(aStartDate).getTime() : 0;
                        bValue = bStartDate ? new Date(bStartDate).getTime() : 0;
                        break;
                    case 'end_date':
                        const aEndDate = isMotorA ? a.policy_end_date : a.expiry_date;
                        const bEndDate = isMotorB ? b.policy_end_date : b.expiry_date;
                        aValue = aEndDate ? new Date(aEndDate).getTime() : 0;
                        bValue = bEndDate ? new Date(bEndDate).getTime() : 0;
                        break;
                    case 'status':
                        const aEndDateForStatus = isMotorA ? a.policy_end_date : a.expiry_date;
                        const bEndDateForStatus = isMotorB ? b.policy_end_date : b.expiry_date;
                        aValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(aEndDateForStatus ? new Date(aEndDateForStatus) : null);
                        bValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(bEndDateForStatus ? new Date(bEndDateForStatus) : null);
                        break;
                    case 'vehicle_number':
                        aValue = isMotorA ? a.vehicle_number || '' : '';
                        bValue = isMotorB ? b.vehicle_number || '' : '';
                        break;
                    default:
                        return 0;
                }
                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    return sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                } else {
                    return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
                }
            });
        }
        return result;
    }, [
        allPolicies,
        searchQuery,
        sortField,
        sortDirection
    ]);
    const handleSort = (field)=>{
        if (sortField === field) {
            // Cycle through: asc -> desc -> null
            if (sortDirection === 'asc') {
                setSortDirection('desc');
            } else if (sortDirection === 'desc') {
                setSortDirection(null);
                setSortField(null);
            }
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };
    const getSortIcon = (field)=>{
        if (sortField !== field) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                className: "w-4 h-4 ml-1 inline opacity-30"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                lineNumber: 200,
                columnNumber: 20
            }, this);
        }
        if (sortDirection === 'asc') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                className: "w-4 h-4 ml-1 inline text-primary-600"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                lineNumber: 203,
                columnNumber: 20
            }, this);
        }
        if (sortDirection === 'desc') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                className: "w-4 h-4 ml-1 inline text-primary-600"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                lineNumber: 206,
                columnNumber: 20
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
            className: "w-4 h-4 ml-1 inline opacity-30"
        }, void 0, false, {
            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
            lineNumber: 208,
            columnNumber: 16
        }, this);
    };
    const getIcon = ()=>{
        switch(policyType){
            case 'Motor':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                    className: "w-5 h-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                    lineNumber: 214,
                    columnNumber: 24
                }, this);
            case 'Health':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    className: "w-5 h-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                    lineNumber: 216,
                    columnNumber: 24
                }, this);
            case 'Commercial':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    className: "w-5 h-5 text-orange-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                    lineNumber: 218,
                    columnNumber: 24
                }, this);
            case 'Travel':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                    className: "w-5 h-5 text-purple-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                    lineNumber: 220,
                    columnNumber: 24
                }, this);
            case 'Life':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$umbrella$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Umbrella$3e$__["Umbrella"], {
                    className: "w-5 h-5 text-pink-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                    lineNumber: 222,
                    columnNumber: 24
                }, this);
            case 'Cyber':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                    className: "w-5 h-5 text-cyan-600"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                    lineNumber: 224,
                    columnNumber: 24
                }, this);
            default:
                return null;
        }
    };
    const getColorClass = ()=>{
        switch(policyType){
            case 'Motor':
                return 'bg-blue-50 border-blue-200';
            case 'Health':
                return 'bg-green-50 border-green-200';
            case 'Commercial':
                return 'bg-orange-50 border-orange-200';
            default:
                return 'bg-gray-50 border-gray-200';
        }
    };
    const handleViewDetails = (policy)=>{
        const typeSlug = policyType.toLowerCase();
        router.push(`/policies/${typeSlug}/${policy.id}`);
    };
    const isMotorTable = policyType === 'Motor';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border border-gray-200 shadow-soft overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `px-6 py-4 border-b ${getColorClass()} flex items-center justify-between`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-white rounded-lg shadow-sm",
                                children: getIcon()
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                lineNumber: 255,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-900",
                                        children: [
                                            policyType,
                                            " Policies"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                        lineNumber: 259,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: [
                                            filteredAndSortedPolicies.length,
                                            " ",
                                            filteredAndSortedPolicies.length === 1 ? 'policy' : 'policies',
                                            " found"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                        lineNumber: 260,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                lineNumber: 258,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                        lineNumber: 254,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsAddModalOpen(true),
                        className: "flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                lineNumber: 269,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Add Policy"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                lineNumber: 270,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                        lineNumber: 265,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                lineNumber: 253,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-gray-200 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                            lineNumber: 277,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: `Search ${policyType.toLowerCase()} policies${isMotorTable ? ' (policy number, insurer, vehicle number, etc.)' : ' (policy number, insurer, etc.)'}`,
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                            lineNumber: 278,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                    lineNumber: 276,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                lineNumber: 275,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto max-h-[400px] overflow-y-auto",
                children: filteredAndSortedPolicies.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12 px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: getIcon() || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                className: "w-8 h-8 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                lineNumber: 293,
                                columnNumber: 43
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                            lineNumber: 292,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-semibold text-gray-900 mb-2",
                            children: searchQuery ? 'No matching policies found' : `No ${policyType} Policies Found`
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                            lineNumber: 295,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: searchQuery ? 'Try adjusting your search terms' : `You don't have any active ${policyType.toLowerCase()} policies yet.`
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                            lineNumber: 298,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                    lineNumber: 291,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50 border-b border-gray-200 sticky top-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    isMotorTable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('vehicle_number'),
                                        className: "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors",
                                        children: [
                                            "Vehicle Number ",
                                            getSortIcon('vehicle_number')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                        lineNumber: 310,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('policy_number'),
                                        className: "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors",
                                        children: [
                                            "Policy Number ",
                                            getSortIcon('policy_number')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                        lineNumber: 317,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('insurer_name'),
                                        className: "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors",
                                        children: [
                                            "Insurer Name ",
                                            getSortIcon('insurer_name')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                        lineNumber: 323,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('premium_amount'),
                                        className: "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors",
                                        children: [
                                            "Premium Amount ",
                                            getSortIcon('premium_amount')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                        lineNumber: 329,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('start_date'),
                                        className: "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors",
                                        children: [
                                            "Start Date ",
                                            getSortIcon('start_date')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                        lineNumber: 335,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('end_date'),
                                        className: "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors",
                                        children: [
                                            "End Date ",
                                            getSortIcon('end_date')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                        lineNumber: 341,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('status'),
                                        className: "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors",
                                        children: [
                                            "Status ",
                                            getSortIcon('status')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                        lineNumber: 347,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                        lineNumber: 353,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                lineNumber: 308,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                            lineNumber: 307,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: filteredAndSortedPolicies.map((policy)=>{
                                const isMotor = policy.type === 'Motor';
                                const isHealth = policy.type === 'Health';
                                // Safely handle dates
                                const startDateValue = isMotor ? policy.policy_start_date : isHealth ? policy.start_date : policy.start_date;
                                const endDateValue = isMotor ? policy.policy_end_date : isHealth ? policy.expiry_date : policy.expiry_date;
                                // Create Date objects with validation
                                const startDate = startDateValue ? new Date(startDateValue) : null;
                                const endDate = endDateValue ? new Date(endDateValue) : null;
                                // Calculate status (now handles null/invalid dates)
                                const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(endDate);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50 transition-colors",
                                    children: [
                                        isMotorTable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleViewDetails(policy),
                                                className: "text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline",
                                                children: policy.vehicle_number
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                                lineNumber: 383,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                            lineNumber: 382,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-900",
                                                children: policy.policy_number
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                                lineNumber: 392,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                            lineNumber: 391,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-900",
                                                children: policy.insurer_name
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                                lineNumber: 397,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                            lineNumber: 396,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-gray-900",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(policy.premium_amount)
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                                lineNumber: 402,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                            lineNumber: 401,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: startDate && !isNaN(startDate.getTime()) ? startDate.toLocaleDateString('en-IN', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric'
                                                }) : 'N/A'
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                                lineNumber: 407,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                            lineNumber: 406,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: endDate && !isNaN(endDate.getTime()) ? endDate.toLocaleDateString('en-IN', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric'
                                                }) : 'N/A'
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                                lineNumber: 418,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                            lineNumber: 417,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2.5 py-1 rounded-full text-xs font-medium ${status === 'Active' ? 'bg-green-100 text-green-800' : status === 'Expiring Soon' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`,
                                                children: status
                                            }, void 0, false, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                                lineNumber: 429,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                            lineNumber: 428,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleViewDetails(policy),
                                                className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 49
                                                    }, this),
                                                    "View Details"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                                lineNumber: 441,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                            lineNumber: 440,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, policy.id, true, {
                                    fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                                    lineNumber: 380,
                                    columnNumber: 37
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                            lineNumber: 358,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                    lineNumber: 306,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                lineNumber: 289,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$policies$2f$AddPolicyModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isAddModalOpen,
                onClose: ()=>setIsAddModalOpen(false),
                userId: userId,
                initialType: policyType,
                onSuccess: ()=>{
                    setIsAddModalOpen(false);
                    onPolicyAdded?.();
                }
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
                lineNumber: 458,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/dashboard/PolicyTable.tsx",
        lineNumber: 251,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneSingleView/app/(customer)/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/plane.js [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$umbrella$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Umbrella$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/umbrella.js [app-ssr] (ecmascript) <export default as Umbrella>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$ClaimsOverview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/ClaimsOverview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$AdvertisingBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/AdvertisingBanner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$AnalyticsDonutChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/AnalyticsDonutChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$PolicyRenewalReminder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/PolicyRenewalReminder.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$FlipCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/FlipCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$MonthlyActivityChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/MonthlyActivityChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$ProtectFamilyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/ProtectFamilyCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$CoverageGapCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/CoverageGapCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$ReportsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/ReportsModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$PolicyDetailModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/PolicyDetailModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$StickyAddPolicy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/StickyAddPolicy.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$ExportButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/ExportButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$policies$2f$AddPolicyModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/policies/AddPolicyModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$PolicyTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/components/dashboard/PolicyTable.tsx [app-ssr] (ecmascript)");
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
;
function DashboardPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [claims, setClaims] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [referrals, setReferrals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isReportsOpen, setIsReportsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Policy Detail Modal State
    const [isPolicyDetailOpen, setIsPolicyDetailOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [policyDetailType, setPolicyDetailType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('total');
    const [policyDetailTitle, setPolicyDetailTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Add Policy Modal State
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('total');
    const [isHealthModalOpen, setIsHealthModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Store actual policy data
    const [motorPolicies, setMotorPolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [healthPolicies, setHealthPolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [commercialPolicies, setCommercialPolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [travelPolicies, setTravelPolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lifePolicies, setLifePolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cyberPolicies, setCyberPolicies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Policy Counts for Cards
    const [policyCounts, setPolicyCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        motor: 0,
        health: 0,
        commercial: 0
    });
    const [selectedPolicyType, setSelectedPolicyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Motor'); // Default to Motor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadData = async ()=>{
            try {
                const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                if (!currentUser) {
                    router.push('/login');
                    return;
                }
                // Redirect corporate users to corporate dashboard - REMOVED for Unified Dashboard
                // if (currentUser.role === 'corporate_employee' || currentUser.role === 'corporate_admin') {
                //     router.push('/dashboard/corporate');
                //     return;
                // }
                setUser(currentUser);
                await loadDashboardData(currentUser.id);
            } catch (error) {
                console.error('[Dashboard] Error loading dashboard:', error);
            } finally{
                setLoading(false);
            }
        };
        loadData();
    }, [
        router
    ]);
    const loadDashboardData = async (userId)=>{
        try {
            const [motor, healthData, commercial, travel, life, cyber, userClaims, userReferrals] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserMotorPolicies"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserHealthPolicies"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserCommercialPolicies"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserTravelPolicies"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserLifePolicies"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserCyberPolicies"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserClaims"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserReferrals"])(userId)
            ]);
            // Store policy data for modal with calculated status
            const processPolicy = (p)=>{
                const endDateValue = 'policy_end_date' in p ? p.policy_end_date : p.expiry_date;
                const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(endDateValue); // Now handles null/invalid dates
                return {
                    ...p,
                    status
                };
            };
            const processedMotor = motor.map(processPolicy);
            const processedHealth = healthData.map(processPolicy);
            const processedCommercial = commercial.map(processPolicy);
            const processedTravel = travel.map(processPolicy);
            const processedLife = life.map(processPolicy);
            const processedCyber = cyber.map(processPolicy);
            setMotorPolicies(processedMotor);
            setHealthPolicies(processedHealth);
            setCommercialPolicies(processedCommercial);
            setTravelPolicies(processedTravel);
            setLifePolicies(processedLife);
            setCyberPolicies(processedCyber);
            setClaims(userClaims);
            setReferrals(userReferrals);
            // Calculate Summary
            // Filter active policies for Total Policies and Total Premium
            const activePolicies = [
                ...motor,
                ...healthData,
                ...commercial,
                ...travel,
                ...life,
                ...cyber
            ].filter((p)=>{
                const endDate = new Date('policy_end_date' in p ? p.policy_end_date : p.expiry_date);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(endDate) === 'Active' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePolicyStatus"])(endDate) === 'Expiring Soon';
            });
            const totalActivePolicies = activePolicies.length;
            const totalActivePremium = activePolicies.reduce((sum, p)=>sum + (Number(p.premium_amount) || 0), 0);
            const expiringSoonCount = [
                ...processedMotor,
                ...processedHealth,
                ...processedCommercial,
                ...processedTravel,
                ...processedLife,
                ...processedCyber
            ].filter((p)=>p.status === 'Expiring Soon').length;
            const expiredCount = [
                ...processedMotor,
                ...processedHealth,
                ...processedCommercial,
                ...processedTravel,
                ...processedLife,
                ...processedCyber
            ].filter((p)=>p.status === 'Expired').length;
            // Calculate portfolio summary
            const motorPremium = motor.reduce((sum, p)=>sum + Number(p.premium_amount), 0);
            const healthPremium = healthData.reduce((sum, p)=>sum + Number(p.premium_amount), 0);
            const travelPremium = travel.reduce((sum, p)=>sum + Number(p.premium_amount), 0);
            const commercialPremium = commercial.reduce((sum, p)=>sum + Number(p.premium_amount), 0);
            const lifePremium = life.reduce((sum, p)=>sum + Number(p.premium_amount), 0);
            const cyberPremium = cyber.reduce((sum, p)=>sum + Number(p.premium_amount), 0);
            const allPolicies = [
                ...processedMotor,
                ...processedHealth,
                ...processedCommercial,
                ...processedTravel,
                ...processedLife,
                ...processedCyber
            ];
            // Calculate expiring soon count based on calculated status
            const expiringCount = allPolicies.filter((p)=>p.status === 'Expiring Soon').length;
            // Calculate Monthly Premium Trend (Area Chart)
            const monthlyPremium = Array(12).fill(0);
            const months = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ];
            allPolicies.forEach((p)=>{
                const date = new Date(p.created_at); // Using created_at for trend
                const month = date.getMonth();
                monthlyPremium[month] += Number(p.premium_amount);
            });
            const areaChartData = months.map((month, index)=>({
                    name: month,
                    value: monthlyPremium[index]
                }));
            // Calculate Monthly Activity (Bar Chart - Count of policies + claims)
            const monthlyActivity = Array(12).fill(0);
            allPolicies.forEach((p)=>{
                const date = new Date(p.created_at);
                monthlyActivity[date.getMonth()]++;
            });
            userClaims.forEach((c)=>{
                const date = new Date(c.created_at);
                monthlyActivity[date.getMonth()]++;
            });
            const barChartData = months.map((month, index)=>({
                    name: (index + 1).toString(),
                    value: monthlyActivity[index]
                }));
            setSummary({
                total_policies: totalActivePolicies,
                total_premium: totalActivePremium,
                expiring_soon_count: expiringSoonCount,
                expired_count: expiredCount,
                portfolio_by_lob: {
                    motor: motorPremium,
                    health: healthPremium,
                    travel: travelPremium,
                    commercial: commercialPremium,
                    life: lifePremium,
                    cyber: cyberPremium
                },
                areaChartData,
                barChartData
            }); // Casting to any to avoid type error for now, ideally update DashboardSummary type
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        }
    };
    const [greeting, setGreeting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
    }, []);
    if (loading || !user || !summary) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 238,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
            lineNumber: 237,
            columnNumber: 13
        }, this);
    }
    const activeClaims = claims.filter((c)=>c.status === 'New' || c.status === 'In Progress').length;
    const settledClaims = claims.filter((c)=>c.status === 'Settled').length;
    const rejectedClaims = claims.filter((c)=>c.status === 'Rejected').length;
    // Click handlers for dashboard cards
    const handleTotalPoliciesClick = ()=>{
        setPolicyDetailType('total');
        setPolicyDetailTitle('All Policies');
        setIsPolicyDetailOpen(true);
    };
    const handleTotalPremiumClick = ()=>{
        setPolicyDetailType('premium');
        setPolicyDetailTitle('Premium Breakdown');
        setIsPolicyDetailOpen(true);
    };
    const handleExpiringClick = ()=>{
        setPolicyDetailType('expiring');
        setPolicyDetailTitle('Expiring Soon');
        setIsPolicyDetailOpen(true);
    };
    const handleExpiredClick = ()=>{
        setPolicyDetailType('expired');
        setPolicyDetailTitle('Expired Policies');
        setIsPolicyDetailOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "dashboard-content",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end items-center mb-6 space-x-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$ExportButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onExportDashboard: ()=>{},
                        motorPolicies: motorPolicies,
                        healthPolicies: healthPolicies,
                        commercialPolicies: commercialPolicies,
                        travelPolicies: travelPolicies,
                        lifePolicies: lifePolicies,
                        cyberPolicies: cyberPolicies,
                        userName: user?.name || 'User'
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 276,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$StickyAddPolicy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        userId: user.id,
                        className: "relative !fixed-none !top-auto !right-auto"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 286,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 275,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$ReportsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isReportsOpen,
                onClose: ()=>setIsReportsOpen(false)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 288,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$PolicyDetailModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isPolicyDetailOpen,
                onClose: ()=>setIsPolicyDetailOpen(false),
                title: policyDetailTitle,
                type: policyDetailType,
                motorPolicies: motorPolicies,
                healthPolicies: healthPolicies,
                commercialPolicies: commercialPolicies,
                travelPolicies: travelPolicies,
                lifePolicies: lifePolicies,
                cyberPolicies: cyberPolicies
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 289,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleTotalPoliciesClick,
                        className: "bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-primary-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 font-semibold mb-1",
                                            children: "Total Active Policies"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-bold text-gray-900",
                                            children: summary ? summary.total_policies : 0
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-green-600 mt-2",
                                            children: "Click to view details"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-blue-50 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-6 h-6 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                            lineNumber: 309,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 305,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleTotalPremiumClick,
                        className: "bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-primary-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 font-semibold mb-1",
                                            children: "Total Active Premium"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-bold text-gray-900",
                                            children: summary ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCurrency"])(summary.total_premium) : '₹0'
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-green-600 mt-2",
                                            children: "Click to view breakdown"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-green-50 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-6 h-6 text-green-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                            lineNumber: 328,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 324,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleExpiringClick,
                        className: "bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-primary-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 font-semibold mb-1",
                                            children: "Expiring Soon"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-bold text-gray-900",
                                            children: summary ? summary.expiring_soon_count : 0
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-orange-600 mt-2",
                                            children: "Click to view policies"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-orange-50 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-6 h-6 text-orange-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                    lineNumber: 355,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                            lineNumber: 347,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 343,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleExpiredClick,
                        className: "bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-primary-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 font-semibold mb-1",
                                            children: "Expired Policies"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-bold text-gray-900",
                                            children: summary ? summary.expired_count || 0 : 0
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-600 mt-2",
                                            children: "Click to view policies"
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-red-50 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                        className: "w-6 h-6 text-red-600"
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                            lineNumber: 366,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 362,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 303,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-gray-900 mb-4",
                        children: "Quick Access"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 383,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$FlipCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Motor",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
                                activeCount: motorPolicies.filter((p)=>p.status === 'Active').length,
                                expiringSoonCount: motorPolicies.filter((p)=>p.status === 'Expiring Soon').length,
                                colorClass: "blue",
                                onClick: ()=>setSelectedPolicyType('Motor')
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                lineNumber: 385,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$FlipCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Health",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
                                activeCount: healthPolicies.filter((p)=>p.status === 'Active').length,
                                expiringSoonCount: healthPolicies.filter((p)=>p.status === 'Expiring Soon').length,
                                colorClass: "green",
                                onClick: ()=>setSelectedPolicyType('Health')
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                lineNumber: 393,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$FlipCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Travel",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
                                activeCount: travelPolicies.filter((p)=>p.status === 'Active').length,
                                expiringSoonCount: travelPolicies.filter((p)=>p.status === 'Expiring Soon').length,
                                colorClass: "purple",
                                onClick: ()=>setSelectedPolicyType('Travel')
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                lineNumber: 401,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$FlipCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Commercial",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                                activeCount: commercialPolicies.filter((p)=>p.status === 'Active').length,
                                expiringSoonCount: commercialPolicies.filter((p)=>p.status === 'Expiring Soon').length,
                                colorClass: "orange",
                                onClick: ()=>setSelectedPolicyType('Commercial')
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                lineNumber: 409,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$FlipCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Life",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$umbrella$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Umbrella$3e$__["Umbrella"],
                                activeCount: lifePolicies.filter((p)=>p.status === 'Active').length,
                                expiringSoonCount: lifePolicies.filter((p)=>p.status === 'Expiring Soon').length,
                                colorClass: "pink",
                                onClick: ()=>setSelectedPolicyType('Life')
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                lineNumber: 417,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$FlipCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Cyber",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                activeCount: cyberPolicies.filter((p)=>p.status === 'Active').length,
                                expiringSoonCount: cyberPolicies.filter((p)=>p.status === 'Expiring Soon').length,
                                colorClass: "cyan",
                                onClick: ()=>setSelectedPolicyType('Cyber')
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                lineNumber: 425,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 384,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 382,
                columnNumber: 13
            }, this),
            selectedPolicyType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$PolicyTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                policyType: selectedPolicyType,
                motorPolicies: motorPolicies,
                healthPolicies: healthPolicies,
                commercialPolicies: commercialPolicies,
                travelPolicies: travelPolicies,
                lifePolicies: lifePolicies,
                cyberPolicies: cyberPolicies,
                userId: user?.id || '',
                onPolicyAdded: async ()=>{
                    // Reload dashboard data when a policy is added
                    if (user) {
                        await loadDashboardData(user.id);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 438,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 gap-4 md:gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-4 md:space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[400px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$MonthlyActivityChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    data: summary.areaChartData,
                                    allPolicies: [
                                        ...motorPolicies,
                                        ...healthPolicies,
                                        ...commercialPolicies,
                                        ...travelPolicies,
                                        ...lifePolicies,
                                        ...cyberPolicies
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                lineNumber: 461,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6 h-[320px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$ClaimsOverview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        activeCount: activeClaims,
                                        settledCount: settledClaims,
                                        rejectedCount: rejectedClaims
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                        lineNumber: 470,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$PolicyRenewalReminder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        motorPolicies: motorPolicies,
                                        healthPolicies: healthPolicies,
                                        commercialPolicies: commercialPolicies,
                                        travelPolicies: travelPolicies,
                                        lifePolicies: lifePolicies,
                                        cyberPolicies: cyberPolicies
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                lineNumber: 469,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 459,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[400px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$AnalyticsDonutChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    data: summary.portfolio_by_lob
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                    lineNumber: 490,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                lineNumber: 489,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[320px] flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$ProtectFamilyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            onGetQuote: ()=>setIsHealthModalOpen(true)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                        lineNumber: 495,
                                        columnNumber: 25
                                    }, this),
                                    healthPolicies.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$CoverageGapCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            missingPolicyType: "Health",
                                            onExplore: ()=>setIsHealthModalOpen(true)
                                        }, void 0, false, {
                                            fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                            lineNumber: 501,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                                lineNumber: 494,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 487,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 457,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-gray-900 mb-4",
                        children: "Exclusive Offers & Rewards"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 513,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-4"
                    }, void 0, false, {
                        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                        lineNumber: 514,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 512,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$dashboard$2f$AdvertisingBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                    lineNumber: 521,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 520,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$components$2f$policies$2f$AddPolicyModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isHealthModalOpen,
                onClose: ()=>setIsHealthModalOpen(false),
                userId: user.id,
                initialType: "Health",
                onSuccess: ()=>{
                    setIsHealthModalOpen(false);
                    // Trigger a reload by toggling a state or re-fetching
                    // Since loadDashboardData is not accessible here (it's inside useEffect),
                    // we should probably move it out or just reload the page.
                    // For now, let's reload the page as a simple fix.
                    window.location.reload();
                }
            }, void 0, false, {
                fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
                lineNumber: 526,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/app/(customer)/dashboard/page.tsx",
        lineNumber: 273,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5148d261._.js.map