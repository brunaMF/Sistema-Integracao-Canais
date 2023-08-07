import { db } from "$lib/server/db.js";

export async function load() {
    const dados = db.prepare('SELECT * FROM usuario').all();
    return { usuarios : dados };
};
