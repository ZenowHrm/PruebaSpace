import "./css/principal.css"
import { useState } from "react";

export function Principal() {
    const [texto, setTexto] = useState("Hola")

    let princ = <div className="principal-text-container">
        <h1>{texto}</h1>
        <button onClick={() => {texto == "Hola" ? setTexto("Adios") : setTexto("Hola")}}>Precioname</button>
    </div>

    return princ
}