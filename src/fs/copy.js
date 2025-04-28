import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { FOLDER, ERROR_MSG } from "./constants.js";
import { returnPathToFolder } from "./helper.js";


const copy = async () => {
    const copyFolder = "files_copy";
    const pathMainFolder = returnPathToFolder(FOLDER);
    const pathCopyFolder = returnPathToFolder(copyFolder);

    if (!existsSync(pathMainFolder)) {
        throw new Error(`${ERROR_MSG}: files folder not found.`);
    } else {
        if (existsSync(pathCopyFolder)) {
            throw new Error(`${ERROR_MSG}: files_copy already exists`);
        } else {
            await fs.mkdir(pathCopyFolder);

            const files = await fs.readdir(pathMainFolder);

            for (const file of files) {
                await fs.copyFile(join(pathMainFolder, file), join(pathCopyFolder, file));
            }
        }
    }
};

await copy();
