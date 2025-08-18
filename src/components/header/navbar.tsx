'use client'

import { ROUTES } from "@/constants/enums"
import Link from "../link"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const navItems = [
    { id: crypto.randomUUID(), label: 'about', href: ROUTES.ABOUT },
    { id: crypto.randomUUID(), label: 'services', href: null },
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

    return (
        <nav className={`${navOpened ? 'left-0' : '-left-full'} lg:left-0 transition-all pb-12 lg:pb-0 duration-300 top-0 fixed w-full lg:w-auto z-50 bg-primary lg:relative`}>
            <Button
                onClick={() => setNavOpened(false)}
                className="flex items-start justify-end w-full my-[20px] lg:hidden"
            ><X className="!w-[23px] !h-[23px]" />
            </Button>
            <ul className="flex lg:flex-row flex-col items-center gap-12">
                {navItems.map(item =>
                    <li key={item.id}>
                        {item.label !== 'services' ?
                            <Link className='text-white font-normal text-[16px]' href={`/${item.href}`}>{t_navbar(item.label)}</Link>
                            :
                            <Button onClick={() => setServicesDropdown(!ServicesDropdown)} className="!p-0 text-white font-normal text-[16px]">
                                {t_navbar(item.label)}
                                <span className={`${ServicesDropdown && 'rotate-180'} transition-all duration-300`}><ChevronDown /></span>
                            </Button>
                        }
                    </li>
                )}
            </ul>
            {ServicesDropdown && (
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90vw] rounded-[22px] bg-primary">
                    <ul className="grid grid-cols-4 gap-8 px-8 py-12">
                        {t.raw('services').map((service: { label: string, id: string }) =>
                            <li key={service.id}>
                                <Link className="text-white" href={`/${ROUTES.SERRVICES}/${service.id}`}>{service.label}</Link>
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
