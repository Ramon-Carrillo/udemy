import { useState } from 'react'
import { projectAuth } from '../firebase/config'

const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (displayName, email, password) => {
    setError(null)
    setIsPending(true)
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password,
      )

      if (!res) {
        throw new Error('Could not complete signup')
      }

      await res.user.updateProfile({ displayName })

      setIsPending(false)
      setError(null)
    } catch (error) {
      console.log(error)
      setError(error.message)
      setIsPending(false)
    }
  }

  return { error, isPending, signup }
}
export default useSignup