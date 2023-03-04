import { sql } from "../database/database.js";

const viewItems = async () => {
    return await sql`select * from shopping_list_items`;
};

const addItem = async (id, name) => {
    await sql`insert into shopping_list_items (shopping_list_id, name)
        values (${id}, ${name})`;
};

const countItems = async () => {
    return await sql`select count(id) from shopping_list_items`;
}

export { viewItems, addItem, countItems };