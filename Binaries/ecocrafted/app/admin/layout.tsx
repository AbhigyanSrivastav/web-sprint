"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { toast } from "sonner"
import { LoadingUI } from "@/components/loading"

const DYN_Admin = {
  Dashboard: dynamic(() => import("@/components/function/admin")),
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [authStatus, setAuthStatus] = useState<boolean>(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAuthStatus() {
      const res = {
        success: true,
        status: 200,
        message: "Here, authentication check will happen. Welcoming after!",
      }
      console.log(res)
      setAuthStatus(res.success)
      setLoading(false)
      if (res.success) {
        toast.success(res.message)
      }
    }

    fetchAuthStatus()
  }, [])

  if (loading) {
    return <LoadingUI size={30} />
  }

  if (authStatus) {
    return <DYN_Admin.Dashboard>{children}</DYN_Admin.Dashboard>
  }

  // here i can return authentication component
  //   return <Auth />
}
