import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const ContextAuth = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
       return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currectUser => {
            setUser(currectUser)
            console.log(currectUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])


    const userInfo = {
        createNewUser,
        signinUser,
        user,
        logOutUser,
        loading
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

ContextAuth.propTypes = {
    children: PropTypes.node
}

export default ContextAuth;