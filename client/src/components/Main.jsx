import React, { useState } from 'react'


const Main = () => {
        // getter, setter
    const [plant, setPlant] = useState({
        plantName: "",
        waterPref: "",
        insideOutside: ""
    })


    const changeHandler = (event) => {
        console.log(event.target.name, event.target.value)
        setPlant({...plant,[event.target.name]: event.target.value})
    }
    // name can be switched with id if needed... in the input tag

    const [allPlants, setAllPlants] = useState([]);
        // this is an array

    const submitHandler = (event) => {
        event.preventDefault();
        setAllPlants([...allPlants, plant])

    }

return (
<div>
    <div className='row'>
        
        <form action="" onSubmit={submitHandler} className="col-md-4 offset-2  mt-5 pt-3 pb-3 bg-success text-white rounded-3">
        <h2>Plant App</h2>
        <p>Add plants</p>

            <div className='form-group'>
                <label htmlFor="plantName">Plant Name:</label>

                <input type="text" name="plantName" className="form-control" onChange={changeHandler} value={plant.plantName}/>
                {/* Don't forget to add value! */}
                {plant.plantName.length> 0 && plant.plantName.length < 3 ?(
                    <p>Name must be more than 3 characters.</p>
                    ) : null
                }

            </div>
            <div className='form-group'>
                
                <label htmlFor="waterPref">Water Preference:</label>

                <input type="text" name="waterPref" className="form-control" onChange={changeHandler} value={plant.waterPref}/>

                {plant.waterPref.length> 0 && plant.waterPref.length < 3 ?(
                    <p>Must be more than 3 characters.</p>
                    ) : null
                }
                {/* This is a ternary operator */}
            </div>
            <div className='form-group'>
                <label htmlFor="insideOutside">Indoor or outdoor plant?</label>

                <input type="text" name="insideOutside" className="form-control" onChange={changeHandler} value={plant.insideOutside}/>


            </div>
            
            <button className='btn btn-light mt-3'>Add plant!</button>
        </form>
        {/* Display in real time form data */}
        <div className='col-md-4 offset-1 mt-5 pt-3 pb-3 bg-success text-white rounded-3'>
            <h2>Display Form Data</h2>
            <p>Plant: {plant.plantName}</p>
            <p>Water preference: {plant.waterPref}</p>
            <p>Inside or outside: {plant.insideOutside}</p>

        </div>
    </div>
</div>
)
}
export default Main