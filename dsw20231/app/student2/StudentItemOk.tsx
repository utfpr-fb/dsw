"use client";
import { Student } from "../types";
import { useTransition } from "react";

export function StudentItem ({
    student,
    deleteStudent,
  }: {
    student: Student;
    deleteStudent: (id: string | number) => Promise<void>;
  }) {
    const [isPending, startTransition] = useTransition();
    function Vai(id:number|string){
      if (confirm("Confirma a exclusão"))
      //alert(oi)
      deleteStudent(id);
    }
    return (      
        
            <li key={student.id}><span>{student.name}</span>   <input
            type="button"
            value="Deletar"
            onClick={() => {
              startTransition(() => {
                deleteStudent(student.id);
              });
            }}
          /><input type="button" value="Diga" onClick={() => Vai(student.id)} />  </li>
          
     
    )

  }