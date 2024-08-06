import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const RootComponent = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="flex gap-2 p-2 text-lg">
        <Link
          activeOptions={{ exact: true }}
          activeProps={{
            className: 'font-bold',
          }}
          to="/"
        >
          Home
        </Link>{' '}
        <Link
          activeProps={{
            className: 'font-bold',
          }}
          to={'/about'}
        >
          About
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
