import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ElDialog, ElDialogPanel } from '@tailwindplus/elements/react'
import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'

export function NavbarLink({
  children,
  href,
  className,
  ...props
}: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <a
      href={href}
      className={clsx(
        'group inline-flex items-center justify-between gap-2 text-3xl/10 font-medium text-mist-950 lg:text-sm/7 dark:text-white',
        className,
      )}
      {...props}
    >
      {children}
      <span className="inline-flex p-1.5 opacity-0 group-hover:opacity-100 lg:hidden" aria-hidden="true">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </span>
    </a>
  )
}

export function NavbarDropdown({
  title,
  children,
  className,
  ...props
}: { title: ReactNode } & ComponentProps<'div'>) {
  return (
    <Popover className={clsx(className)}>
      <PopoverButton className="inline-flex w-full items-center justify-between gap-2 text-3xl/10 font-medium text-mist-950 lg:w-auto lg:justify-start lg:text-sm/7 dark:text-white focus:outline-none">
        {title}
        <ChevronDownIcon aria-hidden="true" className="size-5 text-mist-950/50 lg:size-4 dark:text-white/50" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute inset-x-0 top-16 z-20 bg-white transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-mist-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {children}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

export function NavbarLogo({ className, href, ...props }: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return <a href={href} {...props} className={clsx('inline-flex items-stretch', className)} />
}

export function NavbarWithLogoActionsAndLeftAlignedLinks({
  links,
  logo,
  actions,
  className,
  ...props
}: {
  logo: ReactNode
  links: ReactNode
  actions: ReactNode
} & ComponentProps<'header'>) {
  return (
    <header className={clsx('sticky top-0 z-10 bg-mist-100 dark:bg-mist-950', className)} {...props}>
      <style>{`:root { --scroll-padding-top: 5.25rem }`}</style>
      <nav>
        <div className="mx-auto flex h-(--scroll-padding-top) max-w-7xl items-center gap-4 px-6 lg:px-10">
          <div className="flex flex-1 items-center gap-12">
            <div className="flex items-center">{logo}</div>
            <div className="flex gap-8 max-lg:hidden">{links}</div>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="flex shrink-0 items-center gap-5">{actions}</div>

            <button
              command="show-modal"
              commandfor="mobile-menu"
              aria-label="Toggle menu"
              className="inline-flex rounded-full p-1.5 text-mist-950 hover:bg-mist-950/10 lg:hidden dark:text-white dark:hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path
                  fillRule="evenodd"
                  d="M3.748 8.248a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.748 15.75a.75.75 0 0 1 .75-.751h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <ElDialog className="lg:hidden">
          <dialog id="mobile-menu" className="backdrop:bg-transparent">
            <ElDialogPanel className="fixed inset-0 bg-mist-100 px-6 py-6 lg:px-10 dark:bg-mist-950">
              <div className="flex justify-end">
                <button
                  command="close"
                  commandfor="mobile-menu"
                  aria-label="Toggle menu"
                  className="inline-flex rounded-full p-1.5 text-mist-950 hover:bg-mist-950/10 dark:text-white dark:hover:bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-6">{links}</div>
            </ElDialogPanel>
          </dialog>
        </ElDialog>
      </nav>
    </header>
  )
}
