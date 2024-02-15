'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type BadgeProps = {
    children: ReactNode;
    className?: string;
    variant?: 'skill' | 'status-on-going' | 'status-done';
};

const BADGE_VARIANTS = {
    skill: 'bg-[#537188] rounded-full text-white',
    'status-on-going': 'rounded-lg bg-[#FEBE8C] text-gray-800 font-medium',
    'status-done': 'rounded-lg bg-[#79AC78] text-white font-medium',
};

export default function Badge({ className, children, variant = 'skill' }: BadgeProps) {
    return (
        <div
            className={cn(
                'whitespace-nowrap px-4 py-1 text-xs',
                BADGE_VARIANTS[variant],
                className
            )}>
            {children}
        </div>
    );
}
