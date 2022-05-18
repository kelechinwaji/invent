import { createContext, useState } from 'react';
import { useLocation } from 'react-router';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';
import Modal from './modal/Modal'
import EditRow from './components/EditRow'

export const AppContext = createContext(null);


function Layout() {
    const initialState = {};
    const [showModal, setShowModal] = useState(false);
    const {pathname} = useLocation()
    const [data, setData] = useState(initialState)
    const navigate = useNavigate();
    const handleClose = () => { 
        if(pathname === "/create"){
            navigate("/")
        }
        setShowModal(false)
        setData(initialState)
     }

    //  {data.id ? pathname === "/create" ? <div style={{display:"flex", flexDirection:"column"}}><p>Success</p><button onClick={handleClose}>Close</button> </div>: <EditRow data={data} /> : null}


    console.log(data)

  return (
    <>
        <Modal handleClose={handleClose} isOpen={showModal} >
             {
                 data.available === true || pathname === "/create" ? <div style={{display:"flex", flexDirection:"column"}}><p>Success</p><button onClick={handleClose}>Close</button> </div>: <EditRow data={data} handleClose={handleClose} />
             }
        </Modal>
        <AppContext.Provider value={{data, setData, setShowModal}} >
            <Outlet />
        </AppContext.Provider>
    </>
  )
}

export default Layout