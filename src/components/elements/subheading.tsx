import { clsx } from 'clsx/lite'
import { type ComponentProps } from 'react'

export function Subheading({
  children,
  color = 'dark/light',
  className,
  ...props
}: { color?: 'dark/light' | 'light' } & ComponentProps<'h2'>) {
  return (
    <h2
      className={clsx(
        'font-serif text-[2rem]/10 tracking-tight text-pretty sm:text-5xl/14',
        color === 'dark/light' && 'text-mist-950 dark:text-white',
        color === 'light' && 'text-white',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
