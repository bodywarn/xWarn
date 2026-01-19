import { Routes, Route } from 'react-router-dom'
import Profile from './Profile'
import PageNotFound from './PageNotFound'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
