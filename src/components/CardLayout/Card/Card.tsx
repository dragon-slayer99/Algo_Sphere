import { Link } from '@tanstack/react-router'
import styles from './Card.module.css'

function Card({ title, desc, link, space, time }) {
  return (
    <div className={`${styles.cardcontainer} ${styles.fadeUp}`}>
      <Link to={link}>
        {' '}
        <h1 className={styles.cardtitle}>{title}</h1>
      </Link>

      <p>
        {desc}
      </p>
      {/* O(log&nbsp;n), O(n&nbsp;log&nbsp;n) */}
      <div className={styles.complexitybadges}>
        <span className={styles.complexity}>Time: {time}</span>
        <span className={styles.complexity}>Space: {space}</span>
      </div>
    </div>
  )
}
export default Card
