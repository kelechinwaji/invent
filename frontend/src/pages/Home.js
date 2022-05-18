import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate()

    return (
    <div style={{height: "100vh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center" }} >
        <div>
            <button onClick={() => navigate("/create")} >Add inventory</button>
            <button onClick={() => navigate("/all-Inventories")} >All inventories</button>
        </div>
    </div>
  )
}

export default Home