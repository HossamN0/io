'use client'

import Image from "next/image"
import Navbar from "./navbar"
import Link from "../link"
import LangSwitcher from "./language-switcher"
import { useTranslations } from "next-intl"
import { ROUTES } from "@/constants/enums"
import { Button, buttonVariants } from "../ui/button"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

function Header() {
    const t = useTranslations();
    const [navOpened, setNavOpened] = useState(false);
    const [showBg, setShowBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBg(window.scrollY > 90);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <header className={`${showBg ? 'bg-primary/100' : 'bg-primary/0'} transition-all duration-300 lg:py-4 py-1 sticky top-0 right-0 w-full z-50`}>
            <div className="container content-container flex items-center justify-between">
                <Link href="/" className="w-[60px] h-[38px] lg:w-[108px] lg:h-[71px] relative">
                    <Image src={'/assets/logo.svg'} alt="Mohamed bin hindi logo" objectFit="contain" layout="fill" />
                </Link>
                <Navbar navOpened={navOpened} setNavOpened={setNavOpened} />
                <div className="flex items-center lg:gap-4 gap-2">
                    <LangSwitcher />
                    <Link href={ROUTES.BOOK} className={`${buttonVariants({ variant: 'outline' })} lg:text-[14px] hover:bg-transparent hover:text-white !text-[12px]`}>{t('book')}</Link>
                    <Button
                        onClick={() => setNavOpened(true)}
                        className="flex items-start justify-start bg-transparent my-[20px] lg:hidden !px-2"
                    ><Menu className="!w-[23px] !h-[23px]" />
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
