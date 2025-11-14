import React from 'react';
import type { PersonalDetails } from '../../types';
import { SearchIcon, ChevronDownIcon } from '../Icons';
import { BotIcon } from '../Icons';

interface HeaderProps {
    user: Pick<PersonalDetails, 'fullName'>;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30 backdrop-blur-sm">
            {/* Mobile Sidebar Toggle would go here */}
            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search transactions, offers..."
                            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3 h-9 rounded-md border border-input"
                        />
                    </div>
                </form>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-foreground p-2 rounded-md hover:bg-secondary">
                 <img 
                    src={`https://ui-avatars.com/api/?name=${user.fullName.replace(' ', '+')}&background=ea580c&color=fff&bold=true&size=32`} 
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full"
                />
                <span className="hidden md:inline">{user.fullName}</span>
                <ChevronDownIcon className="h-4 w-4 hidden md:inline" />
            </button>
        </header>
    );
};

export default Header;