import { Crafts } from "@/data/data"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Products() {
  return (
    <section className="grid grid-cols-3 gap-2">
      {Crafts.map((craft, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{craft.name}</CardTitle>
            <CardDescription>{craft.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={craft.image} alt={craft.image} />
          </CardContent>
          {/* <CardFooter>
            <p>{craft.image}</p>
          </CardFooter> */}
        </Card>
      ))}
    </section>
  )
}
