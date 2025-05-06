import { use } from 'react'
import "../style.css"
export function JsxExample({career}) {

    const name = "Reporter"
    const user = {
        firstName: 'Ferdinando',
        lastName: 'Desafio'
    }

    return (
        <div className="divJSX">
            <h2 className='h2JSX'>America... America has a problem</h2>
            <p>this Barbie is a {career}</p>
            <p>
                this user {user.firstName} is a {name}.
            </p>

            <p>2 + 2 = {2+2}</p>

        </div>
    )
}