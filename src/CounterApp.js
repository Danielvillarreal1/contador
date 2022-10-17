// import {useState, useEffect} from 'react'

// function CounterApp() {
//     const [counterApp, setCounterApp] = useState(0)  // es una variable y una f para modificarlo.
//     const [esPrimo, setEsPrimo] = useState(counterApp) 

//     const incrementarCounter = ()=>{
//         setCounterApp(counterApp +1)
//     }  
    
//     useEffect(function () {
//         //console.log('render')
//         setEsPrimo()
       
//     }, [])  
//     // console.log(counterApp)
    
//     const esPrimoCounter = () =>{
//         // if (counterApp === 10){
//         //     setEsPrimo(5)
//         // }
        
//         console.log(counterApp)  
//             if(counterApp ===2){
//                 // setEsPrimo('es primo')
//             }else if(counterApp < 2){
//                 // setEsPrimo('no esprimo')
//             }for(var i=2; i<counterApp; i++){
//                 if(counterApp % i === 0){
//                      setEsPrimo('No esprimo')
//                 }
                
//             }
//              setEsPrimo('es primo')
//             //alert('mensaje', esPrimo) 

        

             
   
    


        


//         // 2, 3, 5, 7, 11, 13, 17, 19, 23, 
//     }
   

  
//     return (
//     <div className='text-center mt-4'>
//          <h1>Contador: {counterApp}</h1>
//             <button className='btn btn-primary' type="submit" onClick={incrementarCounter}> 
//                 Incrementar
//             </button>

//             <h1>Primo: {esPrimo}</h1>
//             <button className='btn btn-primary' type="submit" onClick={esPrimoCounter}> 
//                 Primo
//             </button>
//     </div>
//   )
// }

// export default CounterApp

import {useState} from 'react';
 
export default function BasicButtons() {
  const [counterApp, setCounterApp] = useState(0)  // es una variable y una f para modificarlo.
  const [esPrimo, setEsPrimo] = useState("ingrese un valor") 
  const [histPrimo, setHistPrimo] = useState([])
 
    const incrementarCounter = ()=>{
        setCounterApp(counterApp +1)
    }  
    
    const esPrimoCounter = () =>{
      if (counterApp <= 1) setEsPrimo("No es primo");
      else if( counterApp % 2 == 0 ) setEsPrimo("No es primo")
      else setEsPrimo("Es primo") 
    }
  
    const historial = () =>{
        setHistPrimo([...esPrimo,
           
    
    ])
        console.log(esPrimo)
    }

    return (
    <div className='text-center mt-4'>
         <h1>Contador: {counterApp}</h1>
            <button className='btn btn-primary' type="submit" onClick={incrementarCounter}> 
                Incrementar
            </button>
 
            <h1>Primo: {esPrimo}</h1>
            <button className='btn btn-primary' type="submit" onClick={esPrimoCounter}> 
                Primo
            </button>

            <h1>historialPrimo: {histPrimo}</h1>
            <button className='btn btn-primary' type="submit" onClick={historial}> 
                HistorialPrimo
            </button>
    </div>
 
 )
}
