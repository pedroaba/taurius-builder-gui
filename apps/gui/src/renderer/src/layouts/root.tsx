import { Outlet } from 'react-router-dom'

import { Header } from '../components/header'

export function RootLayout() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}
