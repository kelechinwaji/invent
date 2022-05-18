import axios from "axios";
// import { Button } from "bootstrap";
import { useState, useContext } from "react";
// import { useNavigate } from "react-router";
import { AppContext } from "../Layout";


const Create = () =>{
    const formState = {
        productName: "",
        quantity: 0,
        modeOfTracking:"",
        wareHouseName:"",
        dateOf: `${new Date().getDate() }`
    }
    const [formData, setFormData] = useState(formState);
    const {setData, setShowModal} = useContext(AppContext);


    const changeHandler = (e) => { 
        setFormData(prev => ({...prev, [e.target.name]: e.target.value }))
    }

    const submitHandler = (e) => { 
        e.preventDefault();
       postData(formData)
    }

    const modalHandler = (response) => { 
        setShowModal(true);
        setData(response)
     }

    
    const postData = async (data) => { 
        return  await axios.post('http://127.0.0.1:4000/api/products',data).then(res => modalHandler(res.data)).catch(err =>console.log(err))
     }


    return (
        
        <div className="one">
            <h1 className="one">Welcome to your inventory</h1>
            <br></br>
            
            <h2 className="two">ADD NEW INVENTORY</h2>
            <form onSubmit={submitHandler} className="tree">
            <label>Name of product:</label>
            <input type="text" required name="productName" value={formData.productName} onChange={changeHandler}
            /><br></br>
            
            <label>Mode of tracking:</label>
            <input type="text" required value={formData.modeOfTracking} name="modeOfTracking" onChange={changeHandler}
            /><br></br>

            <label>Ware house name:</label>
            <input type="text" required value={formData.wareHouseName} name="wareHouseName" onChange={changeHandler}
            /><br></br>

            <label>Quantity:</label>
            <input type="number" required value={formData.quantity} name="quantity" onChange={changeHandler}
            /><br></br>

            <label>Date:</label>
            <input type="date" required value={formData.dateOf} name="dateOf" onChange={changeHandler}
            /><br></br>
            
            <button type="submit" className="btn"> ADD ITEM</button>
            </form>
           
        </div>
    )
}

export default Create;