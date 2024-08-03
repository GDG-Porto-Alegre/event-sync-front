import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => <div className="flex w-full flex-1 items-center justify-center">Hello /about!</div>,
})
