
import { db } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function getStudentById(id: any) {
  const client = await db.connect();
  const { rows: students }= await client.sql`SELECT * FROM Student where id=(${id})`;
  return students[0];
}
export async function getAllStudent(){
  const client = await db.connect(); 
  const { rows: students } = await client.sql`SELECT * FROM Student ;`;
  //console.log(rows)
  //return JSON.stringify(rows)
  
  return students;
}

export async function addStudent(name: any, email: any) {
  const client = await db.connect();
  await client.sql`INSERT INTO Student (name, email) VALUES (${name}, ${email})`
  //revalidatePath('/student')
 // redirect('/student');
  
  //redirect(`/blog/${post.slug}`);
}
export async function deleteStudentById(id: any) {
  const client = await db.connect();
  await client.sql`DELETE FROM Student where id=(${id})`;
 // revalidatePath('/student')
}