import { Children, createContext, useContext, useState } from "react";

const StateContext = createContext({
    user:null,
    token:null,
    setToken:()=>{},
    setuser:()=>{}
})

export const ContextProvider = (({children})=>{
    const [user,setuser]= useState({});
    const [token,_setToken]= useState(    localStorage.getItem('ACCESS_TOKEN'));
   const setToken = (token)=>{
      _setToken(token)
      if(token){
        localStorage.setItem('ACCESS_TOKEN',token);
      }else{
        localStorage.removeItem('ACCESS_TOKEN');
      }
   }
   
   
    return (
        <StateContext.Provider value={{
            user,
            token,
            setToken,
            setuser
        }}>

  {children}
     
        </StateContext.Provider>
    )
})


export const useStateContext = () =>useContext(StateContext);

