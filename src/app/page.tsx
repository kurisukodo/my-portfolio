'use client';

import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import ProjectsSection from '@/components/sections/projects';
import Topbar from '@/components/top-bar';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
    const contactSectionRef = useRef<HTMLDivElement>(null);
    const projectsSectionRef = useRef<HTMLDivElement>(null);

    const handleScrollTo = (section: string) => {
        let topValue = 0;
        switch (section) {
            case 'projects':
                topValue = projectsSectionRef.current?.offsetTop! - 50;
                break;
            case 'contact':
                topValue = contactSectionRef.current?.offsetTop! - 50;
                break;
            default:
                topValue = 0;
        }

        window.scrollTo({ top: topValue, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}>
                <Topbar scrollTo={handleScrollTo} />
                <AboutSection />
                <ProjectsSection ref={projectsSectionRef} />
                <ContactSection ref={contactSectionRef} />
            </motion.div>
        </main>
    );
}
