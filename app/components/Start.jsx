"use client"
import Link from "next/link"
import { useState } from "react"
export default function Start() {
     const [vidas,setVidas] = useState(1);

     const asignedLife = ({target}) =>{
            
        setVidas(target.value)
    
        
     }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-orange-400">
    <div className="flex flex-col items-center justify-center rounded-md shadow-md bg-slate-200 w-96 h-72 shadow-black gap-y-4">
       <label>Selecione la cantidad de vidas para empezar</label>
         <input type="number" className="w-32 text-center rounded-sm shadow-sm shadow-black" name="life" onChange={asignedLife} value={vidas}/>
      {
        (vidas <= 0) ? <p>Ingrese valores positivos mayores a cero</p> : <Link href={`/game/${vidas}`} className="flex justify-center w-32 p-2 text-center text-white bg-blue-600 rounded-sm">Jugar</Link>
      }
    </div>
</div>
  )
}
