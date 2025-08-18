
export function Heading({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return <h2 className={`font-bold md:text-5xl text-3xl ${className}`}>{children}</h2>
}

export function Description({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return <p className={`font-medium text-[16px] leading-7 ${className}`}>{children}</p>
}