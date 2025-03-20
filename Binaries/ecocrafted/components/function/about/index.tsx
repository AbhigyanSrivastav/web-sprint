import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { About as AboutData } from "@/data/data"

export function About({ home = false }: { home?: boolean }) {
  return (
    <section
      id="about"
      className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur
      eaque labore earum saepe rerum minus. Vitae molestias ut reprehenderit
      reiciendis autem nostrum explicabo quaerat, odit nesciunt corrupti ipsam!
      Sapiente?
    </section>
  )
}

function Content() {}

function Slides() {}
