import { Navbar } from '@/Components/Layout'
import { createRootRoute, Outlet, createRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useContext } from 'react'
import ThemeContext  from '../Utils/Context/ThemeContex'

export const Route = createRootRoute({
  component: () => {
    const toggleTheme = useContext(ThemeContext)
    return (
      <>
        <Navbar toggleTheme={toggleTheme}/>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    )
  },
})
