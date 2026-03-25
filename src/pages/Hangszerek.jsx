import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Hangszerek(){
    const [, setPending] = useState(false)
    const [adat, setAdat] = useState([])
    const getHangszerek = async () => {
        try{
            setPending(true)
            const {data} = await axios.get("http://localhost:3001/instruments")
            setAdat(data)
        }
        catch (error){
            console.error("Hiba! " + error)
        }
        finally{
            setPending(false)
        }
    }
    useEffect(() => {
        getHangszerek()
    }, [])
    return(
        <>
            <h1>Hangszerek</h1>
            {adat.map((elem, index) => (
                <div key={index} className="cardcucc">
                    <div className="card">
                        <div className="card-header">
                            {elem.brand}
                        </div>
                        <div className="card-body">
                            <h4>
                                {elem.name}
                            </h4>
                            <p>{elem.price} HUF</p>
                            <p>Készleten: {elem.quantity} db</p>
                            <Link to={`/hangszer/${elem.id}`}><img className="card-image-bottom" src={elem.imageURL}></img></Link>
                        </div>
                        <div className="card-footer">
                            <button className="bg-danger" onClick={() => {torles(elem.id)}}><i className="bi bi-trash"></i>Törlés</button>
                            <button className="bg-warning"><i className="bi bi-pencil"></i>Módosítás</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Hangszerek