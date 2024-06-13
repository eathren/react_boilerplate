import { QueryClient } from '@tanstack/react-query'
import { createBrowserRouter } from 'react-router-dom'
import { AppRoot } from './app/root'

export const createRouter = (queryClient: QueryClient) =>
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
      element: <AppRoot />,
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./not-found')
        return { Component: NotFoundRoute }
      },
    },
  ])
