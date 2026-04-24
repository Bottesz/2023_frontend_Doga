import React from "react";
import Urlap from "./Urlap";
import Sor from "./Sor";
 import { useAdatContext } from "../context/AdatContext";


 function Tesztek(){
    const {tesztLista} = useAdatContext();
    console.log("Aktuális tesztek: ",tesztLista);
    return(
        <article>
            <Urlap/>
            <div className="card mb-3">
                {tesztLista && tesztLista.length > 0 ? (
                    tesztLista.map((kerdes) => (
                        <Sor key={kerdes.id} adat={kerdes}/>
                    ))
                ) : (
                    <div className="text-center p-3">Betöltés</div>
                )}
            </div>
        </article>
    );
 }

 export default Tesztek;