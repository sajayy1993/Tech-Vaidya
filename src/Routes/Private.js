import { useEffect, useState } from "react";
import { useAuth } from "../Context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinners from "../Assets/Spinner/Spinners";



export default function PrivateRoute(){
    const [ok, setOk] = useState(false)
    const [auth,setAuth]=useAuth()


    useEffect(()=>{

        const authCheck = async()=>{
            try{
                const res = await axios.get('/api/v1/auth/doctor-auth' ,
                {
                    headers:{
                        "Authorization":auth?.token
                    }
                })
                if(res.data.ok){
                    setOk(true)
                }else{
                    setOk(false)
                }   
            }catch(error){
                 console.log(error)
            }
            
        }
if(auth?.token)authCheck();

    },[auth?.token]);
    return ok ? <Outlet /> : <Spinners />

}






