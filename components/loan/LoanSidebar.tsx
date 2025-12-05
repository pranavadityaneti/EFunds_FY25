'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    FileText,
    Briefcase,
    UserCheck,
    DollarSign,
    FileCheck,
    Bell,
    UserCircle,
    LogOut,
    X,
    Menu,
    TrendingUp
} from 'lucide-react';
import { User } from '@/types';
import { cn } from '@/lib/utils';
import { signOut } from '@/lib/auth';

interface LoanSidebarProps {
    user: User;
    isOpen: boolean;
    onClose: () => void;
}

type NavItem = {
    label: string;
    href: string;
    icon: any;
};

export default function LoanSidebar({ user, isOpen, onClose }: LoanSidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);

    const navItems: NavItem[] = [
        { href: '/loan-dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { href: '/loan-dashboard/leads', icon: TrendingUp, label: 'Leads' },
        { href: '/loan-dashboard/applications', icon: FileText, label: 'Applications' },
        { href: '/loan-dashboard/partners', icon: Briefcase, label: 'Partners' },
        { href: '/loan-dashboard/employees', icon: Users, label: 'Employees' },
        { href: '/loan-dashboard/managers', icon: UserCheck, label: 'Managers' },
        { href: '/loan-dashboard/payouts', icon: DollarSign, label: 'Payouts' },
        { href: '/loan-dashboard/payout-requests', icon: FileCheck, label: 'Payout Requests' },
        { href: '/loan-dashboard/notifications', icon: Bell, label: 'Notifications' },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-0 h-full bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 ease-in-out",
                    "w-72",
                    isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                )}
            >
                {/* Logo & Close Button */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-loan-primary-400 to-loan-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-loan-primary-500/30">
                            <DollarSign className="w-5 h-5 text-white" />
                        </div>
                        <span className="ml-3 text-lg font-bold text-gray-900 tracking-tight">
                            LoanHub
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-hide">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className={cn(
                                    'flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group',
                                    isActive
                                        ? 'bg-loan-primary-50 text-loan-primary-700 shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                )}
                            >
                                <Icon
                                    className={cn(
                                        "w-5 h-5 mr-3 transition-colors",
                                        isActive ? "text-loan-primary-600" : "text-gray-400 group-hover:text-gray-600"
                                    )}
                                />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile Section (Bottom) */}
                <div className="mt-auto px-4 py-4 border-t border-gray-100">
                    <div className="flex flex-col items-center text-center space-y-3">
                        {/* Profile Picture */}
                        <div className="relative group">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-loan-primary-400 to-loan-primary-600 flex items-center justify-center text-white font-bold text-xl shadow-lg overflow-hidden">
                                {user.avatar_url ? (
                                    <img src={user.avatar_url} alt={user.name} className="w-full h-full object-cover" />
                                ) : (
                                    user.name.charAt(0).toUpperCase()
                                )}
                            </div>

                            {/* Loading Overlay */}
                            {isUploadingAvatar && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                                </div>
                            )}

                            {/* Edit Overlay */}
                            {!isUploadingAvatar && (
                                <label
                                    htmlFor="loan-avatar-upload"
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                >
                                    <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm">
                                        <UserCircle className="w-5 h-5 text-white" />
                                    </div>
                                </label>
                            )}
                            <input
                                id="loan-avatar-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                disabled={isUploadingAvatar}
                                onChange={async (e) => {
                                    const file = e.target.files?.[0];
                                    if (!file || isUploadingAvatar) return;

                                    setIsUploadingAvatar(true);

                                    try {
                                        const { uploadAvatar } = await import('@/lib/db');
                                        const url = await uploadAvatar(user.id, file);

                                        if (url) {
                                            user.avatar_url = url;
                                            router.refresh();
                                            setIsUploadingAvatar(false);
                                        } else {
                                            setIsUploadingAvatar(false);
                                            alert('Failed to upload image.');
                                        }
                                    } catch (error) {
                                        console.error('[Avatar Upload] Error:', error);
                                        setIsUploadingAvatar(false);
                                        alert(`Failed to upload image: ${error instanceof Error ? error.message : 'Unknown error'}`);
                                    } finally {
                                        e.target.value = '';
                                    }
                                }}
                            />
                        </div>

                        {/* User Name */}
                        <div className="w-full">
                            <p className="text-base font-bold text-gray-900 truncate">
                                {user.name}
                            </p>
                            {user.customer_id && (
                                <p className="text-xs text-gray-500 mt-0.5 font-medium">
                                    ID: {user.customer_id}
                                </p>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 w-full">
                            <Link
                                href="/profile"
                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <UserCircle className="w-3.5 h-3.5" />
                                Profile
                            </Link>
                            <button
                                onClick={async () => {
                                    try {
                                        await signOut();
                                        router.push('/');
                                        router.refresh();
                                    } catch (error) {
                                        console.error('Error signing out:', error);
                                    }
                                }}
                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                            >
                                <LogOut className="w-3.5 h-3.5" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
