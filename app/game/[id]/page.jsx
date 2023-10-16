import { Game } from "@/app/components/Game";
export default function GamePage({params}){
       let p = params.id;
     return (
        <>
         <Game params = {p}/>
        </>
     )
}