
import { auth, googleProvider } from '../../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';




export const Auth = () => {

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")



  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, Email, Password)
    } catch (err) {
      console.log(err)
    }
  }


  const GoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log(error)
    }
  }

  const LogOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email..." />

        <input
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)} />

        <button onClick={signIn}>Sign In</button>
        <button onClick={GoogleLogin} > Google </button>
        <button onClick={LogOut}>LogOut</button>
      </div>
    </>
  );
};
