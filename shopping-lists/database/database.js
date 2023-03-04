import { postgres } from "../deps.js";

// if there is a database url, open database with that, or just open with env
let sql;
if (Deno.env.get("DATABASE_URL")) {
    sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
    sql = postgres({});
}



export { sql };

