import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Searchbar.css'

const Searchbar = () => {
  const [term, setTerm] = useState('')
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search?q=${term}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search:</label>
        <input
          type='text'
          id='search'
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  )
}
export default Searchbar
