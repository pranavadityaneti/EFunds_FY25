'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { loansDistribution } from '@/lib/loan-mock-data';

export default function LoansDistributionChart() {
    const data = loansDistribution;
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Loans Distribution</h3>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const data = payload[0];
                                    const percentage = ((data.value as number / total) * 100).toFixed(1);
                                    return (
                                        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
                                            <p className="text-sm font-semibold text-gray-900">{data.name}</p>
                                            <p className="text-sm text-gray-600">
                                                {data.value} ({percentage}%)
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            content={({ payload }) => (
                                <div className="flex flex-wrap gap-3 justify-center mt-4">
                                    {payload?.map((entry, index) => (
                                        <div key={`legend-${index}`} className="flex items-center gap-1.5">
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: entry.color }}
                                            />
                                            <span className="text-xs text-gray-600">{entry.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
