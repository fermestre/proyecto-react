import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header id='header'>
        <h1>Instrumentos Vo Javés</h1>

          <article>

          <Link to="/cart" id='icons' >
            <FontAwesomeIcon icon={faCartPlus} />
          </Link>

          </article>
    </header>
  )
}

export default Header