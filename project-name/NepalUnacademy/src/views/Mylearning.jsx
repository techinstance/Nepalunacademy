import { useState, useEffect } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../Context/ContextProvider";

import "./css/MyLearning.css"

function Mylearning() {
    const [sesndata, setsesnData] = useState([]);
    const [stddmata, setstdmData] = useState([]);
    const [Educdata, setEducData] = useState([]);
    const [errors, setErrors] = useState(null); // Initialize errors state
    const { user } = useStateContext();

    useEffect(() => {
        if (!user) return;
        const funcLive = async () => {
            await axiosClient.get(`/LiveSessions/${user.id}`)
                .then(({ data }) => {
                    setsesnData(data);
                    console.log(data);
                })
                .catch(err => {
                    const response = err.response;
                    console.log(err);
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        }
        const funcstd = async()=>{
            await axiosClient.get(`/StudyMaterial/${user.id}`)
            .then(({ data }) => {
                setstdmData(data);
                console.log(data);
            })
            .catch(err => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
        }
        const funceduc = async()=>{
            await axiosClient.get(`/Educator/${user.id}`)
            .then(({ data }) => {
                setEducData(data);
                console.log(data);
            })
            .catch(err => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
        }

        funcLive()
        funcstd()
        funceduc()

    }, [user]);

    return (
        <>
            <div id="learn_body">
                <h2>Welcome to My Learning Section</h2>
                <p>
                    Where you can easily find all the things like
                    StudyMaterial,LiveSession and Courses you have Subscribed and Educator you are Following.
                </p>
                <div>
                    <span className="section study-materials">
                        <h3>Study Materials</h3>
                        {stddmata.map((item) => (
                            <span key={item.id} className="section-item">
                                 <img src={item.img_path} alt="" />
                                <p>{item.Desc}</p>
                                <p>{item.File}</p>
                            </span>
                        ))}
                    </span>
                    <span className="section live-sessions">
                        <h3>Live Sessions</h3>
                        {sesndata.map((item) => (
                            <span key={item.id} className="section-item">
                                <img src={item.img_path} alt="" />
                                <p>{item.title}</p>
                                <p>{item.subject}</p>
                            </span>
                        ))}
                    </span>
                    <span className="section courses">
                        <h3>Courses</h3>
                        {/* Add course items here */}
                    </span>
                    <span className="section educators">
                        <h3>Educators</h3>
                        {Educdata.map((item) => (
                            <span key={item.id} className="section-item">
                                <img src={item.img_path} alt="" />
                                <p>{item.title}</p>
                                <p>{item.subject}</p>
                            </span>
                        ))}
                    </span>
                </div>
            </div>
        </>
    );
}

export default Mylearning;
