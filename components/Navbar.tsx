"use client";
import React from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

function Navbar() {
    return (
        <>
            <DesktopNavbar />
        </>
    );
}

const items = [
    { label: "Dashboard", link: "/" },
    { label: "Transactions", link: "/transactions" },
    { label: "Manage", link: "/manage" },
];

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
            </nav>
        </div>
    );
};

interface NavbarItemProps {
    link: string;
    label: string;
}

function NavbarItem({ link, label }: NavbarItemProps) {
    const pathname = usePathname();
    const isActive = pathname === link;

    return (
        <div className='relative flex items-center'>
            <Link href={link} className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start text-md text-muted-foreground hover:text-foreground", isActive && "text-foreground")}>
                {label}
            </Link>
        </div>
    );
}

export default Navbar;
