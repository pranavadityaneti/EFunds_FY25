'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { applicationLoans } from '@/lib/loan-mock-data';

export default function ApplicationLoansChart() {
    const data = applicationLoans;

    return (
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Application Loans</h3>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 60 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis
                            dataKey="type"
                            angle={-45}
                            textAnchor="end"
                            height={100}
                            stroke="#9CA3AF"
                            style={{ fontSize: '12px' }}
                        />
                        <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                        <Tooltip
                            cursor={{ fill: 'rgba(241, 139, 59, 0.1)' }}
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
                                            <p className="text-sm font-semibold text-gray-900">{payload[0].payload.type}</p>
                                            <p className="text-sm text-gray-600">
                                                Count: {payload[0].value}
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Bar dataKey="count" fill="#10B981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
