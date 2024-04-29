import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: 64, height: 20, position: 'relative' }}>
                    <Image
                        src="/wealthwise.svg"
                        alt="Logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <p className='text-xl font-bold leading-tight tracking-tighter text-white'>WealthWise</p>
            </div>
        </Link>
    )
}

export default Logo;
