import { useState } from "react"

export function Counter(){

    const [counter, setCounter] = useState(0)  // es una variable y una f para modificarlo.
    return (
        <div>
            <h1>Contador: {counter}</h1>
            <button onClick={() => {
                setCounter(counter +1)  // doy clic en boton y suma 1
            }}>
                Incrementar
            </button>

            {/* <button onClick={() => {
                setCounter(counter )  // doy clic en boton y suma 1
            }}>
                Primo
            </button> */}

        </div>
    )
}