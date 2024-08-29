import { Route, Router } from 'electron-router-dom'

import { RootLayout } from './layouts/root'
import { Home } from './pages/home'

export function App() {
  return (
    <Router
      main={
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      }
    />
  )
}
