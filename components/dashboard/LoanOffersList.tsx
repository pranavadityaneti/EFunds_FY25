import React from 'react';
import type { LoanOffer } from '../../types';
// FIX: Replaced MoreIcon with MoreVerticalIcon as it is not exported from ../Icons.
import { MoreVerticalIcon, FilterIcon } from '../Icons';

// Sub-component for a single offer row
const LoanOfferRow: React.FC<{ offer: LoanOffer }> = ({ offer }) => (
    <div className="grid grid-cols-12 gap-4 items-center py-3 px-2 text-sm text-foreground border-b border-border last:border-b-0">
        <div className="col-span-4 flex items-center gap-3">
             <img 
                src={`https://logo.clearbit.com/${offer.bankName.toLowerCase().replace(/\s/g, '')}.com`}
                alt={`${offer.bankName} logo`}
                className="h-8 w-8 object-contain rounded-full bg-card p-0.5 ring-1 ring-border"
                onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${offer.bankName.replace(' ', '+')}&background=FEF3E8&color=F97316&bold=true` }}
            />
            <span className="font-medium text-foreground">{offer.bankName}</span>
        </div>
        <div className="col-span-2 font-medium text-emerald-600">{offer.interestRate}</div>
        <div className="col-span-3 font-medium">₹{(offer.maxLoanAmount / 100000).toFixed(2)} Lakhs</div>
        <div className="col-span-2">
             <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                Available
            </span>
        </div>
        <div className="col-span-1 text-right">
             <button className="text-muted-foreground hover:text-foreground"><MoreVerticalIcon /></button>
        </div>
    </div>
);


// Loading skeleton
const SkeletonRow = () => (
    <div className="grid grid-cols-12 gap-4 items-center py-3 px-2 border-b border-border">
        <div className="col-span-4 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse"></div>
            <div className="h-4 w-2/3 rounded bg-muted animate-pulse"></div>
        </div>
        <div className="col-span-2"><div className="h-4 w-1/2 rounded bg-muted animate-pulse"></div></div>
        <div className="col-span-3"><div className="h-4 w-2/3 rounded bg-muted animate-pulse"></div></div>
        <div className="col-span-2"><div className="h-5 w-20 rounded-full bg-muted animate-pulse"></div></div>
        <div className="col-span-1"></div>
    </div>
)

interface LoanOffersListProps {
    offers: LoanOffer[];
    isLoading: boolean;
    error: string;
}

const LoanOffersList: React.FC<LoanOffersListProps> = ({ offers, isLoading, error }) => {
    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Your Loan Offers</h3>
                <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                    <FilterIcon />
                    <span>Filter</span>
                </button>
            </div>
            
            <div className="grid grid-cols-12 gap-4 pb-2 px-2 text-xs font-semibold text-muted-foreground uppercase border-b border-border">
                <div className="col-span-4">Bank Name</div>
                <div className="col-span-2">Interest Rate</div>
                <div className="col-span-3">Max Amount</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1"></div>
            </div>

            <div className="mt-2">
                {isLoading && Array.from({ length: 4 }).map((_, i) => <SkeletonRow key={i} />)}
                {!isLoading && error && (
                    <div className="text-center py-8 text-destructive">{error}</div>
                )}
                {!isLoading && !error && offers.length === 0 && (
                     <div className="text-center py-8 text-muted-foreground">No loan offers found based on your profile.</div>
                )}
                {!isLoading && !error && offers.map((offer, index) => (
                    <LoanOfferRow key={index} offer={offer} />
                ))}
            </div>
        </div>
    );
};

export default LoanOffersList;