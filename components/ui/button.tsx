import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border border-border/40 text-foreground shadow-[0_0_12px_rgba(34,42,53,0.04)] hover:bg-white/90 dark:hover:bg-neutral-950/90 hover:shadow-[0_0_24px_rgba(34,42,53,0.06)]",
        destructive:
          "bg-destructive/80 backdrop-blur-md text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-border/40 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-md shadow-[0_0_12px_rgba(34,42,53,0.04)] hover:bg-white/60 dark:hover:bg-neutral-950/60 hover:shadow-[0_0_24px_rgba(34,42,53,0.06)]",
        secondary:
          "bg-secondary/80 backdrop-blur-md text-secondary-foreground shadow-xs hover:bg-secondary/90",
        ghost:
          "hover:bg-accent/50 hover:text-accent-foreground dark:hover:bg-accent/30 backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-8 py-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
