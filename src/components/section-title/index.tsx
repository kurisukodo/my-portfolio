'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SectionTitleProps = {
    className?: string;
    children: ReactNode;
};

export default function SectionTitle({ className, children }: SectionTitleProps) {
    return (
        <h2
            className={cn(
                "relative w-fit uppercase after:absolute after:-bottom-1 after:right-0 after:h-[4px] after:w-[50px] after:rounded-full after:bg-[#537188] after:content-['']",
                className
            )}>
            {children}
        </h2>
    );
}
