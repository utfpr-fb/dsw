import { revalidatePath } from "next/cache";
import { deleteStudentById, getAllStudent } from "../model/StudentService";
import { StudentItem } from "./StudentItem";
import { Student } from "../types";

export default async function Home(){
    const students = await getAllStudent();

    async function deleleStudent(id: string | number){
       "use server"
       await deleteStudentById(id)
       revalidatePath("/");

    }
    return (
        <ul className='mt-4 flex flex-col gap-1'>
        
        {students?.map(student => (
              <StudentItem key={student.id} student={student} deleteStudent={deleleStudent} />
          ))}      
      </ul>
    )
}