import { useState } from "react"
export default function EventExample() {

    const [inputValue, setInputValue] = useState('')
    const handleChange = (e) => {setInputValue(e.target.value)}

    const handleClick = () => {console.log('botao clicado!')}

    return (
        <div>
            <h2>Exemplo de Evento</h2>

            <button onClick={handleClick}>Clique-me!</button>

            <input onChange={handleChange}
            type="text"
            value={inputValue}
            placeholder="Digite algo..."
            />

            <p>Você digitou: {inputValue} </p>

        </div>
    )

}