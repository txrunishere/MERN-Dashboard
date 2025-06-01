import { Outlet } from 'react-router'
import { Navbar } from '../components'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
