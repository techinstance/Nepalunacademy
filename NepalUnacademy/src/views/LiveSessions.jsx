import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../Context/ContextProvider";
import { FaBook, FaChalkboardTeacher, FaRegSmile } from 'react-icons/fa';

import "./css/LiveSession.css";

function LiveSessions() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(null);
    const { user } = useStateContext();

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
    }, []);

    const handleClk = (stmid) => {
        axiosClient.post('/User_Live_session', {
            User_id: user['id'],
            Live_session_id: stmid
        })
            .then(({ data }) => {
                // Handle successful subscription
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
          <h1 style={{ textAlign: 'center', fontSize: '3.5rem', color: '#333', margin: '2rem 0', position: 'relative' }}>
  <span style={{ marginRight: '1rem' }}>
    <i className="fas fa-video" style={{ fontSize: '2rem', color: '#2e86de' }}></i>
  </span>
 Live <span style={{ color: '#e74c3c' }}>Session</span>
</h1>
            <div className="LivMatrColumn">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className="LivMatRow">
                            <div className="img-container">
                                <img src={item.img_path} alt="Live session" />
                            </div>
                            <div className="content-container">
                                <h2 className="title">{item.title} <FaBook className="gradient-icon" /></h2>
                                <p className="subject"><FaChalkboardTeacher className="gradient-icon" /> {item.subject}</p>
                                <p className="course">{item.course}</p>
                                <p className="desc">{item.desc}</p>
                                <button className="LivBtn" onClick={() => { handleClk(item.id) }}>Subscribe</button>
                            </div>
                        </div>
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
