import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
// Privacy Policy hidden for now; uncomment to bring it back
// import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* Privacy Policy hidden for now; uncomment to bring it back */}
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
