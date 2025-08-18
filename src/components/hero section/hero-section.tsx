import Image from "next/image"

function HeroSection({
    image,
    title,
    description,
    ...rest
}: {
    image?: string,
    title?: string,
    description?: string,
} & React.HTMLAttributes<HTMLDivElement>) {

    return (
        <section
            className="text-white w-full h-[850px] bg-cover bg-center relative flex items-center z-[1]"
            style={{ backgroundImage: `url(/assets/hero-section/hero-image.webp)` }}
        >
            <div
                className="absolute w-full h-full left-0 top-0 bg-overlay -z-[1]"
                style={{ backgroundImage: 'linear-gradient(271.47deg, rgba(75, 38, 21, 0.28) 1.2%, rgba(75, 38, 21, 0.68) 86.38%)' }}
            ></div>
            <div className="flex justify-between lg:flex-row flex-col items-center lg:gap-48 gap-20 container content-container">
                <div className="space-y-10 order-2">
                    <h1 className="font-bold text-5xl">{title}</h1>
                    <h2 className="font-medium text-[16px] leading-7">{description}</h2>
                    {rest.children}
                </div>
                {image && (
                    <div className="lg:min-w-[374px] lg:min-h-[374px] w-[200px] h-[200px] bg-primary relative order-1 lg:order-2">
                        <Image src={image} alt={title!} objectFit="contain" layout="fill" />
                    </div>
                )}
            </div>
        </section>
    )
}

export default HeroSection
