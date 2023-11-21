import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Principal.css";
import VirtualDOM from "./VirtualDOM.png";



function Principal(props) {
    const [count, setCount] = useState(props.count);

    const renderTitle = () => {
        if (count === 0) return props.title;
        if (count === 1) return "Pregunta 1";
        if (count === 2) return "Pregunta 2";
        if (count === 3) return "Pregunta 3";
        else return  "Pregunta 4";
    };
    const renderPregunta = () => {
        if (count === 0) return props.description;
        if (count === 1) return "Como se define un nuevo componente en React?";
        if (count === 2) return "Como se define un nuevo estado en React?";
        if (count === 3) return "El inicializador del estado puede ser una función? F o V";
        else return "Que es el virtual DOM ?(imagen)";
    };

    const renderRespuesta = () => {
        if (count === 0) return props.answer;
        if (count === 1) return "Se define creando un función la cual recibe como argumento las propiedades (props). También se puede crear un componente como constante, usando const component=<h1>Quiz<h1/>. En mi caso, un ejemplo de componente seria la función Principal que se encuentra en el archivo Principal.js";
        if (count === 2) return "Primero se debe importar {useState} de react, y luego se declara la variable de estado asi: const [a,setA]=useState(props.a). setA va a ser la encargada de actualizar el estado de a.";
        if (count === 3) return "Verdadero";
        else return "";
    
    };

    const renderPhoto = () => {
        if (count === 4) return VirtualDOM;
        else return props.image;
    
    };

    
    const handleCountNext = () => {
        console.log("Button clicked...");
        if (count >= 4) {
            setCount(4)} else 
            {setCount(count+1)};
        console.log(count);
        
    };

    const handleCountRestart = () => {
        console.log("Button clicked...");
        setCount(0);
        console.log(count);
    };

    const handleCountPrev = () => {
        console.log("Button clicked...");
        if (count <= 0) {
            setCount(0)} else 
            {setCount(count-1)};
        console.log(count);
    };

    return (
        <div> 
    <div className="custom-button">
        <Button ariant = "primary" style = {{marginRight:'1em'}} onClick={handleCountRestart}> Restart</Button>
        <Button variant = "primary" style = {{marginRight:'1em'}} onClick={handleCountPrev}>Prev</Button>
        <Button variant = "primary" style = {{marginRight:'1em'}} onClick={handleCountNext}>Next</Button>
    </div> 
    <h1 className="custom-title" >{renderTitle()}</h1>
    <h2 className="custom-description">{renderPregunta()}</h2>
    <h3 className="custom-respuesta">{renderRespuesta()}</h3>
    <img src={renderPhoto()}  className="custom-photo" alt="logo" />
    </div>
);
}
export default Principal;