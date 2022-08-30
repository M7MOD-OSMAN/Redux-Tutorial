import React, { useState } from 'react'
import { addUser } from '../../store/userSlice'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import './Form.css'
const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({ name, email }))
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Enter Name'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <input
          type='email'
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <input type='submit' placeholder='Add user' />
      </div>
    </form>
  )
}

export default Form
