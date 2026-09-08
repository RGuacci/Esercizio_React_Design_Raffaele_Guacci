import { createContext , useState } from 'react';

export const AuthContext = createContext();


export default function AuthContextProvider ({ children }){
  const [ user , setUser ] = useState(null);

  const createUser = (name,email,password)=>{
     setUser({
        name,
        email,
        password
     })
  }

  const login = (newUser) => setUser(newUser);

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user , createUser , login , logout  }}>
       { children }
    </AuthContext.Provider>
  )
}