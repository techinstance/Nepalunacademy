import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import "./css/Educator.css"

function Educator() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(null); // Initialize errors state

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
    }, []); // Empty dependency array to run only once

    return (
        <div className="EdMaterial">
            <h1>Educators</h1>
            <div className="EdMatrColumn">

            {data.length > 0 ? (
                data.map((item) => (
                    <span key={item.id} className="EdMatRow">
                        <img src={item.img_path} alt="Profile Image" />
                        <p>
                        Hi, I {item.name} is Educator at NepalUnacademy
                        .I take {item.Subject} Mostly.
                        I hve Completed my {item.Course}.About myself
                        {item.About}
                        </p>
                        <button id="StdBtn">Follow</button>
                    </span>
                ))
            ) : (
                <p>Loading.....</p>
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

export default Educator;
