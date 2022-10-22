import { Link } from "react-router-dom"
import styles from './WishlistCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const WishlistCard = ({ wishlist }) => {
  return (
    <>
      <Link to={`/wishlists/1`}>
        <article className={styles.container}>
          <h2>
            {wishlist.name}
          </h2>
          <p>
            {wishlist.description}
          </p>
        </article>
      </Link>
    </>
  )
}

export default WishlistCard