'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
        const showTimeout = setTimeout(() => {
            setShow(false);
        }, 1800);

        return () => clearTimeout(showTimeout);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ zIndex: -1, opacity: 0 }}
                    animate={{ opacity: 1, zIndex: 999 }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-white text-3xl tracking-widest">
                    <span>{'<'}</span>
                    <motion.div
                        initial={{ width: 'fit-content', opacity: 1, margin: '0 8px' }}
                        animate={{ width: 0, opacity: 0, margin: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="overflow-hidden">
                        kurisukodo
                    </motion.div>
                    <span>{'/>'}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
