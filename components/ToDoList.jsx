export default function ToDoList () {

    const tasks = [
        {id: 1, text: 'Aprender React'},
        {id: 2, text: 'Ler o livro de computação'},
        {id: 3, text: 'Desenvolver slow risers'},
        {id: 4, text: 'Atualizar o Github'},
        {id: 5, text: 'Fazer as atividades'}
    ]

    return (

        <div>
            <h2>Lista de Tarefas</h2>

            <ul>
                {
                    tasks.map((task, index) => 
                        {return(<li key={index}>{task.text}</li>)})
                }
            </ul>
        </div>

    )

}