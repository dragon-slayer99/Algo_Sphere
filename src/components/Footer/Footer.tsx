import { Link } from '@tanstack/react-router'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{ fontSize: '2rem' }}>
        <span
          style={{
            color: 'var(--secondary-200)',
            fontWeight: '900',
            fontFamily: 'var(--font-primary)',
          }}
        >
          Algo
        </span>
        <span style={{ color: 'var(--primary-400)', fontWeight: '700'}}>Sphere</span>
      </div>

      <nav className={styles.footerlinks}>
        <Link to="/core" className={styles.menulinks}>
          /Core
        </Link>

        <Link to="/patterns" className={styles.menulinks}>
          /Patterns
        </Link>

        <Link to="/advance" className={styles.menulinks}>
          /Advance
        </Link>
      </nav>

      <p className={styles.footercopy}>
        Licensed under the MIT License.
      </p>
    </footer>
  )
}
export default Footer
