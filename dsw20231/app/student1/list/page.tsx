import { getAllStudent } from "@/app/model/StudentService"
import Link from "next/link";


export const dynamic = 'force-dynamic'
async function getAll(){
    const students = await getAllStudent();
   // const es = [{name:"adair", email:"emailada"}]
   
    return students;

}

export default async function Page(){
     const students = await getAllStudent();
    return(
        <ul className='mt-4 flex flex-col gap-1'>
        
        {students?.map(student => (
            <li key={student.id}><a href={`/student1/edit?id=${student.id}`}>{student.name}</a></li>
          ))}      
      </ul>
    )
}