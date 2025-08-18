'use client';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Heading } from "@/components/ui/typography"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl"
import Image from "next/image";
import { useEffect, useState } from "react";

interface ReviewItemProps {
    name: string;
    role: string;
    image: string;
    description: string;
}

export default function ReviewSection() {

    const t_review = useTranslations('review')
    const [api, setApi] = useState<CarouselApi>();
    const [canScroll, setCanScroll] = useState({ next: false, prev: false });

    useEffect(() => {
        if (api) {
            setCanScroll({
                next: api.canScrollNext(),
                prev: api.canScrollPrev()
            });

            api.on('scroll', () => {
                setCanScroll({
                    next: api.canScrollNext(),
                    prev: api.canScrollPrev()
                });
            });
        }
    }, [api]);

    return (
        <section className="p-section bg-primary text-white">
            <div className="container content-container overflow-hidden">
                <div className="space-y-7 mb-22">
                    <Heading>{t_review('title')}</Heading>
                    <p className="text-[18px] text-white opacity-70 font-normal max-w-[579px] ">{t_review('description')}</p>
                </div>
                <Carousel dir="ltr" setApi={setApi}>
                    <CarouselContent>
                        {t_review.raw('reviews').map((item: ReviewItemProps, index: number) =>
                            <CarouselItem key={index} className="basis-1/1">
                                <ReviewItem item={item} />
                            </CarouselItem>
                        )}
                    </CarouselContent>
                    <div className="relative flex items-center justify-end gap-7 w-full text-black *:cursor-pointer">
                        <div onClick={() => api?.scrollPrev()} className={`p-4 bg-white w-fit rounded-full ${!canScroll.prev ? 'bg-white/10 text-white pointer-events-none' : ''}`}>
                            <ArrowLeft className="w-[24px] h-[24px]" />
                        </div>
                        <div onClick={() => api?.scrollNext()} className={`p-4 bg-white w-fit rounded-full ${!canScroll.next ? 'bg-white/10 text-white pointer-events-none' : ''}`}>
                            <ArrowRight className="w-[24px] h-[24px]" />
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}


const ReviewItem = ({ item }: { item: ReviewItemProps }) => {

    return (
        <div className="flex lg:flex-row flex-col gap-20">
            <div className="bg-[#643F2E] w-[374px] h-[374px] relative">
                <Image src={item.image} alt={item.name} objectFit="contain" layout="fill" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <p className="lg:text-[24px] text-[20px] text-white opacity-70 font-normal leading-10">{item.description}</p>
                <div className="mt-[60px] lg:mt-0">
                    <h3 className="lg:text-[24px] text-[20px] text-white font-semibold">{item.name}</h3>
                    <p className="lg:text-[16px] text-[14px] text-white font-normal">{item.role}</p>
                </div>
            </div>
        </div>
    )
}