import { sql } from "../database/database.js";

const viewList = async () => {
    return await sql`select * from shopping_lists where active = true`;
};

const addToList = async (name) => {
    await sql`insert into shopping_lists (name) values (${name})`;
}
export { viewList, addToList };