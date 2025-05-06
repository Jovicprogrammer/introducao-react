import { Hello } from './components/Hello.jsx';
import { JsxExample } from './components/JsxExample.jsx';

export function App() {

    return (
        <div className="App">
            <h2>Vamos Começar...</h2>
            <Hello nome={"Stefani Gergamotta"}/>
            <p>Olá mundo! você se encontra na primeira página...</p>

            <h2>O que vem por aí?</h2>
            <p>
                Não agora, mas logo tudo vai estar prontinho para alcançar o conhecimento de todos! Aguarde 👀
            </p>

            <JsxExample career={"Baseball Bat"}/>

        </div>
    )

}