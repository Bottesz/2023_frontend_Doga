import {createContext,useContext,useState,useEffect} from "react";
import api from "../services/api";


const AdatContext=createContext();

export const AdatProvider=({children}) =>{
    const [kategoriaLista,setKategoriaLista] = useState([]);
    const [tesztLista,setTesztLista] = useState([]);

    const getKategoria=async()=>{
        const response = await api.get("/api/kategoria");
        setKategoriaLista(response.data)
    }

    const getTeszt=async()=>{
        const response=await api.get("/api/teszt");
        setTesztLista(response.data)
    }

    useEffect(()=>{
        getKategoria();
        getTeszt();
    },[]);
    return(
        <AdatContext.Provider value={{kategoriaLista,tesztLista,getTeszt,getKategoria}}>
            {children}
        </AdatContext.Provider>    
    );
}

export function useAdatContext(){
    const context = useContext(AdatContext);
    return context;
}
