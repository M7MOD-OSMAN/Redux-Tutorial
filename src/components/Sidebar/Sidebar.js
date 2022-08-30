import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Sidebar = () => {
  const { name } = useSelector((state) => state.user)

  return (
    <aside>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <li>
          <a href='#'>Hi {name}</a>
        </li>
        <li>
          <a href='#'>Log Out</a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
