import { createFileRoute } from '@tanstack/react-router'
import Fundamentals from '@/components/RoutesImplementation/Fundamentals'

export const Route = createFileRoute('/fundamentals')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Fundamentals />
    </div>
  )
}
