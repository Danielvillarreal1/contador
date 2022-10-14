import {counter} from './Counter'
import { useState, useEffect } from "react"


export function EsPrimo() {

    const [counter, setCounter] = useState([]);

    // useEffect(() =>{
    //     setCounter()
    // },[])

    // if(counter.length ===0){
    //     return <h1>no hay numeros primos</h1>
    // }
  return (
    <div>
        {/* {counter.map((cont) =>
            <div>primo</div>
        )} */}
            <h1>Primo: </h1>
            <button  onClick={() => {
                //setCounter(counter +1)  // doy clic en boton y suma 1
            }}>
                esPrimo
            </button>

        </div>
    
  )
}
                          


// alert('mensaje', mensaje) 


// let numeroPrimo = primo;
// let esNumeroPrimo = true;
// for(let i =2; i<numeroPrimo /2; i++){
//     if (numeroPrimo){
//         console.log("Es un numero primo", numeroPrimo);
//     }else
//     console.log("no es numero primo", numeroPrimo);
// 