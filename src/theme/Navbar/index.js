import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ElPopover } from '@tailwindplus/elements/react';
import {
  NavbarWithLogoActionsAndLeftAlignedLinks,
  NavbarLogo,
  NavbarLink,
} from '../../components/sections/navbar-with-logo-actions-and-left-aligned-links';
import { PlainButtonLink, ButtonLink } from '../../components/elements/button';



export default function Navbar() {
  const routes = {
    kozosseg: useBaseUrl('/kozosseg'),
    ebook: useBaseUrl('/ebook'),
    blog: useBaseUrl('/blog'),
    docs: useBaseUrl('/docs'),
    akademia: useBaseUrl('/akademia'),
    forum: 'https://forum.identigo.hu',
  };

  const dropdownContent = (
    <>
      <div className="space-y-4 p-2 bg-mist-50">
        <div className="rounded-2xl border border-gray-200 bg-white/70 p-2 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 text-slate-500">
              <path
                d="M4.5 6.75h10.5M4.5 12h7.5M4.5 17.25h10.5M16.5 5.25h3.75v13.5H16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            PMT tudás
          </div>
          <div className="p-2">
          <div className="group relative flex flex-col rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-white/5">
            <a
              href={routes.forum}
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center gap-2 font-semibold text-slate-900 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="size-5 text-blue-500/80 dark:text-blue-300"
              >
                <path
                  d="M8.625 10.5h6.75m-6.75 3h3.75M6.75 18.75h7.5A2.25 2.25 0 0 0 16.5 16.5V7.5A2.25 2.25 0 0 0 14.25 5.25h-4.5L6.75 8.25v8.25Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Fórum</span>
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-slate-600 dark:text-slate-300">Kérdések, válaszok, tapasztalatok</p>
          </div>
          <div className="group relative flex flex-col rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-white/5">
            <a
              href={routes.kozosseg}
              className="relative flex items-center gap-2 font-semibold text-slate-900 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="size-5 text-blue-500/80 dark:text-blue-300"
              >
                <path
                  d="M18 18.75a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm4.5 2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-15 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Szakmai közösség</span>
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-slate-600 dark:text-slate-300">Találkozók és partnerségek</p>
          </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-2 dark:border-white/10 dark:bg-gray-800/60">
          <div className="flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200">
            <img src="https://identigo.hu/favicon/apple-touch-icon.png" alt="identiGO" className="size-4 rounded" />
            identiGO
          </div>
          <div className="p-2">
            <div className="group relative flex flex-col rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-white/5">
              <a
                href={routes.docs}
              className="relative flex items-center gap-2 font-semibold text-slate-900 hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="size-5 text-primary dark:text-primary"
                >
                  <path
                    d="M5.25 4.5h9a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 3 17.25V6.75A2.25 2.25 0 0 1 5.25 4.5Zm9 0h4.5v12.75a2.25 2.25 0 0 1-2.25 2.25H14.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Dokumentáció</span>
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-slate-600 dark:text-slate-300">Leírások, útmutatók és összefoglalók</p>
            </div>
            <div className="group relative flex flex-col rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-white/5">
              <a
                href={routes.ebook}
              className="relative flex items-center gap-2 font-semibold text-slate-900 hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="size-5 text-primary dark:text-primary"
                >
                  <path
                    d="M12 6.75c-2.25-1.5-4.5-1.5-6.75 0v10.5c2.25-1.5 4.5-1.5 6.75 0m0-10.5c2.25-1.5 4.5-1.5 6.75 0v10.5c-2.25-1.5-4.5-1.5-6.75 0m0-10.5v10.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>E-book</span>
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-slate-600 dark:text-slate-300">Letölthető útmutatók és kiadványok</p>
            </div>
            <div className="group relative flex flex-col rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-white/5">
              <a
                href={routes.kozosseg}
              className="relative flex items-center gap-2 font-semibold text-slate-900 hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="size-5 text-primary dark:text-primary"
                >
                  <path
                    d="M17.25 18.75a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Facebook csoport</span>
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-slate-600 dark:text-slate-300">Közösségi beszélgetések és hírek</p>
            </div>
            <div className="group relative flex flex-col rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-white/5">
              <a
                href={routes.blog}
              className="relative flex items-center gap-2 font-semibold text-slate-900 hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="size-5 text-primary dark:text-primary"
                >
                  <path
                    d="M16.862 4.487 19.5 7.125m-1.638-2.638L7.5 14.85l-3 1 1-3L14.862 3.487a2.25 2.25 0 0 1 3 1Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Blog</span>
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-slate-600 dark:text-slate-300">Cikkek, tippek, esettanulmányok</p>
            </div>
            <div className="group relative flex flex-col rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-white/5">
              <a
                href={routes.akademia}
                className="relative flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="size-5 text-primary dark:text-primary"
                >
                  <path
                    d="M12 6 3.75 10.5 12 15l8.25-4.5L12 6Zm0 9v3.75M3.75 10.5v4.5L12 19.5l8.25-4.5v-4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Identigo Akadémia</span>
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-slate-600 dark:text-slate-300">Képzések és anyagok</p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );

  return (
    <>
      <NavbarWithLogoActionsAndLeftAlignedLinks
        id="navbar"
        logo={
          <NavbarLogo href={useBaseUrl('/')}>
            <img
              src="https://identigo.hu/img/logo.png"
              alt="identiGO"
              className="dark:hidden"
              width={85}
              height={28}
            />
            <img
              src="https://identigo.hu/img/logo.png"
              alt="identiGO"
              className="not-dark:hidden"
              width={85}
              height={28}
            />
          </NavbarLogo>
        }
        links={
          <>
            <NavbarLink href={useBaseUrl('/#funkciok')}>Funkciók</NavbarLink>
            <NavbarLink href={useBaseUrl('/arak')}>Árak</NavbarLink>
            <div className="relative">
              <button
                popoverTarget="desktop-menu-knowledge"
                className="inline-flex items-center gap-x-1 text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                <span>Tudásbázis</span>
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
                  <path
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </button>

              <ElPopover
                id="desktop-menu-knowledge"
                anchor="bottom"
                popover="auto"
                className="w-screen max-w-max overflow-visible bg-transparent px-4 transition transition-discrete [--anchor-gap:--spacing(5)] backdrop:bg-transparent open:flex data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent">
                    {dropdownContent}
                  </div>
                </div>
              </ElPopover>
            </div>
          </>
        }
        actions={
          <>
            <PlainButtonLink href="#" className="max-sm:hidden">
              Regisztráció
            </PlainButtonLink>
            <ButtonLink href="#">Bejelentkezés</ButtonLink>
          </>
        }
      />
    </>
  );
}
