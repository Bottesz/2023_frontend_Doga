import { useAdatContext } from "../context/AdatContext";
export default function Urlap(){
    const {kategoriaLista,getTeszt} = useAdatContext();

    function temaValaszt(event){
        const kategoriaId=event.target.value;
        if(kategoriaId  === "0"){
            getTeszt(`/api/teszt`);
        }
    }

    return(
        <div className="mb-3">
            <select className="from-select w-25" onChange={temaValaszt}>
                <option  key= "default" value="0">Válassz Témát!</option>
                {kategoriaLista.map((kategoria) => (
                    <option key={kategoria.id} value={kategoria.id}>
                        {kategoria.kategorianev}
                    </option>
                
            ))}
            </select>
        </div>
    );
}

