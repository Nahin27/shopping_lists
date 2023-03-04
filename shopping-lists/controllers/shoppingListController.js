import * as shoppingListsService from "../services/shoppingListsService.js";
import { redirectTo } from "../utils/requestUtils.js";
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

export { viewLists };