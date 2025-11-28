export interface UserProfile {
    name: string;
    avatarUrl?: string;
    email: string;
}

export interface LoanOffer {
    id: string;
    bankName: string;
    bankLogo?: string;
    apr: string;
    period: string;
    amount: number;
    interestRate: string;
    tenureMonths: number;
}

export interface EMIChartData {
    month: string;
    amount: number;
}

export interface DashboardStats {
    currentEMI: number;
    creditScore: number;
    currentBalance: number;
    earnings: number;
    spentThisMonth: number;
}

export interface PersonalDetails {
    gender: string;
    dob: string;
    phone: string;
    email: string;
    fatherName: string;
    motherName: string;
    currentAddress: string;
    permanentAddress: string;
}

export interface ProfessionalDetails {
    currentRole: string;
    employeeId: string;
    doj: string;
    officialEmail: string;
    currentCTC: string;
    officeAddress: string;
}
