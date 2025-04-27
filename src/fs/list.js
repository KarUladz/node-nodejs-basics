import fs from "node:fs/promises";

import { FOLDER, ERROR_MSG } from "./constants.js";
import { returnPathToFolder } from "./helper.js";

const list = async () => {
    const folderPath = returnPathToFolder(FOLDER);

    try {
        const listFiles = await fs.readdir(folderPath);
        console.log(listFiles);
    } catch {
        throw new Error(ERROR_MSG);
    }
};

await list();