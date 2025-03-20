import { cn } from "@/lib/utils"

export function HeaderProvider({
  children,
  className,
  container = false,
}: {
  children: React.ReactNode
  className?: string
  container?: boolean
}) {
  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-10 w-full border-y border-dashed",
        className
      )}
    >
      <nav
        className={cn(
          "flex h-16 items-center justify-between gap-2",
          container ? "container" : "px-4"
        )}
      >
        {children}
      </nav>
    </header>
  )
}
