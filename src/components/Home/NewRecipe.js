import React from 'react'
import { useState } from 'react';
const NewRecipe = () => {
    const [name,setName]=useState("");
    const [imgUrl,setimgUrl]=useState("");
    const [ing,setIng]=useState("");
    const [steps,setSteps]=useState("");

    const handleAdd=async(e)=>{
        e.preventDefault();
        console.log(name,imgUrl,JSON.parse(ing),JSON.parse(steps))
        const response = await fetch('https://mernrecipeapi.onrender.com/mern/recipe/addRecipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name:name,
                    ingredients:JSON.parse(ing),
                    steps:JSON.parse(steps),
                    imgUrl:imgUrl
                })
            });
            const data = await response.json();


            if(data.errors){
                alert(data.error);
            }
            else{
                alert("Recipe Added successfully");
                window.location.href = '/Home'
            }
    }


  return (
    <div>
        <section className="intro">
  <div className="bg-image-vertical h-100" style={{"backgroundColor": "#ADD8E6"}}>
    <div className="mask d-flex align-items-center h-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="card" style={{"borderRadius": "1rem"}}>
              <div className="card-body p-5">

                <h1 className="mb-5 text-center">New Recipe</h1>

                <form>
                  <div className="row">
                    <div className="mb-4">
                      <div className="form-outline">
                        <input type="text" id="form6Example1" className="form-control" onChange={(e)=>{
    setName(e.target.value);
  }}/>
                        <label className="form-label" htmlFor="form6Example1">Recipe name</label>
                      </div>
                    </div>
                </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form6Example3" className="form-control" onChange={(e)=>{
    setimgUrl(e.target.value);
  }}/>
                    <label className="form-label" htmlFor="form6Example3">Recipe Image URL</label>
                  </div>

                  <div className="form-outline mb-4">
                    <textarea className="form-control" id="form6Example7" rows="4" placeholder='[
                        {"quantity":"1 kg","name":"chicken roast","type":"Meat"},
                        {"quantity":"1 package","name":"brown gravy mix","type":"Baking"}
                    ]' onChange={(e)=>{
                        setIng(e.target.value);
                      }}></textarea>
                    <label className="form-label" htmlFor="form6Example7">Ingredients (in the format mentioned above)</label>
                  </div>
                  <div className="form-outline mb-4">
                    <textarea className="form-control" id="form6Example8" rows="4" placeholder='["Place chicken roast in crock pot.",
  "Mix the dried mixes together in a bowl and sprinkle over the roast.",
  "Pour the water around the roast.",
  "Cook on low for 7-9 hours."]' onChange={(e)=>{
    setSteps(e.target.value);
  }}></textarea>
                    <label className="form-label" htmlFor="form6Example7">Steps (in the format mentioned above)</label>
                  </div>
                  <button type="submit" className="btn btn-secondary btn-rounded btn-block" onClick={handleAdd}>Place order</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default NewRecipe