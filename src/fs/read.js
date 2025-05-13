import { readFile } from "node:fs";

import { returnPathToFile } from "./helper.js";
import { ERROR_MSG, FOLDER } from "./constants.js";


const read = async () => {
    const pathToFile = returnPathToFile(FOLDER, "fileToRead.txt");

    readFile(pathToFile, "utf8", (err, data) => {
        if (err) throw new Error(ERROR_MSG);
        console.log(data);
    });

};

await read();