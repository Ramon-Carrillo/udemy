import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

import styles from './Signup.module.css'

const Signup = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(displayName, email, password)
  }

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <label>
        <span>User Name:</span>
        <input type='text' onChange={(e) => setDisplayName(e.target.value)} />
      </label>
      <label>
        <span>Email:</span>
        <input type='email' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>Password:</span>
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      {!isPending && <button className='btn'>Signup</button>}
      {isPending && (
        <button className='btn' disabled>
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  )
}
export default Signup
