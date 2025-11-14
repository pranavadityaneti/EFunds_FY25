import React from 'react';
import { 
    BotIcon,
    LayoutDashboardIcon,
    ArrowRightLeftIcon,
    UsersIcon,
    CreditCardIcon,
    SettingsIcon,
} from '../Icons';

const NavItem: React.FC<{ icon: React.ElementType, label: string, active?: boolean, badge?: string }> = ({ icon: Icon, label, active, badge }) => (
    <a href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${active ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}>
        <Icon className="h-4 w-4" />
        {label}
        {badge && <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">{badge}</span>}
    </a>
);

const Sidebar: React.FC = () => {
    return (
        <aside className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <a href="/" className="flex items-center gap-2 font-semibold">
                        <BotIcon className="h-6 w-6 text-primary" />
                        <span className="">Loan Advisor AI</span>
                    </a>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <NavItem icon={LayoutDashboardIcon} label="Dashboard" active />
                        <NavItem icon={ArrowRightLeftIcon} label="Transactions" badge="6" />
                        <NavItem icon={UsersIcon} label="Accounts" />
                        <NavItem icon={CreditCardIcon} label="Cards" />
                        <NavItem icon={SettingsIcon} label="Settings" />
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold text-sm">Upgrade to Pro</h3>
                        <p className="text-xs text-muted-foreground mt-1 mb-2">
                            Unlock all features and get unlimited access to our support team.
                        </p>
                        <button className="w-full bg-primary text-primary-foreground text-xs h-8 rounded-md hover:bg-primary/90">
                            Upgrade
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;