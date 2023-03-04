import { serve } from "./deps.js";
import { configure } from "./deps.js";
import * as shoppingListController from "./controllers/shoppingListController.js";
import { viewPage } from "./controllers/mainController.js";
import * as listController from "./controllers/listController.js";

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

  console.log("Responding with Hello world!");
  if (request.method === "GET" && url.pathname === "/lists") {
    // viewing the lists page
    return await shoppingListController.viewLists(request);
  }
  if (request.method === "POST" && url.pathname.match("/lists/[0-9]+/deactivate")) {
    // deactivating a list
    return await shoppingListController.deactivateList(request);
  }
  if (request.method === "POST" && url.pathname === "/lists") {
    // creating new list
    return await shoppingListController.createList(request);
  }
  if (request.method === "GET" && url.pathname === "/"){
    // viewing main page
    return await viewPage(request);
  }
  if (request.method === "GET" && url.pathname.match("/lists/[0-9]+")) {
    return await listController.view(request);
  }
  if (request.method === "POST" && url.pathname.match("lists/[0-9]+/items")) {
    return await listController.add(request);
  }
};

serve(handleRequest, { port: 7777 });
