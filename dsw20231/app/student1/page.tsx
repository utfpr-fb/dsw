import { addStudent } from "../model/StudentService";
import { redirect } from 'next/navigation';
export default function student(){
    const handlerSubmit = async (formData: FormData)=>{
        'use server';
        console.log("Server")
        const name = formData.get("name");
        const email = formData.get("email");
        addStudent(name, email)
        redirect('/student');
    };
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form action={handlerSubmit}>
            <input type="text" name="name" /> <br></br>
            <input type="text" name="email" />
            <button type="submit">Salvar</button>
           
    
        </form>
        </main>
    )
        
}