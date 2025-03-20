import { DotIcon } from "lucide-react"
import Products from "@/components/function/products"
import { Hero } from "@/components/function/site/hero"

export default function PageHome() {
  return (
    <>
      <Hero />
      <div className="text-border relative w-full border-t border-dashed">
        <DotIcon className="absolute -top-[12px] -left-2.5" />
        <DotIcon className="absolute -top-[12px] -right-2.5" />
      </div>
      <Products />
    </>
  )
}
