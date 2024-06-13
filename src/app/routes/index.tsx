import { createBrowserRouter } from 'react-router-dom'
import { AppRoot } from './app/root'

// import { ProtectedRoute } from "@/lib/auth"

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { LandingRoute } = await import('./landing.tsx')
        return { Component: LandingRoute }
      },
    },
    {
      path: '/auth/signup',
      lazy: async () => {
        const { SignupRoute } = await import('./auth/signup')
        return { Component: SignupRoute }
      },
    },
    {
      path: '/auth/login',
      lazy: async () => {
        const { LoginRoute } = await import('./auth/login')
        return { Component: LoginRoute }
      },
    },
    {
      path: '/app',
      element: (
        // <ProtectedRoute>
        <AppRoot />
        // </ProtectedRoute>
      ),
    },
    // {
    //   path: "*",
    //   lazy: async () => {
    //     const { NotFoundRoute } = await import("./not-found")
    //     return { Component: NotFoundRoute }
    //   },
    // },
  ])
