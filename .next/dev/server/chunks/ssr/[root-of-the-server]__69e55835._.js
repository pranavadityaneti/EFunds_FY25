module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/OneSingleView/components/landing/InsuranceLogoTicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InsuranceLogoTicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneSingleView/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// All 58 insurance companies operating in India (as of 2024)
const insuranceCompanies = [
    // Life Insurance Companies
    "LIC",
    "SBI Life",
    "HDFC Life",
    "ICICI Prudential Life",
    "Max Life",
    "Bajaj Allianz Life",
    "Kotak Mahindra Life",
    "Aditya Birla Sun Life",
    "Tata AIA Life",
    "Star Union Dai-ichi Life",
    "Bharti AXA Life",
    "PNB MetLife",
    "Canara HSBC Life",
    "Aegon Life",
    "Sahara India Life",
    "Aviva Life",
    "Future Generali Life",
    "IDBI Federal Life",
    "IndiaFirst Life",
    "Reliance Nippon Life",
    "Shriram Life",
    "Edelweiss Tokio Life",
    "Exide Life",
    // General Insurance Companies
    "National Insurance",
    "New India Assurance",
    "Oriental Insurance",
    "United India Insurance",
    "ICICI Lombard",
    "HDFC ERGO",
    "Bajaj Allianz General",
    "Reliance General",
    "TATA AIG",
    "Future Generali",
    "SBI General",
    "Cholamandalam MS",
    "IFFCO Tokio",
    "Universal Sompo",
    "Royal Sundaram",
    "Liberty General",
    "Raheja QBE",
    "Magma HDI",
    "Shriram General",
    "Kotak Mahindra General",
    "Bharti AXA General",
    "L&T General",
    "Go Digit",
    "Acko General",
    "Niva Bupa",
    "Care Health",
    "Star Health",
    "Manipal Cigna",
    "Aditya Birla Health",
    "Max Bupa Health",
    "Religare Health",
    // Standalone Health Insurance
    "Apollo Munich Health",
    "Cigna TTK Health",
    // Agriculture Insurance
    "Agriculture Insurance Company",
    // Reinsurance
    "General Insurance Corporation of India",
    // Credit Insurance
    "Export Credit Guarantee Corporation"
];
function InsuranceLogoTicker() {
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        // Clone the content for seamless loop
        const scrollContent = scrollElement.querySelector('.scroll-content');
        if (scrollContent) {
            const clone = scrollContent.cloneNode(true);
            scrollElement.appendChild(clone);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-1cb9e8a25f8176aa" + " " + "w-full overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-1cb9e8a25f8176aa" + " " + "container mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "jsx-1cb9e8a25f8176aa" + " " + "text-center text-sm font-medium text-gray-600 uppercase tracking-wider",
                    children: "Trusted by customers across 58+ insurance providers in India"
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/landing/InsuranceLogoTicker.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/landing/InsuranceLogoTicker.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                style: {
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                },
                className: "jsx-1cb9e8a25f8176aa" + " " + "flex overflow-hidden whitespace-nowrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-1cb9e8a25f8176aa" + " " + "scroll-content inline-flex animate-scroll",
                    children: insuranceCompanies.map((company, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-1cb9e8a25f8176aa" + " " + "inline-flex items-center justify-center mx-8 min-w-[180px] h-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-1cb9e8a25f8176aa" + " " + "px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-primary-200 transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-1cb9e8a25f8176aa" + " " + "text-gray-400 font-semibold text-sm tracking-tight filter grayscale hover:grayscale-0 transition-all",
                                    children: company
                                }, void 0, false, {
                                    fileName: "[project]/OneSingleView/components/landing/InsuranceLogoTicker.tsx",
                                    lineNumber: 76,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneSingleView/components/landing/InsuranceLogoTicker.tsx",
                                lineNumber: 75,
                                columnNumber: 29
                            }, this)
                        }, `company-${index}`, false, {
                            fileName: "[project]/OneSingleView/components/landing/InsuranceLogoTicker.tsx",
                            lineNumber: 71,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneSingleView/components/landing/InsuranceLogoTicker.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneSingleView/components/landing/InsuranceLogoTicker.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneSingleView$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "1cb9e8a25f8176aa",
                children: "@keyframes scroll{0%{transform:translate(0)}to{transform:translate(-50%)}}.animate-scroll{animation:120s linear infinite scroll}.animate-scroll:hover{animation-play-state:paused}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneSingleView/components/landing/InsuranceLogoTicker.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__69e55835._.js.map