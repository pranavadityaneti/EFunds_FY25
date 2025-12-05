import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3B82F6', // True Blue (Tailwind Blue 500)
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    200: '#BFDBFE',
                    300: '#93C5FD',
                    400: '#60A5FA',
                    500: '#3B82F6',
                    600: '#2563EB',
                    700: '#1D4ED8',
                    800: '#1E40AF',
                    900: '#1E3A8A',
                    950: '#172554',
                },
                secondary: {
                    DEFAULT: '#64748B', // Slate (Cool Gray)
                    50: '#F8FAFC',
                    100: '#F1F5F9',
                    200: '#E2E8F0',
                    300: '#CBD5E1',
                    400: '#94A3B8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1E293B',
                    900: '#0F172A',
                    950: '#020617',
                },
                accent: '#0EA5E9', // Sky Blue
                'loan-primary': {
                    DEFAULT: '#f18b3b',
                    50: '#fef6ee',
                    100: '#fdebd7',
                    200: '#fad3ae',
                    300: '#f7b47a',
                    400: '#f18b3b',
                    500: '#ee7621',
                    600: '#df5d17',
                    700: '#b94716',
                    800: '#93391a',
                    900: '#763118',
                    950: '#40170a',
                },
                success: '#10B981',
                warning: '#F59E0B',
                error: '#EF4444',
                'gray-soft': '#F8FAFC',
            },
            boxShadow: {
                'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
                'card': '0 4px 20px rgba(0, 0, 0, 0.04)',
                'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 20px rgba(37, 99, 235, 0.15)',
            },
            fontFamily: {
                sans: ['var(--font-red-hat-display)', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
        },
    },
    plugins: [],
};

export default config;
