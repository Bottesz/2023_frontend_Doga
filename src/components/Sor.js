import { useState } from "react";

export default function Sor({adat}){
    const [valaszolt,setValaszolt] = useState(false);
    const [valasztottValasz,setValasztottValasz] =useState(null);

    const valaszok = [adat.v1,adat.v2,adat.v3,adat.v4];

    const handleKattintas = (valasz) => {
        if(!valaszolt){
            setValasztottValasz(valasz);
            setValaszolt(true);
        }
    };

    const getTombOsztaly = (valasz) =>{
        let className = "btn-valasz";
        if(valaszolt){
            if (valasz === adat[adat.helyes]){
                className += "helyes-valasz";
            } else if(valasz === valasztottValasz){
                className += "helytelen-valasz";
            }
        }
        return className;
    };

    return (
        <div className="teszt-card crad mb-4">
            <h3 className="kerdes-com card-header">
                {adat.kerdes || adat.tesztkerdes || "Hiányzó kérdés szöveg"}
            </h3>
            <div className="valaszok-grid card-body">
                {valaszok.map((valasz,index) => (
                <button
                key={index}
                type="button"
                className={getTombOsztaly(valasz)}
                onClick={() => handleKattintas(valasz)}
                disabled={valaszolt}
                >
                    {valasz}
                </button>
                ))}
            </div>
        </div>
    );
};
