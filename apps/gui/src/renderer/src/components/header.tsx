import { NavLink } from 'react-router-dom'

import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between bg-neutral-200 px-4 shadow-md dark:bg-neutral-900">
      <NavLink
        to="/"
        className="text-xl font-bold text-slate-900 hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-300"
      >
        Taurius Builder
      </NavLink>
      <div className="space-x-4">
        <NavLink
          to="/history"
          className="text-sm font-medium text-slate-900 hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-300"
        >
          Histórico de build
        </NavLink>
        <NavLink
          to="/projects"
          className="text-sm font-medium text-slate-900 hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-300"
        >
          Projetos
        </NavLink>

        <ThemeToggle />
      </div>
    </header>
  )
}
