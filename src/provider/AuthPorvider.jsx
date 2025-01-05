import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { useEffect, useState } from "react"
import { createContext } from "react"
import { auth } from "../firebase/firebase.config"

export const authContext = createContext(null)
function AuthPorvider({children}) {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,currentUser => {
      setUser(currentUser)
      console.log('currentUser', currentUser)
      setLoading(false)
    });
    return () => {
        return unSubscribe()
    }
  },[])

  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signInUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name,photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser,{
      displayName : name, photoURL: photo
    })
    
  }

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUserProfile
  }

  return (
    <authContext.Provider value={authInfo}>
  {children}
    </authContext.Provider>
  )
}

export default AuthPorvider