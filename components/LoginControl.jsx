import { useState } from "react"

export default function LoginControl () {

    const [estaLogado, atualizaLogin] = useState(false)

    return (

        <>
        
        <h2>Controle de Login!</h2>

        {
            estaLogado ? (
                <div>
                    <p>Bem-vindo de volta!</p>
                    <button onClick={() => {atualizaLogin(false)}}>Sair</button>
                </div>
            ) : (

                <div>
                    <p>Por favor, faça login!</p>
                    <button onClick={() => {atualizaLogin(true)}}>Entrar</button>
                </div>
            )
        }

        </>

    )

}