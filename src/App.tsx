import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { InteractiveCatalog } from './components/InteractiveCatalog'
import { PartProfile } from './components/PartProfile'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-slate-50">
        <Routes>
          <Route path="/" element={<InteractiveCatalog />} />
          <Route path="/part/:id" element={<PartProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
