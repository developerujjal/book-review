import PropTypes from 'prop-types';
import { createContext } from "react";

export const AuthContext = createContext(null)

const ContextAuth = ({ children }) => {

    const userInfo = {name: 'who are you'}

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