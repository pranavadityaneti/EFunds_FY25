'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';

// Temporary mock user - replace with real auth later
const mockUser = {
    id: '1',
    name: 'Demo User',
    email: 'demo@loanhub.com',
    customer_id: 'DEMO001',
    avatar_url: null,
    role: 'user'
};

export default function LoanLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar - Lazy loaded */}
            {typeof window !== 'undefined' && (
                <LoanSidebarClient
                    user={mockUser}
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 md:ml-72">
                {/* Mobile Header with Menu Button */}
                <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>
                    <span className="text-lg font-bold text-gray-900">LoanHub</span>
                    <div className="w-10"></div> {/* Spacer for centering */}
                </div>

                {/* Page Content */}
                <main className="p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}

// Client component wrapper for sidebar
function LoanSidebarClient({ user, isOpen, onClose }: any) {
    const LoanSidebar = React.lazy(() => import('@/components/loan/LoanSidebar'));

    return (
        <React.Suspense fallback={<div className="w-72 bg-white border-r" />}>
            <LoanSidebar user={user} isOpen={isOpen} onClose={onClose} />
        </React.Suspense>
    );
}
