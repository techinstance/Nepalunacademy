import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import "./css/Vacancies.css"

function Vacancies() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(null); // Initialize errors state

    useEffect(() => {
        axiosClient.get('/Vacancies')
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

    return (
        <div className="VacMaterial">
            <h1>Vacancies and Exam Dates</h1>
            <div className="VacMatrColumn">
            {data.length > 0 ? (
                data.map((item) => (
                    <span key={item.id} className="VacMatRow">
                        <p>{item.Title}</p>
                        <p>{item.Desc}</p>
                        <button id="StdBtn"><a href={item.Link}>Visit</a></button>
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

export default Vacancies;
