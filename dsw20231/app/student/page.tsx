import { Delete } from "../model/StudentService";
export default function student(){
    const handlerSubmit = async (formData: FormData)=>{
        'use server';
        console.log("Server")
        console.log(formData.get("id"))
        const id = formData.get("id");
        const my = Delete(id)
    };
    return(
        <form action={handlerSubmit}>
            <input type="text" name="id" />
            <button type="submit">Enviar</button>
           
    
        </form>
    )
        
}