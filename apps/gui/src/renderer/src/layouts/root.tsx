import { Outlet } from 'react-router-dom'

// import { Background } from '@/components/background-waves'
import { Header } from '../components/header'

export function RootLayout() {
  return (
    <div className="min-w-screen flex h-screen min-h-screen flex-col overflow-hidden bg-neutral-100 font-sans antialiased dark:bg-neutral-950 dark:text-white">
      <Header />
      {/* <Background /> */}
      <Outlet />
    </div>
  )
}
