import React, { createContext, useMemo, useCallback, useContext } from 'react';
import { useSessionStorage } from './useSessionStorage';

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useSessionStorage('user', '');

  const login = useCallback((email, password) => {
    setUser({email, password});
  }, [setUser])

  const signup = useCallback((email, password) => {
    setUser({email, password});
  },[setUser])

  const logout = useCallback(() => {
    setUser('');
  },[setUser])

  const memoedValue = useMemo(
    () => ({
      user,
      login,
      logout,
      signup,
    }),
    [login, logout, signup, user]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}