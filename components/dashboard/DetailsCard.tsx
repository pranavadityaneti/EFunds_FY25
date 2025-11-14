import React from 'react';
// FIX: Replaced MoreIcon with MoreVerticalIcon as it is not exported from ../Icons.
import { MoreVerticalIcon } from '../Icons';

interface DetailItem {
    label: string;
    value: string;
}

interface DetailsCardProps {
    title: string;
    items: DetailItem[];
}

const DetailsCard: React.FC<DetailsCardProps> = ({ title, items }) => {
    return (
        <div className="bg-card p-6 rounded-2xl border mb-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <button><MoreVerticalIcon /></button>
            </div>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground text-right">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailsCard;