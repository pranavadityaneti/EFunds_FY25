'use client';

import { TrendingUp, TrendingDown, DollarSign, Users, Target, CheckCircle, FileText } from 'lucide-react';
import { topMetrics, formatCurrency, formatNumber } from '@/lib/loan-mock-data';

interface MetricCardProps {
    title: string;
    value: string;
    change: number;
    icon: any;
    iconBgColor: string;
    iconColor: string;
}

function MetricCard({ title, value, change, icon: Icon, iconBgColor, iconColor }: MetricCardProps) {
    const isPositive = change >= 0;

    return (
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
                    <div className="flex items-center gap-1">
                        {isPositive ? (
                            <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : (
                            <TrendingDown className="w-4 h-4 text-red-600" />
                        )}
                        <span className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                            {Math.abs(change)}%
                        </span>
                        <span className="text-xs text-gray-500 ml-1">vs last month</span>
                    </div>
                </div>
                <div className={`p-3 rounded-lg ${iconBgColor}`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
            </div>
        </div>
    );
}

export default function TopMetricCards() {
    const metrics = topMetrics;

    const metricCards = [
        {
            title: 'Total Leads This Month',
            value: formatNumber(metrics.totalLeadsThisMonth),
            change: metrics.totalLeadsChange,
            icon: Target,
            iconBgColor: 'bg-blue-50',
            iconColor: 'text-blue-600',
        },
        {
            title: 'Total Approved Loan Amount',
            value: formatCurrency(metrics.totalApprovedLoanAmount),
            change: metrics.approvedLoanChange,
            icon: DollarSign,
            iconBgColor: 'bg-green-50',
            iconColor: 'text-green-600',
        },
        {
            title: 'Total Payouts This Month',
            value: formatCurrency(metrics.totalPayoutsThisMonth),
            change: metrics.payoutsChange,
            icon: DollarSign,
            iconBgColor: 'bg-loan-primary-50',
            iconColor: 'text-loan-primary-600',
        },
        {
            title: 'Approved Payouts',
            value: formatNumber(metrics.approvedPayouts),
            change: metrics.approvedPayoutsChange,
            icon: CheckCircle,
            iconBgColor: 'bg-emerald-50',
            iconColor: 'text-emerald-600',
        },
        {
            title: 'Total Employees',
            value: formatNumber(metrics.totalEmployees),
            change: metrics.employeesChange,
            icon: Users,
            iconBgColor: 'bg-purple-50',
            iconColor: 'text-purple-600',
        },
        {
            title: 'Total Partners',
            value: formatNumber(metrics.totalPartners),
            change: metrics.partnersChange,
            icon: Users,
            iconBgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600',
        },
        {
            title: 'Payout Cases',
            value: formatNumber(metrics.payoutCases),
            change: metrics.payoutCasesChange,
            icon: FileText,
            iconBgColor: 'bg-amber-50',
            iconColor: 'text-amber-600',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {metricCards.map((card, index) => (
                <MetricCard key={index} {...card} />
            ))}
        </div>
    );
}
