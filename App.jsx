import Counter from './components/Counter.jsx';
import Greeting from './components/Greeting.jsx';
import { Hello } from './components/Hello.jsx';
import { JsxExample } from './components/JsxExample.jsx';
import LoginControl from './components/LoginControl.jsx';
import ToDoList from './components/TodoList.jsx';
import { Welcome } from './components/Welcome.jsx';

export function App() {

    return (
        <div className="App">
            <h2 className='h2-App'>Vamos Começar...</h2>
            {/* <span className='span-app'>
                <Hello nome={"Marinette"}/>
            </span>
            <p>Olá mundo! você se encontra na primeira página...</p>

            <h2 className='h2-App'>O que vem por aí?</h2>
            <p>
                Não agora, mas logo tudo vai estar prontinho para alcançar o conhecimento de todos! Aguarde 👀
            </p>

            <JsxExample career={"Baseball Bat"}/>

            <Welcome name={'Mazaroppi'}/> */}

            {/* <Greeting name={'Gergamotta'} age={22}/>
            <Greeting name={'Mike'} age={42}/>
            <Greeting name={'Izzy'} age={29}/> */}

            {/* <Counter/> */}
{/* 
            {<LoginControl/>} */}

            <ToDoList/>

        </div>
    )

}