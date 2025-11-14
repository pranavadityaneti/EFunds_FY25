import { Type } from '@google/genai';
import type { UserProfile } from './types';

export const GET_LOAN_OFFERS_PROMPT = (profile: UserProfile): string => {
  const financialSummary = `
- Credit Profile: CIBIL Score of ${profile.financialDetails.cibilScore} (${profile.financialDetails.cibilStatus}).
- Existing Loans: ${profile.financialDetails.currentLoans.length > 0 ? profile.financialDetails.currentLoans.map(l => `${l.type} (₹${l.amount.toLocaleString('en-IN')})`).join(', ') : 'None'}.
- Liabilities: ₹${profile.financialDetails.liabilities.toLocaleString('en-IN')}.
- Credit Cards: ${profile.financialDetails.currentCreditCards}.`;

  return `A user's profile has been verified. Here are their comprehensive details:
- Personal: ${profile.personalDetails.fullName}, born ${profile.personalDetails.dateOfBirth}.
- Professional: Works at ${profile.professionalDetails.employerName} as a ${profile.professionalDetails.role} (${profile.professionalDetails.employmentType}, ${profile.professionalDetails.employmentStatus}) with a monthly income of ₹${profile.professionalDetails.monthlyIncome.toLocaleString('en-IN')} and CTC of ₹${profile.professionalDetails.ctc.toLocaleString('en-IN')}.
- Financials: ${financialSummary}

Based on this complete profile, please generate at least 4 suitable loan options from a mix of top Indian banks and NBFCs. Provide the output only in the requested JSON format. Do not add any other text, explanation, or markdown formatting.`;
};


export const LOAN_OFFER_SCHEMA = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      bankName: { type: Type.STRING, description: 'The name of the bank or NBFC.' },
      logoUrl: { type: Type.STRING, description: "A URL to the bank's logo. Use a placeholder like 'https://logo.clearbit.com/bankname.com'." },
      interestRate: { type: Type.STRING, description: "The annual interest rate, e.g., '8.5% p.a.'" },
      maxLoanAmount: { type: Type.NUMBER, description: 'The maximum loan amount offered.' },
      maxTenure: { type: Type.NUMBER, description: 'The maximum tenure in years.' },
      processingFee: { type: Type.STRING, description: "The processing fee, e.g., '1% of loan amount'." },
    },
    required: ["bankName", "logoUrl", "interestRate", "maxLoanAmount", "maxTenure", "processingFee"],
  },
};