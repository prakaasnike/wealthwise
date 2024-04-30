import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='relative w-10 h-8'>
                    <Image
                        src="/wealthwise.svg"
                        alt="wealthwise logo"
                        fill
                        object-fit="cover"
                    />
                </div>
                <p className='text-xl p-2 font-bold leading-tight tracking-tighter text-white'>WealthWise</p>
            </div>
        </Link>
    )
}

export default Logo;
