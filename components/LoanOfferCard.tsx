import React from 'react';
import type { LoanOffer } from '../types';

// --- Bank Logo Component ---
// This component provides a robust way to display bank logos.
// It checks against a map of known logos and falls back gracefully.

const LOGO_MAP: Record<string, string> = {
    'HDFC Bank': 'https://cdn.worldvectorlogo.com/logos/hdfc-bank.svg',
    'ICICI Bank': 'https://cdn.worldvectorlogo.com/logos/icici-bank-4.svg',
    'State Bank of India': 'https://cdn.worldvectorlogo.com/logos/state-bank-of-india.svg',
    'SBI': 'https://cdn.worldvectorlogo.com/logos/state-bank-of-india.svg',
    'Axis Bank': 'https://cdn.worldvectorlogo.com/logos/axis-bank.svg',
    'Kotak Mahindra Bank': 'https://cdn.worldvectorlogo.com/logos/kotak-mahindra-bank-2.svg',
    'Bajaj Finserv': 'https://cdn.worldvectorlogo.com/logos/bajaj-finserv.svg',
    'IndusInd Bank': 'https://cdn.worldvectorlogo.com/logos/indusind-bank-1.svg',
    'Bank of Baroda': 'https://cdn.worldvectorlogo.com/logos/bank-of-baroda-2.svg',
    'Punjab National Bank': 'https://cdn.worldvectorlogo.com/logos/punjab-national-bank-1.svg',
};

interface BankLogoProps {
    bankName: string;
    fallbackUrl: string;
    className?: string;
}

const GenericBankIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-2 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
);

const BankLogo: React.FC<BankLogoProps> = ({ bankName, fallbackUrl, className }) => {
    const knownLogoKey = Object.keys(LOGO_MAP).find(key => bankName.toLowerCase().includes(key.toLowerCase()));
    const logoSrc = knownLogoKey ? LOGO_MAP[knownLogoKey] : fallbackUrl;
    const [hasError, setHasError] = React.useState(false);

    if (hasError || !logoSrc) {
        return (
            <div className={`flex items-center justify-center bg-muted rounded-full ${className}`}>
                <GenericBankIcon />
            </div>
        );
    }
    
    return (
        <img 
            src={logoSrc} 
            alt={`${bankName} logo`} 
            className={className} 
            onError={() => setHasError(true)} 
        />
    );
};


// --- Loan Offer Card ---
interface LoanOfferCardProps {
  offer: LoanOffer;
}

const InfoPill: React.FC<{ label: string; value: string | number; icon: React.ReactNode }> = ({ label, value, icon }) => (
    <div className="flex flex-col items-center justify-center bg-secondary p-2 rounded-lg text-center transition-all duration-200 hover:bg-accent hover:scale-105">
        <div className="text-primary mb-1">{icon}</div>
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
);


const LoanOfferCard: React.FC<LoanOfferCardProps> = ({ offer }) => {
  return (
    <div className="bg-card border rounded-xl shadow-sm overflow-hidden transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300 w-full">
      <div className="p-5">
        <div className="flex items-center space-x-4 mb-4">
          <BankLogo bankName={offer.bankName} fallbackUrl={offer.logoUrl} className="h-12 w-12 object-contain rounded-full bg-card p-1 ring-1 ring-border" />
          <div>
            <h3 className="text-lg font-bold text-foreground">{offer.bankName}</h3>
            <p className="text-sm text-emerald-600 font-semibold">{offer.interestRate}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
            <InfoPill label="Max Amount" value={`₹${(offer.maxLoanAmount / 100000).toFixed(2)}L`} icon={<LoanAmountIcon />} />
            <InfoPill label="Max Tenure" value={`${offer.maxTenure} Yrs`} icon={<TenureIcon />} />
            <InfoPill label="Proc. Fee" value={offer.processingFee} icon={<FeeIcon />} />
        </div>
        
        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
          View Details
        </button>
      </div>
    </div>
  );
};

// --- Updated & Improved Icons ---

const LoanAmountIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6.75h3.75c.621 0 1.125-.504 1.125-1.125V12c0-.621-.504-1.125-1.125-1.125H9.75v5.625c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V15m0-4.875c0-.621.504-1.125 1.125-1.125h.375c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-.375m-13.5 4.875V8.25a2.25 2.25 0 012.25-2.25h9a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25z" />
    </svg>
);
const TenureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25M3 18.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
    </svg>
);
const FeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m-6 0l6 6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 17.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
);


export default LoanOfferCard;