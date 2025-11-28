import { DashboardStats, EMIChartData, LoanOffer, PersonalDetails, ProfessionalDetails } from '../types';

// Mock data
const MOCK_STATS: DashboardStats = {
    currentEMI: 682.5,
    creditScore: 321,
    currentBalance: 350.40,
    earnings: 350.40,
    spentThisMonth: 682.5,
};

const MOCK_EMI_DATA: EMIChartData[] = [
    { month: 'Jan', amount: 250 },
    { month: 'Feb', amount: 380 },
    { month: 'Mar', amount: 320 },
    { month: 'Apr', amount: 410 },
    { month: 'May', amount: 695 },
    { month: 'Jun', amount: 298 },
    { month: 'Jul', amount: 340 },
    { month: 'Aug', amount: 550 },
    { month: 'Sep', amount: 420 },
    { month: 'Oct', amount: 310 },
    { month: 'Nov', amount: 480 },
    { month: 'Dec', amount: 390 },
];

const MOCK_LOAN_OFFERS: LoanOffer[] = [
    {
        id: '1',
        bankName: 'HDFC BANK',
        apr: '9.46%',
        period: 'Since last month',
        amount: 1000000,
        interestRate: '12%',
        tenureMonths: 60,
    },
    {
        id: '2',
        bankName: 'HDFC BANK',
        apr: '8.2%',
        period: 'Since last month',
        amount: 500000,
        interestRate: '12.2%',
        tenureMonths: 60,
    },
    {
        id: '3',
        bankName: 'HDFC BANK',
        apr: '9.46%',
        period: 'Since last month',
        amount: 1000000,
        interestRate: '12%',
        tenureMonths: 60,
    },
];

// API Service
export const api = {
    getDashboardStats: async (): Promise<DashboardStats> => {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_STATS), 500);
        });
    },

    getEMIData: async (): Promise<EMIChartData[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_EMI_DATA), 500);
        });
    },

    getLoanOffers: async (): Promise<LoanOffer[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_LOAN_OFFERS), 500);
        });
    },

    submitLoanApplication: async (amount: number): Promise<{ success: boolean; message: string }> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Loan application submitted for amount: ${amount}`);
                resolve({ success: true, message: 'Application submitted successfully' });
            }, 1000);
        });
    },

    updatePersonalDetails: async (details: PersonalDetails): Promise<{ success: boolean }> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Personal details updated:', details);
                resolve({ success: true });
            }, 1000);
        });
    },

    updateProfessionalDetails: async (details: ProfessionalDetails): Promise<{ success: boolean }> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Professional details updated:', details);
                resolve({ success: true });
            }, 1000);
        });
    },
};
