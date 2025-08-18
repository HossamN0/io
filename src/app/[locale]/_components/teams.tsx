import { mailIcon, phoneIcon, whatsIcon } from "@/components/icons";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Description, Heading } from "@/components/ui/typography"
import { useTranslations } from "next-intl"
import Image from "next/image";
import Link from "next/link";

interface TeamItem {
    name: string;
    image: string;
    role: string;
}

export default function TeamsSection() {

    const t_team = useTranslations('team')

    return (
        <section className='bg-secondary text-primary p-section'>
            <div className="content-container">
                <div className="text-center max-w-[700px] space-y-5 mx-auto mb-[75px]">
                    <Heading>{t_team('title')}</Heading>
                    <Description className="text-accent">{t_team('description')}</Description>
                </div>
                <Carousel className="max-w-[850px] mx-auto">
                    <CarouselContent>
                        {t_team.raw('teams').map((item: TeamItem, index: number) =>
                            <CarouselItem key={index} className=" basis-1/1 sm:basis-1/2 lg:basis-1/3">
                                <TeamItem item={item} />
                            </CarouselItem>
                        )}
                    </CarouselContent>
                    <CarouselPrevious className="text-black hidden lg:block" variant={'transparent'} />
                    <CarouselNext className="text- hidden lg:block" variant={'transparent'} />
                </Carousel>
            </div>
        </section>
    )
}

const TeamItem = ({ item }: { item: TeamItem }) => {

    return (
        <div className="min-h-[296px]">
            <div className="w-full h-[184px] bg-[#643F2E] relative">
                <Image src={item.image} alt={item.name} layout="fill" objectFit="contain" />
            </div>
            <div className="text-center space-y-1 mt-4">
                <h3 className="font-medium text-[22px]">{item.name}</h3>
                <p className="text-accent text-[14px] font-bold opacity-50">{item.role}</p>
                <div className="flex items-center justify-center gap-4 mt-2 *:!p-0">
                    <Link href={'https://wa.me/+201019244852'} target="_blank">{whatsIcon}</Link>
                    <Link href={'tel:+201019244852'} target="_blank">{phoneIcon}</Link>
                    <Link href={'mailto:bshossam@gmail.com'} target="_blank">{mailIcon}</Link>
                </div>
            </div>
        </div>
    )
}
