import {createReadStream, createWriteStream} from 'node:fs';
import { pipeline } from 'node:stream/promises';

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';



const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const FOLDER = 'files';
    const FILE = 'fileToCompress.txt';
    const GZ = 'archive.gz';
    const PATH_TO_FOLDER = join(__dirname, FOLDER);

    const rs = createReadStream(join(PATH_TO_FOLDER, FILE))
    const ws = createWriteStream(join(PATH_TO_FOLDER, GZ))
    await pipeline(rs, createGzip(), ws)
};

await compress();