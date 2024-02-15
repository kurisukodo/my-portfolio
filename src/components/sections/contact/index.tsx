import { EmailIcon } from '@/svg/icons/email';
import { GithubIcon } from '@/svg/icons/github';
import { LinkedinIcon } from '@/svg/icons/linkedin';
import { WhatsappIcon } from '@/svg/icons/whatsapp';
import WavesBackground from '@/svg/waves-background';
import Link from 'next/link';
import { forwardRef } from 'react';

const ContactSection = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div
            ref={ref}
            className="min-w-screen via-51% relative h-[500px] bg-gradient-to-br from-[#473B7B] via-[#3584A7] to-[#30D2BE] md:h-[550px]">
            <div className="absolute left-0 top-0 z-10 w-full overflow-hidden leading-[0px]">
                <WavesBackground />
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 z-20 pb-8 pt-56">
                <div className="flex h-full w-full flex-col justify-between">
                    <div className="flex-1">
                        <div className="text-center text-xl font-medium uppercase tracking-widest text-white md:text-3xl">
                            Get in touch with me
                        </div>
                        <div className="mt-10 flex flex-row justify-center gap-x-10">
                            <Link href="https://github.com/kurisukodo" target="_blank">
                                <GithubIcon className="h-8 w-8 text-white transition-all hover:scale-125 md:h-10 md:w-10" />
                            </Link>
                            <Link href="https://github.com/kurisukodo" target="_blank">
                                <LinkedinIcon className="h-8 w-8 text-white transition-all hover:scale-125 md:h-10 md:w-10" />
                            </Link>
                            <Link href="https://wa.me/60164139884" target="_blank">
                                <WhatsappIcon className="h-8 w-8 text-white transition-all hover:scale-125 md:h-10 md:w-10" />
                            </Link>
                            <Link href="mailto:kurisukodo@gmail.com">
                                <EmailIcon className="h-8 w-8 text-white transition-all hover:scale-125 md:h-10 md:w-10" />
                            </Link>
                        </div>
                    </div>
                    <div className="text-center text-sm font-medium uppercase text-white">
                        Beautifully crafted by me &copy; {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ContactSection;
