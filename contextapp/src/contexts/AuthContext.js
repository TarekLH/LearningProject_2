import React, { createContext, useState } from 'react';

export const AuthContext= createContext();

export default function AuthContextProvider({children}) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false
  });
  const toggleAuth = () => {
    setAuthState({ isAuthenticated: !authState.isAuthenticated})
  };

  return (
    <AuthContext.Provider value={{...authState, toggleAuth}}>
      {children}
    </AuthContext.Provider>
  )
}