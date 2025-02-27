import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:3001/profile', {
                    withCredentials: true,  
                });
        
                if (response.status === 200) {
                    setUser(response.data); 
                }
            } catch (error) {
                console.error("Not authenticated", error);
            }
        };
        checkAuth()
    }, []);

    const login = (user) => setUser(user);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
