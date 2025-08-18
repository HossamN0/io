import HeroSection from "@/components/hero section/hero-section";
import Link from "@/components/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/constants/enums";
import { useTranslations } from "next-intl";

export default function Home() {
  const t_heroSection = useTranslations('heroSection')
  const t = useTranslations()
  return (
    <main>
      <HeroSection
        image={'/assets/persons/person.webp'}
        title={t_heroSection('title')}
        description={t_heroSection('description')}
      >
        <Link href={ROUTES.BOOK} className={`${buttonVariants({ variant: 'white' })} text-[16px] py-6`}>{t('read_more')}</Link>
      </HeroSection>
    </main>
  );
}
