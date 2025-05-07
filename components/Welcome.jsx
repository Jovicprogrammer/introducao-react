export function Welcome({name}) {

    const diadasemana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});

    return <div className="div-welcome">
        <h2>Bem vindo, {name}!</h2>

        <p>
            Hoje é {diadasemana}
        </p>
    </div>
    

}
