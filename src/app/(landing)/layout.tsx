import { LandingPageNavbar } from "./_components/navbar"

export default function LandingPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex flex-col container relative">
            <LandingPageNavbar />
            {children}
        </div>
    )
}
