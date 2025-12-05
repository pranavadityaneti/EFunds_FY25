'use client';

import React, { useState } from 'react';
import LoanSidebar from '@/components/loan/LoanSidebar';
import { Menu } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function LoanLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user, loading } = useAuth();

    if (loading || !user) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-loan-primary-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <LoanSidebar user={user} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

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
