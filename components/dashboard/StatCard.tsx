import React from 'react';

interface StatCardProps {
    title: string;
    value: string | number;
    change: string;
    changeType: 'increase' | 'decrease';
    icon: React.ReactNode;
    color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon, color }) => {
    const isIncrease = changeType === 'increase';
    return (
        <div className="bg-card p-5 rounded-2xl border flex items-start justify-between">
            <div>
                <p className="text-sm text-muted-foreground mb-1">{title}</p>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                 <div className="flex items-center mt-2 text-xs">
                    <span className={`font-semibold ${isIncrease ? 'text-emerald-600' : 'text-destructive'}`}>
                        {change}
                    </span>
                </div>
            </div>
            <div className={`p-3 rounded-full ${color}`}>
                {icon}
            </div>
        </div>
    );
};

export default StatCard;