import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
// Privacy Policy hidden for now; uncomment to bring it back (and add it to scripts/prerender.js)
// import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

// Shared by the browser (App) and the build-time prerender (entry-server.jsx)
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* Privacy Policy hidden for now; uncomment to bring it back */}
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
