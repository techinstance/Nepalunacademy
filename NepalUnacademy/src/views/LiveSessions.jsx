import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../Context/ContextProvider";
import "./css/LiveSession.css"

function LiveSessions() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(null); // Initialize errors state
    const {user} = useStateContext();


    useEffect(() => {
        axiosClient.get('/LiveSessions')
            .then(({ data }) => {
                setData(data);
                console.log(data);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    }, []); // Empty dependency array to run only once

    const handleClk = (stmid) =>{
        axiosClient.post('/User_Live_session',{
            User_id:user['id'],
            Live_session_id:stmid
        })
            .then(({ data }) => {
                // setData(data);
                // console.log(data);
            })
            .catch(err => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    }
    return (
        <div className="LivMaterial">
            <h1>LiveSessions</h1>
            <div className="LivMatrColumn" >
            {data.length > 0 ? (
                data.map((item) => (
                    <span key={item.id} className="LivMatRow">
                        <img src={item.img_path} alt="image of People teaching"/>
                        <p>{item.title}</p>
                        <p>{item.subject}</p>
                        <p>{item.course}</p>
                        <p>{item.desc}</p>

                        <button className="LivBtn" onClick={()=>{handleClk(item.id)}}>Subscribe</button>
                    </span>
                ))
            ) : (
                <p>No live sessions available</p>
            )}
            {errors && (
                <div>
                    <h2>Errors</h2>
                    <pre>{JSON.stringify(errors, null, 2)}</pre>
                </div>
            )}
            </div>
        </div>
    );
}

export default LiveSessions;
