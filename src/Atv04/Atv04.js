import { Link } from "react-router-dom";
import ToolBar from "./ToolBar";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Form from "./Form";

export default function Atv04() {
    return (
        <div className="atv04">
            <h1 className="atv04-title">Semana 4</h1>
            <ToolBar/>
            <Gallery/>
            <Counter/>
            <Form/>
            <h2>Demais componentes em andamento</h2>
            <Link to='/' className="atv04-back-btn">Voltar</Link>
        </div>
    );
}