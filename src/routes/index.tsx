import { createFileRoute } from '@tanstack/react-router'
import HomeRoute from '@/components/RoutesImplementation/HomeRoute'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <section>
      <HomeRoute />
    </section>
  )
}
