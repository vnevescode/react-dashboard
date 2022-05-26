import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import history from '../history';

const Context = createContext();
const baseURL = "https://628bf017667aea3a3e387e51.mockapi.io/login";


function AuthProvider({ children }){

    const [authenticated,setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            console.log("teste")
            axios.defaults.headers.Authorization = `Bearer ${token}`; 
            setAuthenticated(true);
        }

        setLoading(false);
    },[]); 

    

    const handleLogin = async () =>{
        
        const data = await axios.post(baseURL,{
            "email": "edu@edu.com",
            "senha": "1234"
        })

        const token = data.data['access-token'] ;       
        localStorage.setItem('token', JSON.stringify(token));
        axios.defaults.headers.Authorization = `Bearer ${token}`;        
        setAuthenticated(true);
        
    }

    if(loading){
        return <h1>Loading...</h1>
    }


    return (
        <Context.Provider value={{ authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider};