/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";
import { useEffect } from "react";
import { GoogleAuthProvider } from "firebase/auth";


export const Context = createContext(null);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const Contexts = ({children}) => {
    const [user , setUser] = useState(null);


    const CreateUser = (email,password,first_name,last_name,number) =>{
        return createUserWithEmailAndPassword(auth , email,password,first_name,last_name,number)
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    }

    const GoogleLogIn = () =>{
        return signInWithPopup(auth, provider)
    }

    const LogOut = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user=>{
            console.log(user);
            setUser(user);
        })
        return () =>{
            unSubscribe()
        }
    }, [])

    const info = {
        user, 
        loginUser,
        CreateUser,
        GoogleLogIn,
        LogOut
    }


    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    );
};

export default Contexts;