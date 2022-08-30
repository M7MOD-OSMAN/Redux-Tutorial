import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Header = () => {
  const { name } = useSelector((state) => state.user)
  return (
    <nav>
      <h1>Logo</h1>
      <p>Welcome {name}</p>
    </nav>
  )
}

export default Header
