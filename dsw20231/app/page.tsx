'use client'
import {Delete} from "./model/StudentService"
export default function Home() {
  async function testa(){
    console.log("TTTT")
    const persons = await fetch("https://dsw20231.vercel.app/api/students/15", {
      method: "DELETE"
      // headers: { "Content-type": "application/json; charset=UTF-8" }
      //mode: "cors"
    });
    console.log(persons)
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2> Home</h2>
      <button onClick={testa}>Testar</button>
      
    </main>
  )
}
