'use client';

import { cn } from '@/lib/utils';
import { DiagonalArrowRightUp } from '@/svg/icons/diagonal-arrow-right-up';
import Link from 'next/link';

type ProjectTitleProps = {
    link: string;
    title: string;
};

export default function ProjectTitle({ link, title }: ProjectTitleProps) {
    const containerClasses = 'flex w-fit flex-row gap-x-1 uppercase';
    const renderTitle = <h4 className="uppercase text-black">{title}</h4>;

    if (link) {
        return (
            <Link className={cn(containerClasses, 'group')} href={link} target="_blank">
                {renderTitle}
                {link !== '' && (
                    <DiagonalArrowRightUp className="h-5 w-5 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                )}
            </Link>
        );
    }

    return <div className={containerClasses}>{renderTitle}</div>;
}
