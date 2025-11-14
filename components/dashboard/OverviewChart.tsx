import React from 'react';
// FIX: Replaced MoreIcon with MoreVerticalIcon as it is not exported from ../Icons.
import { MoreVerticalIcon } from '../Icons';

const OverviewChart: React.FC = () => {
    const data = [
        { month: 'Jan', value: 20 }, { month: 'Feb', value: 35 }, { month: 'Mar', value: 30 },
        { month: 'Apr', value: 45 }, { month: 'May', value: 25 }, { month: 'Jun', value: 40 },
        { month: 'Jul', value: 55 }, { month: 'Aug', value: 75 }, { month: 'Sep', value: 60 },
        { month: 'Oct', value: 50 }, { month: 'Nov', value: 65 }, { month: 'Dec', value: 70 },
    ];
    const maxValue = 80;

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Overview</h3>
                <div className="flex items-center gap-4">
                     <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-chart-1 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Earnings</span>
                    </div>
                    <select className="text-sm border-none focus:ring-0 bg-transparent text-foreground font-medium">
                        <option>This Year</option>
                        <option>Last Year</option>
                    </select>
                    <button><MoreVerticalIcon /></button>
                </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-2">
                {data.map(({ month, value }) => (
                     <div key={month} className="w-full flex flex-col items-center gap-2 group">
                        <div className="h-full w-full flex items-end">
                            <div 
                                className={`w-full rounded-lg transition-all duration-300 ${month === 'Aug' ? 'bg-chart-3' : 'bg-chart-1 group-hover:bg-chart-2'}`}
                                style={{ height: `${(value / maxValue) * 100}%` }}
                            ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">{month}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OverviewChart;