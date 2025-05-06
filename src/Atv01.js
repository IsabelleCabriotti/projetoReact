import { Link } from "react-router-dom";
import MeuLetreiro from "./Letreiro";
import MeuRelogio from "./Relogio";

export default function Atv01() {
    return (
        <>
            <h1>Semana 1</h1>
            <MeuRelogio/>
            <MeuLetreiro/>
            <Link to='/'>Voltar</Link> 
        </>
    )
}