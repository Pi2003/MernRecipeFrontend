import React from 'react'
import { useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate();
    const handleSignOut = (e) => {
        e.preventDefault();
        sessionStorage.clear();
        navigate("/");
    }
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Home" style={{ fontFamily: "fantasy", color: "whitesmoke" }}>Recipe Finder <span className="sr-only"></span></a>
                    </li>
                    

                </ul>
                <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-danger btn-rounded" type="button" onClick={handleSignOut}>Sign-Out</button>
                    </form>
            </div>
        </nav>
    )
}

export default Navbar