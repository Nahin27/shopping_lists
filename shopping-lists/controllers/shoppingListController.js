import * as shoppingListsService from "../services/shoppingListsService.js";
import * as requestUtils from "../utils/requestUtils.js";
import { configure, renderFile } from "../deps.js";

configure({
    views: `${Deno.cwd()}/../views/`,
});

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

// what happens when we visit /lists
const viewLists = async (request) => {
    const data = {
        lists: await shoppingListsService.viewList(),
    };
    return new Response(await renderFile("lists.eta", data), responseDetails);
}

// what happens when we create list
const createList = async (request) => {
    const formData = await request.formData();
    const name = formData.get("name")
    await shoppingListsService.addToList(name);

    return requestUtils.redirectTo("/lists");
}

export { viewLists, createList };