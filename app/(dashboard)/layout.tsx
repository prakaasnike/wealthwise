import Navbar from '@/components/Navbar';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
    <div className="relative flex h-screen w-full flex-col">
        <Navbar />
        <div className='w-full'>{children}</div>
    </div>
);

export default Layout;
