import Container from '@/components/container';
import { CircleDownIcon } from '@/svg/icons/circle-down';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <Container className="relative flex h-screen flex-col justify-center gap-y-10 py-16 pt-[78px] md:py-28 lg:flex-row lg:items-center lg:gap-x-32 lg:py-52">
            <div className="relative block aspect-square h-[120px] w-[120px] overflow-hidden rounded-full shadow-[-10px_10px_5px_0px_rgba(176,176,176,0.75)] lg:hidden">
                <Image
                    src="/assets/me.jpg"
                    alt="Picture of myself"
                    width={120}
                    height={120}
                    priority={false}
                />
            </div>
            <div className="flex flex-col justify-center lg:flex-1">
                <div className="text-2xl font-medium uppercase tracking-widest text-[#537188] md:text-5xl lg:text-6xl">
                    Christopher Chan
                </div>
                <div className="text-md mb-8 font-medium uppercase tracking-wider text-gray-600 md:text-2xl">
                    Full Stack & App Developer
                </div>
                <div className="w-full text-justify text-sm md:text-xl">
                    Detailed-oriented Front End Developer with 5 years of experience working
                    extensively with React, Javascript, Typescript, and Tailwind CSS.
                </div>
            </div>
            <div className="relative hidden aspect-square h-[220px] w-[220px] overflow-hidden rounded-full shadow-[-10px_10px_5px_0px_rgba(176,176,176,0.75)] lg:block">
                <Image
                    src="/assets/me.jpg"
                    alt="Picture of myself"
                    width={220}
                    height={220}
                    priority={false}
                />
            </div>
            <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
                <CircleDownIcon className="h-10 w-10 animate-bounce text-[#537188]" />
            </div>
        </Container>
    );
}
