import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const PartDesc = () => {
    const [value, setValue] = useState(0);
    const [rating, setRating] = useState(0);
    // const [ratings,setRatings]=useState([]);
    const location = useLocation();
    const prop = location.state;
    const recipe = prop.recipe.recipe;

    useEffect(() => {
        async function fetchRatings() {
            try {
                const response = await fetch('https://mernrecipeapi.onrender.com/mern/ratings/getRatings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: recipe.name
                    })
                })

                if (response.ok) {
                    const responseData = await response.json();
                    // setRatings(responseData.ratings);
                    let totalRating = 0;
                    for (let i = 0; i < responseData.ratings.length; i++) {
                        totalRating += responseData.ratings[i].rating;
                    }
                    setRating(Number(totalRating / responseData.ratings.length).toFixed(1));
                    console.log(rating);

                } else {
                    console.log('Error fetching data');
                }
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }


        fetchRatings();
        console.log(rating);
    }, [rating, recipe.name])
    useEffect(()=>{
        console.log(value);
    },[value])


    const giveRating=async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch('https://mernrecipeapi.onrender.com/mern/ratings/updateRatings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: recipe.name,
                        user: sessionStorage.getItem("User"),
                        rating: value
                    })
            })
            if(!response.error){
                alert("Your rating is submitted..")
            }
            
        }catch(error){
            console.log('Error fetching data:', error);
        }
    }

    return (

        <div className='container' style={{ marginTop: "1rem", border: "1px black solid", borderRadius: "2rem" }}>
            <h2 style={{ margin: "1rem" }}>{recipe.name}</h2>
            <div className='row'>
                <div className="col-sm-12 col-md-6 col-lg-8">
                    <div className="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light" style={{ padding: "1em" }}>
                        <img className="img-fluid" src={recipe.imageURL}
                            alt="Card cap" style={{ height: "20em", width: "40em" }} />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="mx-0 mx-sm-auto" style={{ border: "1px solid black", borderRadius: "1rem", padding: "1em" }}>
                        <h3>Ratings :</h3><br />
                        
                        <Box sx={{ '& > legend': { mt: 2 }, }}>
                            {isNaN(rating)?<p>No ratings yet</p>:<><h2>{rating}/5</h2><br/><Rating size='large' name="read-only" value={rating} readOnly /></>}

                            <form style={{ border: "1px solid black", borderRadius: "1rem", padding: "1em" }}>
                                <fieldset border={1}>
                                    <h4>Provide us with your ratings</h4>
                                    <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }} /><br />
                                    <button onClick={giveRating}>Submit</button>
                                </fieldset>
                            </form>
                        </Box>

                    </div>
                </div>
                <hr />
                <div>
                    <h3>Ingredients : </h3>
                    <p>
                        <li className='p-3 row' key={0} >
                            {recipe.ingredients.map((item, index) => (

                                <li key={index} className=' col-sm-6 col-md-4 col-lg-3 ' style={{ border: "1px solid black" }}>
                                    <ul>Name : {item.name}</ul>
                                    <ul>Quantity : {item.quantity}</ul>
                                    <ul>Type : {item.type}</ul>
                                </li>
                            ))}
                        </li>
                    </p>
                </div>
                <div>
                    <p><h3>Steps : </h3>
                        <div style={{ border: "1px solid black", borderRadius: "2rem" }}>{recipe.steps.map((item, index) => (
                            <ol key={index}>Step {index} : {item}</ol>
                        ))}</div>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PartDesc