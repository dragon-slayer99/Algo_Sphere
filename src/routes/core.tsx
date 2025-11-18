import { createFileRoute } from '@tanstack/react-router'
import CoreRoute from '@/components/RoutesImplementation/CoreRoute'

export const Route = createFileRoute('/core')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section>
      <CoreRoute />
    </section>
  )
}
