import React, { useState } from 'react';
import { createContext, useContext } from "react";

interface User {
    avatar_url: string,
    name: string
}

interface AuthContextData {
    user: User;
    login(data: User): void;
}

export const authContext = createContext({} as AuthContextData);

export const useAuth = () => {
    const data = useContext(authContext);

    if (!data) throw new Error('useAuth must be used within AuthProvider');

    return data;
}

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = React.useCallback((data) => {
        setUser(data);
    }, []);

    return (
        <authContext.Provider value={{
            user,
            login
        }}>
            {children}
        </authContext.Provider>
    );
}

export default AuthProvider;