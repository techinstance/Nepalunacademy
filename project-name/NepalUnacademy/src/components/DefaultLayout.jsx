import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import axiosClient from "../axios-client"
import "./layout.css";
import GuestLayout from "./GuestLayout";

function DefaultLayout(){
   
  const {user, token, setuser, setToken, notification} = useStateContext();

  if (!token) {
    return <GuestLayout/>
  }


  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setuser(data)
      })
  }, [])

    return(
      <div  className="ldiv">
      <Header/>
      <Outlet/>
      <Footer/>
      </div>  
    )
}

export default DefaultLayout;