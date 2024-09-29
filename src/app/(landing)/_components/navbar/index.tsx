import { MenuIcon } from "lucide-react"
import Link from "next/link"

import GlassSheet from "@/components/global/glass-sheet"
import { Button } from "@/components/ui/button"
import { Logout } from "@/icons/logout"
import { Menu } from "./menu"

export const LandingPageNavbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-4 sticky top-0 z-50">
      {/* Application Name */}
      <p className="text-xl font-bold">Qwertz</p>
      {/* Menu style - desktop/mobile format */}
      <Menu orientation="desktop" />
      <div className="flex gap-2">
        <Link href="/sign-in">
          <Button
            variant="outline"
            className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
          >
            <Logout />
            Login
          </Button>
        </Link>
        <GlassSheet
          triggerClass="lg:hidden"
          trigger={
            <Button variant="ghost" className="hover:bg-transparent">
              <MenuIcon size={30} />
            </Button>
          }
        >
          <Menu orientation="mobile" />
        </GlassSheet>
      </div>
    </div>
  )
}
