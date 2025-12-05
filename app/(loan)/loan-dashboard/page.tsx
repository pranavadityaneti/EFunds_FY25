'use client';

import TopMetricCards from '@/components/loan/dashboard/TopMetricCards';
import LoansDistributionChart from '@/components/loan/dashboard/LoansDistributionChart';
import LoanTypesChart from '@/components/loan/dashboard/LoanTypesChart';
import BankWiseChart from '@/components/loan/dashboard/BankWiseChart';
import PartnerPerformanceTable from '@/components/loan/dashboard/PartnerPerformanceTable';
import ApplicationLoansChart from '@/components/loan/dashboard/ApplicationLoansChart';

export default function LoanDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome to your loan management dashboard</p>
            </div>

            {/* Top Section - Metric Cards */}
            <section>
                <TopMetricCards />
            </section>

            {/* Middle Section - Analytics */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Analytics & Distribution</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <LoansDistributionChart />
                    <LoanTypesChart />
                </div>
            </section>

            {/* Lower Section - Advanced Analytics */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Advanced Analytics</h2>
                <div className="space-y-6">
                    {/* Bank-wise Breakdown */}
                    <BankWiseChart />

                    {/* Partner Performance */}
                    <PartnerPerformanceTable />

                    {/* Application Loans */}
                    <ApplicationLoansChart />
                </div>
            </section>
        </div>
    );
}
