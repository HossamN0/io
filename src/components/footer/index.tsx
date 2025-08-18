import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ROUTES } from "@/constants/enums";
import { facebookIcon, googleIcon, twitterIcon } from "../icons";
import Link from "../link";
import { default as NextLink } from "next/link";


const footerItems = [
    { id: crypto.randomUUID(), label: 'about', href: ROUTES.ABOUT },
    { id: crypto.randomUUID(), label: 'services', href: ROUTES.SERVICES },
    { id: crypto.randomUUID(), label: 'teams', href: ROUTES.TEAMS },
    { id: crypto.randomUUID(), label: 'blogs', href: ROUTES.BLOG },
    { id: crypto.randomUUID(), label: 'contact', href: ROUTES.CONTACT },
]

const Footer = () => {

    const t = useTranslations()

    return (
        <footer className="bg-primary text-white pt-[57px] pb-[30px] border-t">
            <div className="container content-container">
                <div className="flex lg:flex-row flex-col items-center justify-end gap-10">
                    <div className="relative w-[230px] py-[8px] rounded-[16px] bg-white">
                        <Input type="email" className="bg-transparent focus-visible:ring-0 text-black border-0" placeholder={t('email')} />
                        <Button className="absolute top-1/2 -translate-y-1/2 right-2">{t('subscribe')}</Button>
                    </div>
                    <Link href={ROUTES.CONTACT}>{t('navbar.contact')}</Link>
                    <div className="flex items-center gap-6">
                        <NextLink href={'https://x.com/hossamn2000'} target="_blank">{twitterIcon}</NextLink>
                        <NextLink href={'https://www.facebook.com/taich.ayeh'} target="_blank">{facebookIcon}</NextLink>
                        <NextLink href={'https://www.google.com/'} target="_blank">{googleIcon}</NextLink>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white opacity-45 my-10"></div>

                <div className="flex lg:flex-row flex-col items-center justify-between">
                    <ul className="flex items-center flex-wrap gap-x-10 gap-y-2">
                        {footerItems.map(item =>
                            <li key={item.id}>
                                {
                                    <Link className='text-white font-normal text-[16px]' href={`/${item.href}`}>{t(`navbar.${item.label}`)}</Link>
                                }
                            </li>
                        )}
                    </ul>
                    <p className="mt-[40px] lg:mt-0">© 2024 . All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;