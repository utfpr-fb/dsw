import { getStudentById, deleteStudentById } from "@/app/model/StudentService";
import { NextRequest } from "next/server";
import { redirect } from 'next/navigation';
import { revalidatePath } from "next/cache";

export default async function Page(params:any){
    const id= params.searchParams.id;
    const student = await getStudentById(id);
    console.log(student)

    const handlerSubmit = async (formData: FormData)=>{
        'use server';
        console.log("Server")
        const id = formData.get("id");
        console.log(id)
         await deleteStudentById(id);
         //Verificar que não é necessário, just export const dynamic = 'force-dynamic'
        // revalidatePath('/student/list');
        redirect('/student/list');
    }
    return(
        <>
        <h1>{student.name}</h1>
        <form action={handlerSubmit}>
            <input type="text" name="id" defaultValue={student.id}/> <br></br>
            <button type="submit">Excluir</button>
        </form>
        </>


    )
}