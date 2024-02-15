import SplashScreen from '@/components/splash-screen';
import type { Metadata } from 'next';
import { Roboto, Roboto_Condensed } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
    weight: ['100', '300', '400', '500', '700'],
});
const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-condensed',
});

export const metadata: Metadata = {
    title: 'Christopher Chan | Full Stack & App Developer',
    description: 'Full Stack & App Developer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} ${robotoCondensed.variable}`}>
                <SplashScreen />
                {children}
            </body>
        </html>
    );
}
