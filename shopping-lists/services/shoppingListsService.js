import { sql } from "../database/database.js";

const viewList = async () => {
    return await sql`select * from shopping_lists where active = true`;
};

const addToList = async (name) => {
    await sql`insert into shopping_lists (name) values (${name})`;
};

const deactiveList = async (id) => {
    await sql`update shopping_lists
        set active = false
        where id = ${id}`;
};

const countList = async () => {
    return await sql`select count(id) from shopping_lists`;
}

export { viewList, addToList, deactiveList, countList };