import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import DeleteAccountPage from './pages/DeleteAccountPage'

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
      </Routes>
    </BrowserRouter>
  )
}
