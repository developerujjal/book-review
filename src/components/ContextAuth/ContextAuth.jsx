import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from "react";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const ContextAuth = ({ children }) => {

    const createNewUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userInfo = { createNewUser, signinUser }

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