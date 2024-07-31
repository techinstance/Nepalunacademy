import { useEffect, useState } from "react";
import { useStateContext } from "../Context/ContextProvider";
import axiosClient from "../axios-client";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import "./css/StudyMaterial.css";

function StudyMaterial() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(null); // Initialize errors state
    const { user } = useStateContext();
    const navigate = useNavigate(); // Initialize navigate function

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

    const handleSubscribe = (stmid) => {
        axiosClient.post('/User_material', {
            User_id: user['id'],
            Study_material_id: stmid
        })
            .then(() => {
                navigate('/storage'); // Redirect to storage section on success
            })
            .catch(err => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <div className="study-material-container">
            <h1 className="headin">Study Materials 📚</h1>

            <div className="study-material-grid">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className="study-material-card">
                            <img src={item.img_path} alt="Study Material" />
                            <div className="study-material-content">
                                <p>{item.Desc}</p>
                                <a href={item.File}><button  className="subscribe-btn" onClick={() => handleSubscribe(item.id)}>Subscribe</button></a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No study materials available</p>
                )}
                {errors && (
                    <div className="error-messages">
                        <h2>Errors</h2>
                        <pre>{JSON.stringify(errors, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StudyMaterial;
