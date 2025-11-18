import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { links } from '../links'
import styles from './Header.module.css'

function Header() {
  const [search, setSearch] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [mouseState, setMouseState] = useState(false)

  const handleFocus = () => {
    setShowResults(true)
  }

  const handleBlur = () => {
    setShowResults(false)
  }

  return (
    <header className={styles.nav}>
      <div className={styles.navinner}>
        <a href="/" className={styles.brand}>
          <span style={{ fontSize: '2rem' }}>
            <span
              style={{
                color: 'var(--secondary-200)',
                fontWeight: '900',
                fontFamily: 'var(--font-primary)',
              }}
            >
              Algo
            </span>
            <span style={{ color: 'var(--primary-400)' }}>Sphere</span>
          </span>
        </a>

        {/* Hamburger menu */}

        <input type="checkbox" className={styles.menutoggle} id="menu-toggle" />
        <label htmlFor="menu-toggle" className={styles.hamburger}>
          <span></span>
        </label>

        <ul className={styles.menu}>
          <li>
            <Link to="/core" className={styles.menulinks}>
              Core
            </Link>
          </li>
          <li>
            <Link to="/patterns" className={styles.menulinks}>
              Patterns
            </Link>
          </li>
          <li>
            <Link to="/advance" className={styles.menulinks}>
              Advance
            </Link>
          </li>
          {/* <li><a href="#" className={styles.menulinks}>Contact</a></li> */}

          <div className={styles.search}>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Global Search..."
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <button type="button">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
            <span
              className={styles.searchcontainer}
              onMouseEnter={() => setMouseState(true)}
              onMouseLeave={() => setMouseState(false)}
              style={{
                display:
                  (search !== '' && showResults) || mouseState
                    ? 'flex'
                    : 'none',
              }}
            >
              {(() => {
                const filteredLinks = links.filter((item) => {
                  return search === ''
                    ? false
                    : item.name.toLowerCase().includes(search.toLowerCase())
                })

                if (filteredLinks.length === 0 && search !== '') {
                  return <div className={styles.noresult}>No results found</div>
                }

                return filteredLinks.map((item) => (
                  <a
                    key={item.id}
                    href={`${item.link}`}
                    className={styles.searchcontent}
                  >
                    {item.name}
                  </a>
                ))
              })()}
            </span>
          </div>
        </ul>
      </div>
    </header>
  )
}
export default Header
