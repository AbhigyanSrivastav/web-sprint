"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle({
  size = "icon",
  variant = "outline",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      title="Toggle Theme"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size={size}
      variant={variant}
      {...props}
    >
      <SunIcon className="dark:hidden" />
      <MoonIcon className="hidden dark:block" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  )
}
