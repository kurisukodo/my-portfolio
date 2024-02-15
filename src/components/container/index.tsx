import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type ContainerProps = {
    className?: string;
    children: ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
    return <main className={cn('m-auto max-w-[1250px] p-6', className)}>{children}</main>;
}
