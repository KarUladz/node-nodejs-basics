import { createWriteStream, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const FOLDER = "files";
    const FILE = "fileToWrite.txt";
    const PATH_TO_FILE = join(__dirname, FOLDER, FILE);

    if (existsSync(PATH_TO_FILE)) {
        const ws = createWriteStream(PATH_TO_FILE, "utf-8");
        await pipeline(process.stdin, ws);
    } else {
        throw new Error(`STREAMS operation failed with path: ${PATH_TO_FILE}`);
    }
};

await write();
