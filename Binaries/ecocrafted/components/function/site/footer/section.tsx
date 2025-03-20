import { cn } from "@/lib/utils"

export function Section({
  children,
  as: Tag = "div",
  className,
}: {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}) {
  return (
    <section className="border-t border-dashed">
      <Tag className={cn("container py-10", className)}>{children}</Tag>
    </section>
  )
}
