import * as shoppingListsService from "../services/shoppingListsService.js";
import * as requestUtils from "../utils/requestUtils.js";
import { configure, renderFile } from "../deps.js";
import * as listService from "../services/listService.js";

configure({
    views: `${Deno.cwd()}/../views/`,
});

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

// the page in /lists/id
const view = async (request) => {
    const url = new URL(request.url);
    const parts = url.pathname.split("/");
    const list_id = parts[2];
    const data = {
        list: await shoppingListsService.listById(list_id),
    };
    return new Response(await renderFile("list.eta", data), responseDetails);
}

const add = async (request) => {
    const url = new URL(request.url);
    const formdata = await request.formData();
    const parts = url.pathname.split("/");
    const name = formdata.get("name");
    const id = parts[2];

    await listService.addItem(id, name);

    return requestUtils.redirectTo(`/lists/${id}`);
}

export { view, add };