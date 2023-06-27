import React,{useState} from 'react';
import login from './img/login.jpg';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [user,setUser]=useState("");
    const [pass,setPass]=useState("");
    const [confpass,setconfPass]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(pass===confpass){
            const response = await fetch('https://mernrecipeapi.onrender.com/mern/login/createAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user:user,
                    pass:pass
                })
            });
            const data = await response.json();
            console.log(data);

            if(data.errors){
                alert(data.errors);
            }
            else{
                alert("Account Created successfully");
                window.location.href = '/'
            }

        }else{
            alert("Passwords do not match")
            
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
                                                className="img-fluid" style={{ "borderTopLeftRadius": "1rem", "borderBottomLeftRadius": "1rem", "height": "38rem" }}
                                            />
                                        </div>
                                        <div className="col-md-8 d-flex align-items-center">
                                            <div className="card-body py-5 px-4 p-md-5">

                                                <form action="">
                                                    <h4 className="fw-bold mb-4" style={{ "color": "#92aad0" }}>Create an account</h4>
                                                    <p className="mb-4" style={{ "color": "#45526e" }}>Please fill in the following fiels.</p>

                                                    <div className="form-outline mb-4">
                                                        <input type="email" id="form2Example1" className="form-control" onChange={(e)=>{setUser(e.target.value)}}/>
                                                        <label className="form-label" htmlFor="form2Example1">Username</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="password" id="form2Example2" className="form-control" onChange={(e)=>{setPass(e.target.value)}}/>
                                                        <label className="form-label" htmlFor="form2Example2">Password</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="password" id="form2Example3" className="form-control" onChange={(e)=>{setconfPass(e.target.value)}}/>
                                                        <label className="form-label" htmlFor="form2Example2">Confirm Password</label>
                                                    </div>

                                                    <div className="d-flex justify-content-end pt-1 mb-4">
                                                        <button className="btn btn-primary btn-rounded" type="button" style={{ "backgroundColor": "#92aad0" }} onClick={handleSubmit}>Create Account</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="d-flex justify-content-end pt-1 mb-4">
                                                    <Link to="/">Login</Link>
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

export default Signup