import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/styles.css'

export const HomeLinkButton = () => {
  return <Link to={'/'}>
  <button className="button is-link HomeLinkButton">
    Volver al buscador
  </button>
</Link>
}
