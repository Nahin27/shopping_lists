import { serve } from "./deps.js";
import { sql } from "./database/database.js";
import { renderFile, configure } from "https://deno.land/x/eta@v1.11.0/mod.ts";

await sql`insert into shopping_lists (name) values ('nahin')`;

const handleRequest = async (request) => {
  console.log("Responding with Hello world!");
  return new Response("Hello world!");
};

serve(handleRequest, { port: 7777 });
