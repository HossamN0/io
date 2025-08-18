'use client';

import NextLink from 'next/link';
import { AnchorHTMLAttributes, useEffect, useRef, useState } from 'react';

function Link({
    children,
    href,
    ...rest
}: {
    children: React.ReactNode
    href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
    const [prefetching, setPrefetching] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const linkElement = linkRef?.current;
        linkElement?.addEventListener('mouseover', () => setPrefetching(true));
        linkElement?.addEventListener('mouseleave', () => setPrefetching(false));

        return () => {
            linkElement?.removeEventListener('mouseover', () => setPrefetching(true));
            linkElement?.removeEventListener('mouseleave', () => setPrefetching(false));
        }
    }, [prefetching])

    return <NextLink ref={linkRef} href={href} prefetch={prefetching} {...rest}>{children}</NextLink>
}

export default Link
