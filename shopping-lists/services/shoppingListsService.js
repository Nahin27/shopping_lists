import { sql } from "../database/database.js";

const viewList = async () => {
    return await sql`select * from shopping_lists where active = true`;
};

export { viewList };