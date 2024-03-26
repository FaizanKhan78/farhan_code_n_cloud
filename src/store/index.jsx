import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const AuthContext = createContext();

export const AuthContextProvider = ( { children } ) =>
{
  const [ user, setUser ] = useState();
  const [ allUsersData, setAllUsersData ] = useState();
  const getAllUsersData = async () =>
  {
    try
    {
      const res = await axios.get( "http://localhost:8000/api/auth/" );
      setAllUsersData( res.data );
    } catch ( error )
    {
      console.log( error );
    }
  };
  const payload = {
    user,
    setUser,
    getAllUsersData,
    allUsersData,
    setAllUsersData,
  };
  return (
    <AuthContext.Provider value={ payload }>
      { children }
    </AuthContext.Provider>
  );
};