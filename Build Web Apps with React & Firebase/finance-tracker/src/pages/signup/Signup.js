import { useState } from 'react'

import styles from './Signup.module.css'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, email, password)
  }

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <label>
        <span>User Name:</span>
        <input type='text' onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        <span>Email:</span>
        <input type='email' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>Password:</span>
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className='btn'>Signup</button>
    </form>
  )
}
export default Signup
