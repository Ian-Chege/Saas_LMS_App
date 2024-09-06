import { LogInIcon } from "lucide-react"
import Link from "next/link"

import { Menu } from "./menu"

export const LandingPageNavbar = () => {
    return (
        <div className="w-full flex justify-between items-center py-4 sticky top-0 z-50">
            {/* Application Name */}
            <p className="text-xl font-bold">Qwertz</p>
            {/* Menu style - desktop/mobile format */}
            <Menu orientation="desktop" />
            <div className="flex border rounded-md gap-x-6 px-4 py-2">
                <div>Home</div>
                <div>Features</div>
                <div>Pricing</div>
            </div>

            <Link href="/sign-in" className="flex items-center">
                <LogInIcon className="w-6 h-6" />
                <span className="ml-2">Login</span>
            </Link>
        </div>
    )
}
