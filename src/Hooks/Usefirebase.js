import { useEffect, useState } from "react"
import initializeAuthentication from "../Components/Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut} from "firebase/auth";

initializeAuthentication()
const googleProvider = new GoogleAuthProvider();
const Usefirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const auth = getAuth();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
  .then(result => {
   console.log(result.user);
    setUser(result.user);
    
  })
  .catch(error => {
      setError(error.message);
  })
    }

    const logOut = () => {
        signOut(auth)
        .then(result => {
         
          setUser({});
          
        })
    }

    useEffect (() => {
       const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
             
             console.log('inside state change', user);
            setUser(user);
            }
            else{
                setUser({})
            }
        })
        return () => unsubscribed;
    },[])
    return{
        user,
        error,
        signInUsingGoogle,
        logOut,
    }
}
export default Usefirebase;