import { createFileRoute } from '@tanstack/react-router'
import AdvanceRoute from '@/components/RoutesImplementation/AdvanceRoute'

export const Route = createFileRoute('/advance')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section>
      <AdvanceRoute />
    </section>
  )
}
