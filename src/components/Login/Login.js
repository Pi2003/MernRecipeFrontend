import React,{useState} from 'react';
import login from './img/login.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user,setUser]=useState("");
    const [pass,setPass]=useState("");
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const response = await fetch('https://mernrecipeapi.onrender.com/mern/login/loginAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user,
                    pass
                })
            })

            const data = await response.json();
            console.log(data);
            if (data.user === user) {
                sessionStorage.setItem("token", data.token)
                sessionStorage.setItem("User", user);
                sessionStorage.setItem("Password", pass);
                window.location.href = '/Home'
            }
            else {
                alert("Incorrect username and password");
            }
    };

    return (
        <section className="intro">
            <div className="bg-image" style={{ height: "100vh" }}>
                <div className="mask d-flex align-items-center h-100" style={{ "backgroundColor": "#f3f2f2" }}>
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-lg-9 col-xl-8">
                                <div className="card" style={{ "borderRadius": "1rem" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4 d-none d-md-block">
                                            <img
                                                src={login}
                                                alt="login form"
                                                className="img-fluid" style={{ "borderTopLeftRadius": "1rem", "borderBottomLeftRadius": "1rem", "height": "35rem" }}
                                            />
                                        </div>
                                        <div className="col-md-8 d-flex align-items-center">
                                            <div className="card-body py-5 px-4 p-md-5">

                                                <form action="">
                                                    <h4 className="fw-bold mb-4" style={{ "color": "#92aad0" }}>Log in to your account</h4>
                                                    <p className="mb-4" style={{ "color": "#45526e" }}>Please enter the following details: </p>

                                                    <div className="form-outline mb-4">
                                                        <input type="email" id="form2Example1" className="form-control" onChange={(e)=>{setUser(e.target.value)}}/>
                                                        <label className="form-label" htmlFor="form2Example1">Username</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="password" id="form2Example2" className="form-control" onChange={(e)=>{setPass(e.target.value)}}/>
                                                        <label className="form-label" htmlFor="form2Example2">Password</label>
                                                    </div>

                                                    <div className="d-flex justify-content-end pt-1 mb-4">
                                                        <button onClick={handleSubmit} className="btn btn-primary btn-rounded" type="button" style={{ "backgroundColor": "#92aad0" }}>Log in</button>
                                                    </div>
                                                    <hr />
                                                    <div>
                                                    <Link to="/signup">Create Account</Link>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login