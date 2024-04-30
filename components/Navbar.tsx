"use client";
import React, { useState } from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { UserButton } from '@clerk/nextjs';
import { ThemeSwitcherButton } from './ThemeSwitcherButton';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const items = [
    { label: "Dashboard", link: "/" },
    { label: "Transactions", link: "/transactions" },
    { label: "Manage", link: "/manage" },
];

interface NavbarItemProps {
    link: string;
    label: string;
    onClick?: () => void;
}

function NavbarItem({ link, label, onClick }: NavbarItemProps) {
    const pathname = usePathname();
    const isActive = pathname === link;

    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <div className='relative flex items-center'>
            <Link href={link} className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start text-md text-muted-foreground hover:text-foreground", isActive && "text-foreground")} onClick={handleClick}>
                {label}
            </Link>
            {isActive && <div className='absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block' />}
        </div>
    );
}

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden block bg-background">
            <nav className='container flex items-center justify-between px-4'>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <button className="focus:outline-none">
                            <Menu className='w-6 h-6' />
                        </button>
                    </SheetTrigger>
                    <SheetContent className="w-[250px] sm:w-[540px]" side="left">
                        <Logo />
                        {items.map(item => (
                            <NavbarItem
                                key={item.label}
                                link={item.link}
                                label={item.label}
                                onClick={() => setIsOpen(prev => !prev)}
                            />
                        ))}
                    </SheetContent>
                </Sheet>
                <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
                    <Logo />
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitcherButton />
                    <UserButton afterSignOutUrl="/sign-in" />
                </div>
            </nav>
        </div>
    );
}

const DesktopNavbar = () => {
    return (
        <div className='hidden border-separate bg-bottom border-b-2 bg-background md:block'>
            <nav className='container flex items-center justify-between px-8'>
                <div className="flex h-[64px] min-h-[60px] items-center gap-x-4">
                    <Logo />
                    <div className='flex h-full'>
                        {items.map(item => (
                            <NavbarItem key={item.label} link={item.link} label={item.label} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitcherButton />
                    <UserButton afterSignOutUrl='/sign-in' />
                </div>
            </nav>
        </div>
    );
};

function Navbar() {
    return (
        <>
            <DesktopNavbar />
            <MobileNavbar />
        </>
    );
}

export default Navbar;
