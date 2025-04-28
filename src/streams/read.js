import { createReadStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const FOLDER = "files";
    const FILE = "fileToRead.txt";
    const PATH_TO_FILE = join(__dirname, FOLDER, FILE);

    const rs = createReadStream(PATH_TO_FILE, {encoding: "utf-8"});

    rs.on('data',(data) => {
        process.stdout.write(data);
    });
    rs.on("error", (err) => {
        process.stdout.write("STREAMS operation failed");
    });
    rs.on("end", () => {
        process.stdout.write("\n");
    });
};

await read();
