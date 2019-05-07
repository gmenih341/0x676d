import Link from 'next/link';
import React, {FunctionComponent} from 'react';
import {Anchor} from './styled';

interface MenuItemProps {
    href: string;
    children: string;
    className?: string;
    currentPath?: string;
    isActive?: boolean;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({children, className, href, currentPath}) => (
    <Link href={href}>
        <Anchor href={href} className={(className = className + (href === currentPath ? ' active' : ''))}>
            <span>{children}</span>
            <strong>{children}</strong>
        </Anchor>
    </Link>
);
