import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: () => <div className="flex w-full flex-1 items-center justify-center">Hello /about!</div>,
})
