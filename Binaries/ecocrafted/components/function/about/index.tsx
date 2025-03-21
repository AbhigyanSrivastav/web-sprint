export function About() {
  return (
    <section className="flex flex-col gap-14 w-full">
      <div className="flex flex-col gap-7">
        <h1 className="text-4xl font-semibold md:text-5xl lg:text-7xl">
          Created By: Team Binaries
        </h1>
        <p className="max-w-xl text-lg">
          <strong>Handmade Crafts Marketplace 🏺</strong>
          <br />A storefront for handmade and eco-friendly artisan products like
          pottery, candles, and jewelry.
        </p>

        <h2 className="mt-4 text-xl font-semibold">Core Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            ✅ <strong>Handmade Story Section</strong> – Showcase artisans
            behind each product.
          </li>
          <li>
            ✅ <strong>Sustainable Badges</strong> – Highlight{" "}
            <em>"100% Handmade," "Eco-Friendly," "Fair Trade"</em> on products.
          </li>
          <li>
            ✅ <strong>Zoom & Texture Detail</strong> – High-resolution zoom on
            product details to highlight craftsmanship.
          </li>
          <li>
            ✅ <strong>Bidding Feature</strong> – Allow users to bid for
            one-of-a-kind crafts (optional feature).
          </li>
          <li>
            ✅ <strong>Color & Material Variants</strong> – Swap between product
            variations dynamically.
          </li>
        </ul>

        <h2 className="mt-4 text-xl font-semibold">Additional Challenges</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            ✅ <strong>Artist Profiles</strong> – Users can follow favorite
            artisans.
          </li>
          <li>
            ✅ <strong>AR Showroom</strong> – Users can preview how decor items
            will look in their space.
          </li>
        </ul>
      </div>
    </section>
  )
}

function Content() {}

function Slides() {}
