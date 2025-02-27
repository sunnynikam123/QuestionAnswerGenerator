import React, { useContext, useEffect } from 'react'
import { AuthContext } from './Authcontext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Logout() {
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext); 
useEffect(() => {
    const logoutt = async ()=>{
        try {
            const lgo = await fetch("http://localhost:3001/logout", {
                method: "POST",
                credentials: "include",
            });
            
          if(lgo){
            logout()
            navigate("/")
              }        
        } catch (error) {
            console.log(error)
        }
    }
    logoutt()
        }, [])    

return (
<>
</>  )
}

export default Logout