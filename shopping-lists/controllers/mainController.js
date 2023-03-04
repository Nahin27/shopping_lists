import { countList } from "../services/shoppingListsService.js";
import { configure, renderFile } from "../deps.js";
import { countItems } from "../services/listService.js";

configure({
    views: `${Deno.cwd()}/../views/`,
});

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const viewPage = async (request) => {
    const data = {
        lists: await countList(),
        items: await countItems(),
    }
    return new Response(await renderFile("index.eta", data), responseDetails);
};

export { viewPage };