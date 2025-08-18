'use client'

import { LANGUAGES } from "@/constants/enums"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

function LangSwitcher() {
    const locale = useLocale()
    const t_languages = useTranslations('languages')
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const handleLanguageChange = (lang: string) => {
        if (lang !== locale) {
            const path = pathname.replace(`/${locale}`, `/${lang}`) ?? `/${locale}`;
            router.push(path, { scroll: false });
        }
    }

    return (
        <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
            <DropdownMenuTrigger className="!border-0 !outline-0 cursor-pointer flex items-center gap-2 text-white capitalize font-normal lg:text-[14px] text-[12px]">
                {locale === LANGUAGES.ARABIC ? t_languages(LANGUAGES.ARABIC) : t_languages(LANGUAGES.ENGLISH)}
                <span className={`${isOpen ? 'rotate-180' : ''} transition-all duration-300`}><ChevronDown className="w-[17px] h-[17px]" /></span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[150px] bg-primary rounded-[22px] px-4 py-5 space-y-5 text-white *:cursor-pointer *:!border-0 *:!outline-0 z-[100]">
                <DropdownMenuItem onClick={() => handleLanguageChange(LANGUAGES.ENGLISH)}>{t_languages(LANGUAGES.ENGLISH)}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange(LANGUAGES.ARABIC)}>{t_languages(LANGUAGES.ARABIC)}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LangSwitcher
