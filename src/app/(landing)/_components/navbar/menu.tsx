"use client"

import { useNavigation } from "@/hooks/navigation"

interface MenuProps {
    orientation: "desktop" | "mobile"
}

export const Menu = ({ orientation }: MenuProps) => {
    const { section, onSetSection } = useNavigation()
    switch (orientation) {
        case "desktop":
            return <div className="flex gap-x-4"></div>
        case "mobile":
            return <div className="flex gap-x-4"></div>
        default:
            return null
    }
}
