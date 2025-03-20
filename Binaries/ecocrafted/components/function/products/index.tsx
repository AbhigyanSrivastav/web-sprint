"use client"

import { ArrowUpRight, Wine } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useState } from "react"
import { Crafts } from "@/data/data"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("")
  const filteredCrafts = Crafts.filter(
    (craft) =>
      craft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      craft.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      craft.artist.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="flex flex-col gap-14">
      <div className="flex flex-col gap-7">
        <h1 className="text-4xl font-semibold md:text-5xl lg:text-7xl">
          Discover Eco-Friendly Artisan Creations
        </h1>
        <p className="max-w-xl text-lg">
          Crafted with passion, treasured for life. Explore our collection of
          handmade crafts, artisan marketplace, eco-friendly products, and
          unique handmade items.
        </p>
      </div>

      <div className="w-full max-w-lg relative">
        <Input
          type="text"
          placeholder="Search for handmade crafts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-3"
        />
        <SearchIcon
          className="absolute top-1.5 left-2 w-6 h-6 text-gray-500"
          size={18}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {filteredCrafts.length > 0 ? (
          filteredCrafts.map((craft, i) => (
            <Card key={i}>
              <CardHeader className="relative">
                <ArrowUpRight className="absolute right-3 -top-3" />

                <CardTitle className="text-xl">{craft.name}</CardTitle>
                <CardDescription className="text-foreground">
                  {craft.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="overflow-hidden h-32 group hover:h-64 transition-all duration-700">
                <img
                  src={craft.image}
                  alt={craft.name}
                  className="w-full h-full object-cover border border-dashed rounded-lg group-hover:scale-200 transition-all duration-700"
                />
              </CardContent>
              <CardFooter className="flex justify-between items-center relative">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={craft.artistImage} />
                    <AvatarFallback>ec</AvatarFallback>
                  </Avatar>
                  <div className="text-sm flex flex-col">
                    <p className="font-semibold">
                      {"@"}
                      {craft.artist}
                    </p>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <button className="flex space-x-3 underline underline-offset-2">
                          Read Story <Wine size={16} />
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                          <Avatar>
                            <AvatarImage src={craft.artistImage} />
                            <AvatarFallback>ec</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">
                              {craft.artist}
                            </h4>
                            <p className="text-sm">{craft.story}</p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
                <div className="flex gap-1">
                  {craft.badge.map((badge, index) => (
                    <Badge key={index} className="bg-amber-700 text-white">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-lg text-gray-500 col-span-full text-center">
            No crafts found matching your search.
          </p>
        )}
      </div>
    </section>
  )
}
