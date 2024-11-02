import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="left"></div>
        <div className="right">
            <ul>
                <li>
                    <Link to="/create">Create Product + </Link>
                </li>
                <li>
                    <Link>Login</Link>
                </li>
                <li>
                    <Link to="">Logout</Link>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
