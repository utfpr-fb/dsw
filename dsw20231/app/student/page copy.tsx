import { getStudentById, deleteStudentById, updateById } from "@/app/model/StudentService";
import { NextRequest } from "next/server";
import { redirect } from 'next/navigation';
import { revalidatePath } from "next/cache";

//export const dynamic = 'force-dynamic'
export default async function EditStudent(params:any){
    const id= params.searchParams.id;
    const student = await getStudentById(id);
    //console.log(student)

    const handlerSubmit = async (formData: FormData)=>{
        'use server';
        console.log("Server")
        const id = formData.get("id") as string;
        console.log(id) 
         await deleteStudentById(id); 
         //Verificar que não é necessário, just export const dynamic = 'force-dynamic'
        // revalidatePath('/student/list');
        redirect('/student');
    }

     async function Update(formData: FormData){
        'use server'
        console.log("UPdate")
        const id = formData.get("id") as string;
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        await updateById(id, name, email)
        redirect('/student');
    }
    return(
        <>
        <h1>{student.name}</h1>
        <form action={handlerSubmit}>
            <input type="text" name="id" defaultValue={student.id}/> <br></br>
            <input type="text" name="name"defaultValue={student.name}/>
            <input type="text" name="email"defaultValue={student.email}/>

            <button type="submit">Excluir</button>
            <button formAction={Update}>Salvar Alterações</button>
        </form>
        </>


    )

}