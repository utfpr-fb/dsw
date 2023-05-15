import { getAllStudent } from "@/app/model/StudentService"

import { escape } from "querystring";
import Table from "./table";
async function getAll(){
    const students = await getAllStudent();
   // const es = [{name:"adair", email:"emailada"}]
   
    return students;

}
function retorna(){
    return "myString"
}

export default async function Page(){
     
    return(
       <Table/>

    )
}