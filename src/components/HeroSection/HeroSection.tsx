import { Link } from '@tanstack/react-router'
import style from './HeroSection.module.css'

function HeroSection() {
  return (
    <main className={style.container}>
      <h1 className={style.title}>Snippets for <br />every algorithm</h1>
      <p className={style.subtitle}>
        Simplified code examples and implementations of core data structures and
        algorithms — always accessible when you need them.
      </p>
      <Link to="/Fundamentals" className={style.getstartedbtn}>
        Get Started
      </Link>
    </main>
  )
}
export default HeroSection
