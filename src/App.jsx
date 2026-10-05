import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Careers from './pages/Careers'
import ServicePage from './components/ServicePage'
import { servicePages } from './data/servicePages'
// Privacy Policy hidden for now; uncomment to bring it back (and add it to src/entry-server.jsx)
// import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

// Shared by the browser (App) and the build-time prerender (entry-server.jsx)
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* Service pages come from data/servicePages.js; other new pages also need an entry in src/entry-server.jsx */}
        {servicePages.map((p) => (
          <Route key={p.path} path={p.path.replace(/\/$/, '')} element={<ServicePage page={p} />} />
        ))}
        <Route path="/careers" element={<Careers />} />
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
