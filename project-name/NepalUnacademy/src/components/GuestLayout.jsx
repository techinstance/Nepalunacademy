import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import Header from "./Header";
import "./layout.css";
import Footer from "./Footer";

function GuestLayout(){
    const {token} = useStateContext();
    if(token){
        return <Navigate to="/" />
    }
    return(<div  className="ldiv">
    <Header/>
     <Outlet/>
     <Footer/>
    </div>)
}
export default GuestLayout;