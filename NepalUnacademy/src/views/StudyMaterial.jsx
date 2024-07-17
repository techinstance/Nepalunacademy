import { useEffect, useState } from "react";
import { useStateContext } from "../Context/ContextProvider";

import axiosClient from "../axios-client";
import "./css/StudyMaterial.css"

function StudyMaterial() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(null); // Initialize errors state
    const {user} = useStateContext();

    useEffect(() => {
       
        axiosClient.get('/StudyMaterial')
            .then(({ data }) => {
                setData(data);
                console.log(data);
            })
            .catch(err => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    }, []); // Empty dependency array to run only once

    const handleClk = (stmid) =>{
        axiosClient.post('/User_material',{
            User_id:user['id'],
            Study_material_id:stmid
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
        <div className="StdMaterial">
            <h1>StudyMaterials</h1>
           
            <div className="StdMatrColumn">
            {data.length > 0 ? (
                data.map((item) => (
                    <span key={item.id} className="stdMatRow">
                        <img src={item.img_path} alt="Photo of Books"></img>
                        <p>{item.Desc}</p>
                        {/* <p>{item.File}</p> */}
                        <button id="StdBtn" onClick={()=>{handleClk(item.id)}}>Subscribe</button>
                    </span>
                ))
            ) : (
                <p>No study materials available</p>
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

export default StudyMaterial;
