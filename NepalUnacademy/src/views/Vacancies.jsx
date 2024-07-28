import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import "./css/Vacancies.css";

function Vacancies() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axiosClient.get('/Vacancies')
            .then(({ data }) => {
                setData(data);
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    }, []);

    return (
        <div className="VacMaterial">
             <h2 style={{ textAlign: 'center', fontSize: '3.5rem', color: '#333', margin: '2rem 0', position: 'relative' }}>
    <span style={{ marginRight: '1rem' }}>
      <i className="fas fa-calendar-alt" style={{ fontSize: '2rem', color: '#2e86de' }}></i>
    </span>
    VACANCIES AND <span style={{ color: '#e74c3c' }}>EXAM DATES  📅  </span>
  </h2>
            <div className="VacContent">
                <div className="VacImage">
                    <img src="/assets/job.png" alt="Keyboard" />
                </div>
                <p className="description">Explore the latest vacancies and exam dates available for various courses and programs. Click "Apply" to learn more and submit your application.</p>
                <div className="VacList">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <div key={item.id} className="VacMatRow">
                                <div className="icon">🎓</div>
                                <p className="title">{item.Title} <span className="new">New</span></p>
                                <p className="description">
                                    <span className="date">Date: {item.Date}</span><br />
                                    <span className="details">{item.Desc}</span>
                                </p>
                                <button className="VacBtn">
                                    <a href={item.Link} target="_blank" rel="noopener noreferrer">Apply</a>
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Loading.....</p>
                    )}
                    {errors && (
                        <div className="Error">
                            <h2>Errors</h2>
                            <pre>{JSON.stringify(errors, null, 2)}</pre>
                        </div>
                    )}
                </div>
            </div>
            <div className="DatabaseTest">
                <h2>🗃️ Thank You</h2>
                <p className="description"></p>
            </div>
        </div>
    );
}

export default Vacancies;
