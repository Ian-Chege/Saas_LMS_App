import { cn } from "@/lib/utils"

type GradientTextProps = {
  children: React.ReactNode
  className?: string
  element?: "h1" | "h2"
}

export const GradientText = ({
  children,
  className,
  element,
}: GradientTextProps) => {
  switch (element) {
    case "h1":
      return <h1 className={cn(className, "text-gradient")}>{children}</h1>
    case "h2":
      return <h2 className={cn(className, "text-gradient")}>{children}</h2>
    default:
      return <p className={cn(className, "text-gradient")}>{children}</p>
  }
}
