import { Route, Router } from 'electron-router-dom'

import { ThemeProvider } from './components/theme-provider'
import { RootLayout } from './layouts/root'
import { Home } from './pages/home'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router
        main={
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        }
      />
    </ThemeProvider>
  )
}
