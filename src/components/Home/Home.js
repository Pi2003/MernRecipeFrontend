import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Card from './Card';

const Home = () => {
    const [filter, setFilter] = useState("");
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const [user, setUser] = useState("");
    const [token, setToken] = useState("");
    useEffect(() => {
        setUser(sessionStorage.getItem("User"));
        setToken(sessionStorage.getItem("token"));

        async function getRecipes() {
            try {
                const response = await fetch('https://mernrecipeapi.onrender.com/mern/recipe/getRecipes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                    })
                })

                if (response.ok) {
                    const responseData = await response.json();
                    setData(responseData.recipe);
                    setFilteredData(responseData.recipe)
                    console.log(responseData.recipe);
                } else {
                    console.log('Error fetching data');
                }
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        getRecipes();
    }, [])
    // console.log(data)
    const navigate = useNavigate();
    const desc = filteredData.filter(function (e) {
        if (filter === null) {
            return null;
        }
        else {
            return e.name === filter
        }
    })
    const handleSearch = (e) => {
        e.preventDefault();
        setFilteredData(desc)
    }
    // const handleSignOut = (e) => {
    //     e.preventDefault();
    //     sessionStorage.clear();
    //     navigate("/");
    // }
    const handleNewRecipe = (e) => {
        e.preventDefault();
        navigate("/newRecipe");
    }

    if (user !== "" && user !== null && token !== "" && token !== null) {
        return (
            <div className='container-fluid' style={{ alignItems: "center", textAlign: "center" }}><br/>

                <div className='row'>
                    <div className='col-sm-12 col-md-4'>
                        <button style={{height:"3rem"}} className="btn btn-primary btn-rounded" type="button" onClick={handleNewRecipe}>Add your recipe</button><br /><br />
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <h3>Find your recipe here..</h3>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <input style={{borderRadius:"1rem",height:"3rem"}} onChange={(e) => { setFilter(e.target.value); console.log(e.target.value) }} type="search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button className='col-6' type="button" style={{height:"3rem"}} class="btn btn-primary" onClick={handleSearch}>search</button>
                    </div>
                </div>

                <div className='row'>
                    {filteredData.map((item, index) => (
                        <Card key={index} recipe={item} />
                    ))}
                </div>
            </div>
        )
    }
    else {
        navigate('/');
        return null;
    }
}

export default Home