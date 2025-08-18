'use client'

import { ROUTES } from "@/constants/enums"
import Link from "../link"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";

const navItems = [
    { id: crypto.randomUUID(), label: 'about', href: ROUTES.ABOUT },
    { id: crypto.randomUUID(), label: 'services', href: ROUTES.SERVICES },
    { id: crypto.randomUUID(), label: 'teams', href: ROUTES.TEAMS },
    { id: crypto.randomUUID(), label: 'blogs', href: ROUTES.BLOG },
    { id: crypto.randomUUID(), label: 'contact', href: ROUTES.CONTACT },
]

function Navbar({
    navOpened,
    setNavOpened }: {
        navOpened: boolean;
        setNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
    }) {
    const t = useTranslations()
    const t_navbar = useTranslations('navbar');
    const [ServicesDropdown, setServicesDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ServicesDropdown &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)) {
                setServicesDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ServicesDropdown]);

    return (
        <nav className={`${navOpened ? 'bg-primary left-0' : '-left-full'} min-h-[100vh] lg:min-h-auto lg:left-0 pb-12 lg:pb-0 top-0 fixed w-full lg:w-auto z-50 lg:relative`}>
            <Button
                onClick={() => setNavOpened(false)}
                className="flex items-start justify-end bg-transparent w-full my-[20px] lg:hidden"
            ><X className="!w-[23px] !h-[23px]" />
            </Button>
            <ul className="flex lg:flex-row flex-col items-center gap-12">
                {navItems.map(item =>
                    <li key={item.id}>
                        {item.label !== 'services' ?
                            <Link className='text-white font-normal text-[16px]' href={`/${item.href}`}>{t_navbar(item.label)}</Link>
                            :
                            <>
                                <Button ref={buttonRef} onClick={() => setServicesDropdown(!ServicesDropdown)} className="!p-0 !bg-transparent text-white font-normal text-[16px] lg:flex hidden">
                                    {t_navbar(item.label)}
                                    <span className={`${ServicesDropdown && 'rotate-180'} transition-all duration-300`}><ChevronDown /></span>
                                </Button>
                                <Link className='text-white font-normal text-[16px] lg:hidden' href={`/${item.href}`}>{t_navbar(item.label)}</Link>
                            </>
                        }
                    </li>
                )}
            </ul>
            {ServicesDropdown && (
                <div ref={dropdownRef} className="absolute top-16 left-1/2 -translate-x-1/2 w-[90vw] rounded-[22px] bg-primary">
                    <ul className="grid grid-cols-4 gap-8 px-8 py-12">
                        {t.raw('services').map((service: { label: string, id: string }) =>
                            <li key={service.id}>
                                <Link className="text-white" href={`/${ROUTES.SERVICES}/${service.id}`}>{service.label}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            )
            }
        </nav>
    )
}

export default Navbar
