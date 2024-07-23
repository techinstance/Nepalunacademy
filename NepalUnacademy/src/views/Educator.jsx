import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import "./css/Educator.css";

function Educator() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axiosClient.get('/Educators')
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

    return (
        <div className="educator-section">
            <h1>Our Amazing Educator Team</h1>
            <div className="educators-container">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className="educator-card">
                            <img src={item.img_path} alt="Profile" />
                            <div className="educator-info">
                                <h2>{item.name}</h2>
                                <h3>{item.Subject}</h3>
                                <p>{item.Course}</p>
                                <div className="rating">
                                    <span>⭐</span>
                                    <span>⭐</span>
                                    <span>⭐</span>
                                </div>
                                <button className="follow-btn">Follow</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading.....</p>
                )}
                {errors && (
                    <div className="errors">
                        <h2>Errors</h2>
                        <pre>{JSON.stringify(errors, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Educator;
