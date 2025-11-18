import { createFileRoute } from '@tanstack/react-router'
import PatternRoute from '@/components/RoutesImplementation/PatternRoute'

export const Route = createFileRoute('/patterns')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section>
      <PatternRoute />
    </section>
  )
}
