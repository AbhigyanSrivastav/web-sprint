import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AdminHeader } from "./header"
import { SideBar } from "./sidebar"

export default function Admin({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider className="w-full">
      <SideBar />
      <SidebarInset className="relative">
        <AdminHeader />
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
