import axios from 'axios';
import React, { useState } from 'react'

function EditRow({data, handleClose}) {
  
  const formState = {
    productName: data.product_name,
        quantity: data.quantity,
        modeOfTracking: data.mode_of_tracking,
        wareHouseName: data.ware_house_name,
        dateOf: data.date_of
    }
    const [formData, setFormData] = useState(formState);
    const changeHandler = (e) => { 
        setFormData(prev => ({...prev, [e.target.name]: e.target.value }))
    }
    const submitHandler = (e) => { e.preventDefault() 
      axios.put(`http://127.0.0.1:4000/api/products/${data.id}`,formData).then(res => handleClose()).catch(err => console.log(err))
    }
  return (
    <div className="one">
            
    <h2 className="two">ADD NEW INVENTORY</h2>
    <form onSubmit={submitHandler} className="tree editTable">
      <label>Name of product:
        <input type="text" required name="productName" value={formData.productName} onChange={changeHandler}
      />
      </label>
      <label>Mode of tracking:
        <input type="text" required value={formData.modeOfTracking} name="modeOfTracking" onChange={changeHandler}
        />
      </label>
      <label>Ware house name:
        <input type="text" required value={formData.wareHouseName} name="wareHouseName" onChange={changeHandler}
        />
      </label>
      <label>Quantity:
        <input type="number" required value={formData.quantity} name="quantity" onChange={changeHandler}
        />
      </label>
      <label>Date:
        <input type="date" required value={formData.dateOf} name="dateOf" onChange={changeHandler}
        />
      </label>
      <button type="submit" className="btn"> EDIT ITEM</button>
      
    </form>
    </div>

   
  )
}

export default EditRow