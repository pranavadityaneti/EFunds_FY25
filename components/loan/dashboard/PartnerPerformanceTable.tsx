'use client';

import { partnerPerformance, formatCurrency, formatNumber } from '@/lib/loan-mock-data';
import { Users, UserPlus, TrendingUp, Clock, DollarSign } from 'lucide-react';

export default function PartnerPerformanceTable() {
    const data = partnerPerformance;

    const metrics = [
        {
            label: 'Total Partner Count',
            value: formatNumber(data.totalPartnerCount),
            icon: Users,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
        },
        {
            label: 'Total Sub-Partners Count',
            value: formatNumber(data.totalSubPartnersCount),
            icon: Users,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
        },
        {
            label: 'Newly Onboarded Partners',
            value: formatNumber(data.newlyOnboardedPartners),
            icon: UserPlus,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
        },
        {
            label: 'Total Leads from Partners',
            value: formatNumber(data.totalLeadsFromPartners),
            icon: TrendingUp,
            color: 'text-loan-primary-600',
            bgColor: 'bg-loan-primary-50',
        },
        {
            label: 'Pending Approval Partners',
            value: formatNumber(data.pendingApprovalPartners),
            icon: Clock,
            color: 'text-amber-600',
            bgColor: 'bg-amber-50',
        },
        {
            label: 'Total Disbursed Amount',
            value: formatCurrency(data.totalDisbursedAmount),
            icon: DollarSign,
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50',
        },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Partner Performance Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                        >
                            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                                <Icon className={`w-5 h-5 ${metric.color}`} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-0.5">{metric.label}</p>
                                <p className="text-xl font-bold text-gray-900">{metric.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
