import { LANGUAGES } from '@/constants/enums';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: [LANGUAGES.ENGLISH, LANGUAGES.ARABIC],

    defaultLocale: LANGUAGES.ENGLISH
});