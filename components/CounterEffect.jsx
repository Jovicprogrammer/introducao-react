import { useEffect, useState } from "react";

export default function CounterEffect() {

    const [contador, atualizarContador] = useState(0)
    const [EhPar, atualizarEhPar] = useState(false)

        //efeito que será dependente da variável 'contador'
    useEffect(() => {
        console.log(`O contador mudou para: ${contador}`)

        //o valor é par?
        atualizarEhPar(contador % 2 === 0)

        //efeito visual
        document.title = `Contagem ${contador}`


    }, [contador])

    return (
        <div>

            <h2>Contador com efeito dependente</h2>
            <p>Valor Atual:{contador} </p>
            <p>O número é impar/par</p>

            <button onClick={() => {atualizarContador(c => c + 1)}}>Incrementar</button>

            <button onClick={() => {atualizarContador(0)}}>Resetar</button>
        </div>
    )

}