import React, { useState } from 'react';
import type { UserProfile } from './types';
import { fetchPanByPhone, fetchUserProfile } from './services/validationService';
import Dashboard from './components/dashboard/Dashboard';
import { CheckIcon, PencilIcon, BotIcon } from './components/Icons';

type AppStage = 'phone' | 'pan' | 'dashboard';

// --- Reusable Form Components ---
const FormHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
    </div>
);

const FormButton: React.FC<{ onClick?: (e: any) => void; type?: "button" | "submit"; children: React.ReactNode; disabled?: boolean; }> = ({ children, ...props }) => (
     <button {...props} className="w-full bg-primary text-primary-foreground font-medium h-10 px-4 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background flex items-center justify-center text-sm">
        {children}
    </button>
);

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input {...props} className="w-full px-3 py-2 h-10 bg-transparent border border-input rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed" />
);

const LoadingSpinner: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'lg' }) => {
    const sizeClasses = size === 'sm' ? 'h-4 w-4 border-2' : 'h-10 w-10 border-t-2 border-b-2';
    return <div className={`animate-spin rounded-full ${sizeClasses} border-primary`}></div>
};

const AuthLayout: React.FC<{children: React.ReactNode}> = ({children}) => (
     <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="relative z-20 flex items-center text-lg font-medium">
                <BotIcon className="mr-2"/>
                Loan Advisor AI
            </div>
            <div className="relative z-20 mt-auto">
                <blockquote className="space-y-2">
                    <p className="text-lg">
                        “This AI-powered platform streamlined my entire loan application process. I received personalized offers in minutes, not days. Absolutely revolutionary.”
                    </p>
                    <footer className="text-sm">Sofia Davis</footer>
                </blockquote>
            </div>
        </div>
        <div className="lg:p-8 h-full flex items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                {children}
            </div>
        </div>
    </div>
)

const App: React.FC = () => {
    const [stage, setStage] = useState<AppStage>('phone');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const [phone, setPhone] = useState('');
    const [pan, setPan] = useState('');
    const [isPanEditable, setIsPanEditable] = useState(false);
    
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    const handlePhoneSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!/^\d{10}$/.test(phone)) {
            setError('Please enter a valid 10-digit phone number.');
            return;
        }
        setIsLoading(true);
        try {
            const fetchedPan = await fetchPanByPhone(phone);
            setPan(fetchedPan);
            setStage('pan');
        } catch (err: any) {
            setError(err.message || 'Failed to retrieve PAN. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const handlePanConfirm = async () => {
        setError('');
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan.toUpperCase())) {
            setError('Invalid PAN format. Please check and try again.');
            return;
        }
        setIsLoading(true);
        setIsPanEditable(false);
        try {
            const profile = await fetchUserProfile(pan, phone);
            setUserProfile(profile);
            setStage('dashboard');
        } catch (err) {
            setError('Failed to fetch user profile. Please check PAN and try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const renderAuthContent = () => {
        if (stage === 'phone') {
            return (
                <>
                    <FormHeader title="Let's get started" subtitle="Enter your mobile number to begin." />
                    <form onSubmit={handlePhoneSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <label className="text-sm font-medium" htmlFor="phone">Mobile Number</label>
                            <FormInput
                                id="phone" type="tel" placeholder="98765 43210" value={phone}
                                onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                maxLength={10} disabled={isLoading} required
                            />
                        </div>
                        <FormButton type="submit" disabled={isLoading}>
                            {isLoading ? <LoadingSpinner size="sm" /> : 'Continue'}
                        </FormButton>
                    </form>
                    {error && <p className="px-1 text-xs text-destructive text-center">{error}</p>}
                </>
            );
        }

        if (stage === 'pan') {
            return (
                <>
                    <FormHeader title="Confirm Your PAN" subtitle="We found this PAN linked to your number." />
                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <label className="text-sm font-medium" htmlFor="phone-verified">Mobile Number</label>
                            <div className="flex items-center space-x-2">
                                <FormInput id="phone-verified" type="tel" value={phone} disabled={true} />
                                <CheckIcon className="text-green-500" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium" htmlFor="pan">Confirm your PAN</label>
                            <div className="flex items-center space-x-2">
                                <FormInput
                                    id="pan" type="text" value={pan}
                                    onChange={e => setPan(e.target.value.toUpperCase())}
                                    disabled={!isPanEditable || isLoading}
                                    className="font-mono tracking-widest"
                                />
                                {!isPanEditable && !isLoading && (
                                    <button onClick={() => setIsPanEditable(true)} className="p-2 text-muted-foreground hover:text-foreground" aria-label="Edit PAN">
                                        <PencilIcon className="h-4 w-4"/>
                                    </button>
                                )}
                            </div>
                        </div>
                        <FormButton onClick={handlePanConfirm} disabled={isLoading}>
                            {isLoading ? <LoadingSpinner size="sm" /> : 'Fetch My Profile'}
                        </FormButton>
                    </div>
                     {error && <p className="px-1 text-xs text-destructive text-center">{error}</p>}
                </>
            );
        }

        return null;
    };


    if (isLoading && stage !== 'dashboard') {
        return <div className="flex items-center justify-center h-screen"><LoadingSpinner /></div>
    }
    
    if (stage !== 'dashboard') {
        return (
            <AuthLayout>
                {renderAuthContent()}
            </AuthLayout>
        )
    }

    return (
        <>
            {userProfile ? <Dashboard userProfile={userProfile} /> : <div className="flex items-center justify-center h-screen"><LoadingSpinner /></div>}
        </>
    )
};

export default App;