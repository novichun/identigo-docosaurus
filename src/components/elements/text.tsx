import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Text({
  children,
  className,
  size = 'md',
  color = 'dark/light',
  ...props
}: ComponentProps<'div'> & {
  size?: 'md' | 'lg'
  color?: 'dark/light' | 'light'
}) {
  return (
    <div
      className={clsx(
        size === 'md' && 'text-base/7',
        size === 'lg' && 'text-lg/8',
        color === 'dark/light' && 'text-mist-700 dark:text-mist-400',
        color === 'light' && 'text-white/70',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
