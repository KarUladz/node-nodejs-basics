import fs from 'node:fs/promises';

import { ERROR_MSG, FOLDER } from "./constants.js";
import { returnPathToFile } from "./helper.js";


const create = async () => {
    const fileName = 'fresh.txt';
    const msg = 'I am fresh and young';

    const filePath = returnPathToFile(FOLDER, fileName);

    try {
        await fs.writeFile(filePath, msg, { flag: 'wx' });
    } catch {
        throw new Error(ERROR_MSG);
    }
};

await create();

