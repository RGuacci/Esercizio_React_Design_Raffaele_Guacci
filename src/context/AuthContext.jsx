import { createContext , useState } from 'react';

export const AuthContext = createContext();


export default function AuthContextProvider ({ children }){
  const [ user , setUser ] = useState(null);

  const createUser = (name,email)=>{
     setUser({
        name,
        email
     })
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user , createUser , logout }}>
       { children }
    </AuthContext.Provider>
  )
}