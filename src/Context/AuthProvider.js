import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)
    // crease user using email and password
    const createUser = ( email, password) =>{
        setLoading(true)
         return  createUserWithEmailAndPassword(auth,email, password)
         
    }
    // googleSignIn
    const googleSign = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    //logout/ signOut 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //update profile
    const updateUser = (userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }
    //login
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    //observer (je user login kora ase naki nai eta dhakar jonno)
    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
            
        });
        return () => {
            return unSubscribe
        }
    }, []) 
    const authInfo = {createUser, googleSign, loading, user, refresh, setRefresh, logOut, updateUser, signIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;