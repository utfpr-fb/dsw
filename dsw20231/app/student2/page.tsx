import { revalidatePath } from "next/cache";
import { deleteStudentById, getAllStudent } from "../model/StudentService";
import { StudentItem } from "./StudentItem";
import { Student } from "../types";
import { redirect } from "next/navigation";


export const dynamic = 'force-dynamic'
export default async function Home(){
    const students = await getAllStudent();

    async function deleleStudent(id: number){
       "use server"
       await deleteStudentById(id)
    //  revalidatePath("/");
    redirect('/student2')

    }
    return (
        <ul className='mt-4 flex flex-col gap-1'>
        
        {students?.map(student => (
              <StudentItem key={student.id} student={student} deleteStudent={deleleStudent} />
          ))}      
      </ul>
    )
}