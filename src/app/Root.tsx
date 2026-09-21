import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
