import React, { useState, useEffect } from 'react';
import type { UserProfile, LoanOffer } from '../../types';
import { getLoanOffers } from '../../services/geminiService';

import Sidebar from './Sidebar';
import Header from './Header';
import StatCard from './StatCard';
import DetailsCard from './DetailsCard';
import OverviewChart from './OverviewChart';
import LoanOffersList from './LoanOffersList';
import { 
    DollarSignIcon,
    UsersIcon,
    CreditCardIcon,
    ActivityIcon,
} from '../Icons';

interface DashboardProps {
    userProfile: UserProfile;
}

const Dashboard: React.FC<DashboardProps> = ({ userProfile }) => {
    const [loanOffers, setLoanOffers] = useState<LoanOffer[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOffers = async () => {
            setIsLoading(true);
            const result = await getLoanOffers(userProfile);
            if (typeof result === 'string') {
                setError(result);
            } else {
                setLoanOffers(result);
            }
            setIsLoading(false);
        };
        fetchOffers();
    }, [userProfile]);
    
    const { personalDetails, professionalDetails, financialDetails } = userProfile;

    const personalDetailsItems = [
        { label: 'Full Name', value: personalDetails.fullName },
        { label: 'Date of Birth', value: personalDetails.dateOfBirth },
        { label: 'Aadhar Number', value: personalDetails.aadharNumber },
        { label: 'Father\'s Name', value: personalDetails.fatherName },
        { label: 'Mother\'s Name', value: personalDetails.motherName },
        { label: 'Permanent Address', value: personalDetails.permanentAddress },
        { label: 'Current Address', value: personalDetails.currentAddress },
    ];

    const professionalDetailsItems = [
        { label: 'Employer Name', value: professionalDetails.employerName },
        { label: 'Organisation Type', value: professionalDetails.organisationType },
        { label: 'Role', value: professionalDetails.role },
        { label: 'Employment Type', value: professionalDetails.employmentType },
        { label: 'Salary (CTC)', value: `₹${professionalDetails.ctc.toLocaleString('en-IN')}` },
        { label: 'Tenure', value: professionalDetails.tenure },
        { label: 'Overall Experience', value: professionalDetails.overallExperience },
    ];

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex flex-col">
                <Header user={personalDetails} />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard 
                            title="CIBIL Score"
                            value={financialDetails.cibilScore}
                            change={`+15 pts`}
                            changeType="increase"
                            icon={<ActivityIcon className="h-5 w-5 text-primary" />}
                            color="bg-primary/10"
                        />
                        <StatCard 
                            title="Monthly Income"
                            value={`₹${(professionalDetails.monthlyIncome / 1000).toFixed(0)}k`}
                            change={`+2.5% MoM`}
                            changeType="increase"
                            icon={<DollarSignIcon className="h-5 w-5 text-primary" />}
                            color="bg-primary/10"
                        />
                        <StatCard 
                            title="Total Liabilities"
                            value={`₹${(financialDetails.liabilities / 100000).toFixed(2)}L`}
                            change={`-1.2% MoM`}
                            changeType="decrease"
                            icon={<CreditCardIcon className="h-5 w-5 text-primary" />}
                            color="bg-primary/10"
                        />
                        <StatCard 
                            title="Annual CTC"
                            value={`₹${(professionalDetails.ctc / 100000).toFixed(2)}L`}
                            change={``}
                            changeType="increase"
                            icon={<UsersIcon className="h-5 w-5 text-primary" />}
                            color="bg-primary/10"
                        />
                    </div>
                    
                    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                        <DetailsCard title="Personal Details" items={personalDetailsItems} />
                        <DetailsCard title="Professional Details" items={professionalDetailsItems} />
                    </div>

                    <div className="bg-card p-6 rounded-2xl border">
                        <OverviewChart />
                    </div>

                    <div className="bg-card p-6 rounded-2xl border">
                        <LoanOffersList offers={loanOffers} isLoading={isLoading} error={error} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
