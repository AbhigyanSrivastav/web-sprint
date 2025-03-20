import Link from "next/link"
import { ChevronLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { HeaderProvider } from "@/components/shared/header"
import { ThemeToggle } from "@/components/theme-toggle"

export function AdminHeader() {
  return (
    <HeaderProvider>
      <div className="flex items-center gap-2">
        <SidebarTrigger
          variant={"outline"}
          className="size-9"
          title="Toggle Sidebar"
          aria-label="Toggle Sidebar"
        />
        <span className="mx-1 h-4 border-l" />
        <Button className="rounded-full" asChild>
          <Link href="/">
            <ChevronLeftIcon />
            Home
          </Link>
        </Button>
      </div>
      <ThemeToggle />
    </HeaderProvider>
  )
}
