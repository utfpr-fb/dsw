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
    return (      
        
            <li key={student.id}><span>{student.name}</span>   <input
            type="button"
            value="Delete"
            onClick={() => {
              startTransition(() => {
                deleteStudent(student.id);
              });
            }}
          /></li>
          
     
    )

  }