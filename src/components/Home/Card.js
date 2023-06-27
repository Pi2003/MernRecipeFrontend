import React from 'react'
import {useNavigate} from 'react-router-dom' 

const Card = (props) => {
    const navigate=useNavigate();
    const handleReadMore=()=>{
        navigate("/recipeDesc",{state:{recipe:props}});
    }
    // console.log(props.recipe)
    // http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg
    return (

        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="mx-auto" style={{ width: "23rem",height:"30rem" }}>
                <div className="card">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h5 className="card-title font-weight-bold mb-2">{props.recipe.name}</h5>
                        </div>
                    </div>
                    <div className="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                        <img className="img-fluid" src={props.recipe.imageURL}
                            alt="Card cap" style={{ height: "20em",width:"40em" }} />
                        <a href="/partDesc">
                            <div className="mask" style={{ "backgroundColor": "rgba(251, 251, 251, 0.15)" }}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-link link-danger p-md-1 my-1" onClick={handleReadMore}>Read More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card