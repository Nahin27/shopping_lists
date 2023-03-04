import { serve } from "./deps.js";
import { sql } from "./database/database.js";
import { renderFile, configure } from "https://deno.land/x/eta@v1.11.0/mod.ts";

// Configuring the file to find the views files 
configure({
  views: "./views",
});

// response detail to parse the .eta file as html
const responseDetails = {
  headers: {
    "Content-Type": "text/html;charset=UTF-8",
  },
};

const handleRequest = async (request) => {
  const data = {};
  console.log("Responding with Hello world!");
  return new Response(await renderFile("index.eta", data), responseDetails);
};

serve(handleRequest, { port: 7777 });
