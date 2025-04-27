import fs from "node:fs/promises";
import { existsSync } from "node:fs";

import { FOLDER, ERROR_MSG } from "./constants.js";
import { returnPathToFile } from "./helper.js";


const rename = async () => {
    const oldFileName = "wrongFilename.txt";
    const newFileName = "properFilename.md";

    const pathToOldFile = returnPathToFile(FOLDER, oldFileName);
    const pathToNewFile = returnPathToFile(FOLDER, newFileName);

    if (!existsSync(pathToOldFile) || existsSync(pathToNewFile)) {
        throw new Error(ERROR_MSG);
    } else {
        await fs.rename(pathToOldFile, pathToNewFile);
    }
};

await rename();