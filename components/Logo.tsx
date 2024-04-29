import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/">

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                    src="/wealthwise.svg"
                    alt="Logo"
                    width={52}
                    height={11}
                />
                <p className='text-2xl p-2 font-bold leading-tight tracking-tighter text-white'>WealthWise</p>
            </div>

        </Link>
    )
}

export default Logo;
