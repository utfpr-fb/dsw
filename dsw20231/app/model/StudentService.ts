
import { db } from '@vercel/postgres';

export async function Delete(id:string){
const client = await db.connect(); 
  const {rows} = await client.sql`DELETE FROM Student where id=(${id})`;
  return "ok"
}