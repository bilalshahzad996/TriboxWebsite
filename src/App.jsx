import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import ServicePage from './components/ServicePage'
import { servicePages } from './data/servicePages'
import { productPages } from './data/productPages'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

// Shared by the browser (App) and the build-time prerender (entry-server.jsx)
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* Service and product pages come from data/servicePages.js and data/productPages.js; other new pages also need an entry in src/entry-server.jsx */}
        {[...servicePages, ...productPages].map((p) => (
          <Route key={p.path} path={p.path.replace(/\/$/, '')} element={<ServicePage page={p} />} />
        ))}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
