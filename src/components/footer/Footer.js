import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <Link className="nav-link px-2 text-muted" to={"/"}> Home</Link>
            <Link className="nav-link px-2 text-muted" to={"/"} > Features</Link>
            <Link className="nav-link px-2 text-muted" to={"/"}> Pricing</Link>
            <Link className="nav-link px-2 text-muted" to={"/"}> FAQs</Link>
            <Link className="nav-link px-2 text-muted" to={"/"}> About</Link>
          </ul>
          <p  className="text-center text-muted">© 2021 Company, Inc</p>
        </footer>
      </div>
    )
}
