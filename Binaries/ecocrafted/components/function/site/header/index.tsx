"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { HeaderProvider } from "@/components/shared/header"
import { LoadingUI } from "@/components/loading"
import { ThemeToggle } from "@/components/theme-toggle"
import { useIsMobile } from "@/hooks/use-mobile"
import { SiteIcon } from "@/lib/icons"

const DYN_Nav = {
  Desk: dynamic(() => import("./nav").then((i) => i.NavDesk), {
    loading: () => <LoadingUI />,
  }),
  Mob: dynamic(() => import("./nav").then((i) => i.NavMob), {
    loading: () => <LoadingUI />,
  }),
  Opt: dynamic(() => import("./nav").then((i) => i.NavOpt), {
    loading: () => <LoadingUI />,
  }),
}

export function SiteHeader() {
  const [hasMounted, setHasMounted] = useState(false)
  const isMobile = useIsMobile()
  const currentPath = usePathname()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <HeaderProvider container>
      <Button
        aria-label="Home"
        size="icon"
        variant="ghost"
        className="rounded-full"
        asChild
      >
        <Link href="/">
          <SiteIcon className="size-8 fill-current" />
        </Link>
      </Button>
      <div className="flex items-center gap-2">
        {!hasMounted ? (
          <LoadingUI />
        ) : isMobile ? (
          <DYN_Nav.Mob currentPath={currentPath} />
        ) : (
          <DYN_Nav.Desk currentPath={currentPath} />
        )}
        <span className="mx-1 h-4 border-l" />
        <DYN_Nav.Opt />
        <ThemeToggle />
      </div>
    </HeaderProvider>
  )
}
