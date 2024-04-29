"use client";

import { ThemeProvider } from 'next-themes';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

function RootProviders({ children }: Props) {
    return (
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
}

export default RootProviders;

