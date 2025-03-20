import { Crafts } from "@/data/data"

export default async function PageProduct({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const craft = Crafts.find((item) => item.id === slug)

  if (!craft) {
    return <p className="text-red-500 text-center">Product not found.</p>
  }

  return (
    <section className="flex flex-col gap-14">
      <div className="flex flex-col gap-7">
        <h1 className="text-4xl font-semibold md:text-5xl lg:text-7xl">
          {craft.name}
        </h1>
        <p className="max-w-xl text-lg">{craft.description}</p>
      </div>

      <div className="flex gap-10">
        <img
          src={craft.image}
          alt={craft.name}
          className="w-96 h-96 object-cover border border-dashed rounded-lg"
        />

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Meet the Artist</h2>
          <div className="flex items-center gap-3">
            <img
              src={craft.artistImage}
              alt={craft.artist}
              className="w-14 h-14 rounded-full object-cover"
            />
            <span className="text-lg font-medium">{craft.artist}</span>
          </div>
          <p className="max-w-lg text-sm">{craft.story}</p>
        </div>
      </div>

      <div className="flex gap-2">
        {craft.badge.map((badge, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-amber-700 text-white text-sm rounded-full"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  )
}
