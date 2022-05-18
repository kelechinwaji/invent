import axios from 'axios';
import React, { useState, useEffect, useContext, } from 'react'
import { AppContext } from '../Layout';
import DeleteBtn from '../DeleteBtn'

function AllInventories() {
    const tableHead = ["S/N", "Name of Product", " Quantity", "Warehouse", "Method of Tracking", "Date", " "];
    const [resData, setResData] = useState([]);
    const {setData, setShowModal} = useContext(AppContext);

    const modalHandler = (response) => { 
        setShowModal(true);
        setData(response);
    }
    
  


    useEffect(() => {
        axios.get("http://127.0.0.1:4000/products").then(res => setResData(res.data)).catch(error => console.log(error))

        return () => { 
            setShowModal(false);
            setData({})
         }
    }, [])



    const deleteItmHandler = (e, id) => { 
        e.stopPropagation();
        axios.delete(`http://127.0.0.1:4000/api/products/${id}`).then(res => {modalHandler({...res.data, available: true}); setResData(resData.filter(res => res.id !== id))}).catch(err => console.log(err))
        
     }


  return (
    <div>
        <table className='inventories'>
            <thead>
                <tr>
                 {tableHead.map((title) => <th key={title}>{title}</th>)}
                </tr>
            </thead>
            {resData &&
            <tbody>
                {resData.map((dataRow, id) => 
                    <tr key={dataRow.id} onClick={() => modalHandler(dataRow)} >
                    <td>{id}</td>
                    <td>{dataRow.product_name}</td>
                    <td>{dataRow.quantity}</td>
                    <td>{dataRow.ware_house_name}</td>
                    <td>{dataRow.mode_of_tracking}</td>
                    <td>{dataRow.date_of}</td>
                    <td onClick={(e) => deleteItmHandler(e, dataRow.id)} ><DeleteBtn /> </td>
                </tr>)}
            </tbody>}
        </table>
        <p>NOTE: Click on row for edit option</p>
    </div>
  )
}

export default AllInventories