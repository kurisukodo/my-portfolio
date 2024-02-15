'use client';

import Container from '@/components/container';
import { cn } from '@/lib/utils';
import CloseIcon from '@/svg/icons/close';
import MenuIcon from '@/svg/icons/menu';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type TopbarProps = {
    scrollTo: (section: string) => void;
};

export default function Topbar({ scrollTo }: TopbarProps) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState('about');
    const menuIconControls = useAnimationControls();
    const closeIconControls = useAnimationControls();

    const btnAnimateVariants = {
        hidden: {
            opacity: 0,
            display: 'none',
        },
        visible: {
            opacity: 1,
            display: 'block',
        },
    };

    const handleShowMenuIcon = () => {
        closeIconControls.start('hidden');
        menuIconControls.start('visible');
        setShowMobileMenu((prev) => !prev);
    };

    const handleShowCloseIcon = () => {
        menuIconControls.start('hidden');
        closeIconControls.start('visible');
        setShowMobileMenu((prev) => !prev);
    };

    const handleScrollTo = (section: string) => {
        scrollTo(section);
        setActiveMenu(section);

        if (showMobileMenu) {
            handleShowMenuIcon();
        }
    };

    const isMenuActive = (value: string) => {
        return activeMenu === value;
    };

    return (
        <div className="fixed top-0 z-50 w-screen bg-white">
            <Container>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-x-2">
                        <Image
                            src="/assets/personal-icon.png"
                            width={30}
                            height={30}
                            alt="Personal icon"
                        />
                        <h4 className="text-black">christophercwk.</h4>
                    </div>
                    <div className="flex flex-row items-center md:hidden">
                        <motion.button
                            variants={btnAnimateVariants}
                            animate={menuIconControls}
                            className="block rounded-md p-[1px] transition-all hover:text-theme"
                            onClick={handleShowCloseIcon}>
                            <MenuIcon className="h-7 w-7 text-black" />
                        </motion.button>
                        <motion.button
                            variants={btnAnimateVariants}
                            animate={closeIconControls}
                            className="hidden rounded-md p-[1px] opacity-0 transition-all hover:text-theme"
                            onClick={handleShowMenuIcon}>
                            <CloseIcon className="h-7 w-7 text-black" />
                        </motion.button>
                    </div>
                    <div className="hidden flex-row items-center gap-x-8 md:flex">
                        <h5
                            onClick={() => handleScrollTo('about')}
                            className={cn(
                                'cursor-pointer transition-all hover:scale-110',
                                isMenuActive('about') ? 'text-[#537188]' : 'text-black'
                            )}>
                            About
                        </h5>
                        <h5
                            onClick={() => handleScrollTo('projects')}
                            className={cn(
                                'cursor-pointer transition-all hover:scale-110',
                                isMenuActive('projects') ? 'text-[#537188]' : 'text-black'
                            )}>
                            Projects
                        </h5>
                        <h5
                            onClick={() => handleScrollTo('contact')}
                            className={cn(
                                'cursor-pointer transition-all hover:scale-110',
                                isMenuActive('contact') ? 'text-[#537188]' : 'text-black'
                            )}>
                            Contact
                        </h5>
                    </div>
                    <AnimatePresence>
                        {showMobileMenu && (
                            <motion.div
                                layout
                                initial={{
                                    opacity: 0,
                                    right: '-200px',
                                }}
                                animate={{
                                    opacity: 1,
                                    right: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    right: '-200px',
                                }}
                                className="absolute left-0 top-[78px] flex flex-col items-end gap-y-4 bg-white p-6 shadow-lg">
                                <h5
                                    onClick={() => handleScrollTo('about')}
                                    className={
                                        isMenuActive('about') ? 'text-[#537188]' : 'text-black'
                                    }>
                                    About
                                </h5>
                                <h5
                                    onClick={() => handleScrollTo('projects')}
                                    className={
                                        isMenuActive('projects') ? 'text-[#537188]' : 'text-black'
                                    }>
                                    Projects
                                </h5>
                                <h5
                                    onClick={() => handleScrollTo('contact')}
                                    className={
                                        isMenuActive('contact') ? 'text-[#537188]' : 'text-black'
                                    }>
                                    Contact
                                </h5>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </div>
    );
}
