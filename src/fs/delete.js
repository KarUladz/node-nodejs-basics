import { unlink } from "node:fs";
import { returnPathToFile } from "./helper.js";
import { ERROR_MSG, FOLDER } from "./constants.js";


const remove = async () => {
    const fileName = "fileToRemove.txt";
    const pathToFile = returnPathToFile(FOLDER, fileName);

    await unlink(pathToFile, (err) => {
        if (err) throw new Error(`${ERROR_MSG}: ${fileName} not found`);
    });
};

await remove();