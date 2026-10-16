import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import DeleteAccountPage from './pages/DeleteAccountPage'
import ContactPage from './pages/ContactPage'
import CancellationsPage from './pages/CancellationsPage'

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cancellations" element={<CancellationsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
