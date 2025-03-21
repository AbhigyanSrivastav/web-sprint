import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <section className="flex flex-col gap-14 w-full">
      <div className="flex flex-col gap-7">
        <h1 className="text-4xl font-semibold md:text-5xl lg:text-7xl">
          Get in Touch
        </h1>
        <p className="max-w-xl text-lg">
          Have any questions or custom craft requests? Fill out the form below,
          and well get back to you soon!
        </p>
      </div>

      <form className="flex flex-col gap-6 max-w-lg">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Your Name</label>
          <Input type="text" placeholder="John Doe" required />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Email Address</label>
          <Input type="email" placeholder="you@example.com" required />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Message</label>
          <Textarea placeholder="Write your message here..." required />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  )
}
