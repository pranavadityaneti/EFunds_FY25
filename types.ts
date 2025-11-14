export interface LoanOffer {
  bankName: string;
  logoUrl: string;
  interestRate: string;
  maxLoanAmount: number;
  maxTenure: number;
  processingFee: string;
}

export interface PersonalDetails {
    fullName: string;
    dateOfBirth: string;
    aadharNumber: string;
    permanentAddress: string;
    currentAddress: string;
    phone: string;
    fatherName: string;
    motherName: string;
    spouseName?: string;
}

export interface ProfessionalDetails {
    employerName: string;
    organisationType: string;
    employmentType: 'Salaried' | 'Self-employed';
    employmentStatus: 'Permanent' | 'Contract';
    monthlyIncome: number;
    ctc: number;
    role: string;
    tenure: string;
    overallExperience: string;
}

export interface FinancialDetails {
    currentLoans: { type: string; amount: number }[];
    currentCreditCards: number;
    liabilities: number;
    cibilScore: number;
    cibilStatus: 'Excellent' | 'Good' | 'Fair' | 'Poor';
}

export interface UserProfile {
    personalDetails: PersonalDetails;
    professionalDetails: ProfessionalDetails;
    financialDetails: FinancialDetails;
}
