import { serve } from "./deps.js";
import { sql } from "./database/database.js";
import { renderFile, configure } from "./deps.js";
import * as shoppingListController from "./controllers/shoppingListController.js";

// TODO: 

// Configuring the file to find the views files 
configure({
  views: `${Deno.cwd()}/views/`,
});

// response detail to parse the .eta file as html
const responseDetails = {
  headers: {
    "Content-Type": "text/html;charset=UTF-8",
  },
};

const handleRequest = async (request) => {
  const url = new URL(request.url);
  const data = {};
  console.log("Responding with Hello world!");
  if (request.method === "GET" && url.pathname === "/lists") {
    // viewing the lists page
    return await shoppingListController.viewLists(request);
  }
  if (request.method === "POST" && url.pathname === "/lists") {
    // creating new list
    return await shoppingListController.createList(request);
  } else if (url.pathname === "/"){
    // viewing main page
    return new Response(await renderFile("index.eta", data), responseDetails);
  }
};

serve(handleRequest, { port: 7777 });
