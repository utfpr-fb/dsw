import fs from "node:fs/promises";
import FileList from "./botao";
import { getAllStudent } from "@/app/model/StudentService";
export default function student() {
    async function getFiles(path: string){
        "use server";
        //return path
        //return await JSON.stringify(getAllStudent());
        return fs.readdir(path);
    }  
    return (
      <main className="p-5 text-2xl max-w-xs">
        <FileList getFiles={getFiles} />
      </main>
    );
  }