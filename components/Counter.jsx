import { useState } from "react"

export default function Counter() {

    const [contador, atualizaContador] = useState(0)
    
    return (
        <div>

            <h2>Contador!</h2>

            <p>Você clicou {contador} vezes</p>

            <button onClick={() => {atualizaContador(contador + 1)}}>
                Clique aqui!
            </button>

        </div>
    )
}