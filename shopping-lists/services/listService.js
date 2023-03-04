import { sql } from "../database/database.js";

const viewItems = async (list_id) => {
    return await sql`select shopping_list_items.name, shopping_list_items.id, shopping_list_items.collected from shopping_list_items inner join shopping_lists
    on shopping_list_items.shopping_list_id = shopping_lists.id
    where shopping_lists.id = ${list_id}
    order by collected, shopping_list_items.name`;
};

const addItem = async (id, name) => {
    await sql`insert into shopping_list_items (shopping_list_id, name)
        values (${id}, ${name})`;
};

const countItems = async () => {
    return await sql`select count(id) from shopping_list_items`;
};

const collectItem = async (id) => {
    await sql`update shopping_list_items set collected = true where id = ${id};`;
};

export { viewItems, addItem, countItems, collectItem };