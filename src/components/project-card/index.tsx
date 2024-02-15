'use client';

import Badge from '@/components/badge';
import { GithubIcon } from '@/svg/icons/github';
import Image from 'next/image';
import Link from 'next/link';
import ProjectTitle from './components/project-title';

type ProjectCardProps = {
    status: string;
    title: string;
    thumbnail: string;
    description: string;
    technology: string[];
    link: string;
    repo: ProjectRepo[];
};

type ProjectRepo = {
    type: string;
    popover: string;
    link: string;
};

export default function ProjectCard({
    title,
    status,
    link,
    thumbnail,
    description,
    technology,
    repo,
}: ProjectCardProps) {
    return (
        <div>
            <div className="relative aspect-video w-full">
                <Image
                    className="rounded-lg object-cover shadow-lg"
                    src={thumbnail}
                    alt={`${title} thumbnail`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge
                    variant={status === 'Done' ? 'status-done' : 'status-on-going'}
                    className="absolute left-2 top-2">
                    {status}
                </Badge>
            </div>
            <div className="mb-1 mt-4 flex w-full flex-row items-center">
                <div className="flex-1">
                    <ProjectTitle title={title} link={link} />
                </div>
                <div className="flex flex-row gap-x-1">
                    {repo.map((item) => (
                        <Link key={item.link} href={item.link} target="_blank">
                            <div className="group relative">
                                {item.type === 'github' && (
                                    <GithubIcon className="h-8 w-8 transition-all hover:scale-125" />
                                )}
                                {item.popover && (
                                    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#537188] text-xs text-white opacity-0 shadow-lg transition-all before:absolute before:-bottom-[1px] before:right-[8px] before:-z-10 before:h-4 before:w-4 before:rotate-45 before:bg-[#537188] before:content-[''] group-hover:-top-10 group-hover:z-0 group-hover:opacity-100">
                                        {item.popover}
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <p className="mb-5 text-sm text-black">{description}</p>
            <div className="flex flex-row flex-wrap gap-1.5">
                {technology.map((item) => (
                    <Badge key={item}>{item}</Badge>
                ))}
            </div>
        </div>
    );
}
