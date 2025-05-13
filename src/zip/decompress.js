import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "stream/promises";

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createGunzip } from "node:zlib";


const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const FOLDER = "files";
    const FILE = "fileToCompress.txt";
    const GZ = "archive.gz";
    const PATH_TO_FOLDER = join(__dirname, FOLDER);

    const rs = createReadStream(join(PATH_TO_FOLDER, GZ));
    const ws = createWriteStream(join(PATH_TO_FOLDER, FILE));
    await pipeline(rs, createGunzip(), ws);
};

await decompress();
