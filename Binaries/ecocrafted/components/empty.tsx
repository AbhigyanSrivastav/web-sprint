import { CircleSlash, LucideProps } from "lucide-react"

interface EmptyUIProps extends LucideProps {
  className?: string
}

export function EmptyUI({ className, ...props }: EmptyUIProps) {
  return (
    <div
      className={`m-auto flex h-10 w-10 items-center justify-center ${className}`}
    >
      <CircleSlash
        className="mb-0.5 shrink-0"
        color="currentColor"
        size={22}
        {...props}
      />
      <span className="ml-2.5 text-nowrap">Nothing to show</span>
    </div>
  )
}
