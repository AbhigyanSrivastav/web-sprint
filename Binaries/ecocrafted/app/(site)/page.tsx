import { Contact, DotIcon } from "lucide-react"
import Products from "@/components/function/products"
import { Hero } from "@/components/function/site/hero"
import ContactForm from "@/components/function/contact-form"
import { Social } from "@/data/data"
import { Button } from "@/components/ui/button"

export default function PageHome() {
  return (
    <>
      <Hero />
      <div className="text-border relative w-full border-t border-dashed">
        <DotIcon className="absolute -top-[12px] -left-2.5" />
        <DotIcon className="absolute -top-[12px] -right-2.5" />
      </div>
      <Products />
      <div className="text-border relative w-full border-t border-dashed">
        <DotIcon className="absolute -top-[12px] -left-2.5" />
        <DotIcon className="absolute -top-[12px] -right-2.5" />
      </div>
      <ContactForm />
      <div className="text-border relative w-full border-t border-dashed">
        <DotIcon className="absolute -top-[12px] -left-2.5" />
        <DotIcon className="absolute -top-[12px] -right-2.5" />
      </div>
      <div className="flex space-x-2">
        {Social.map((s) => (
          <Button
            key={s.name}
            variant={"ghost"}
            size={"icon"}
            aria-label={s.name}
            asChild
          >
            <a href={s.link} target="_blank" rel="noopener noreferrer">
              <img src={s.icon} alt={s.name} className="size-4 dark:invert" />
            </a>
          </Button>
        ))}
      </div>
    </>
  )
}
