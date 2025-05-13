import { createReadStream } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash, } from "node:crypto";


const calculateHash = async (algorithm, data) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const PATH_TO_FILE = join(__dirname, "files", "fileToCalculateHashFor.txt");

    const file = createReadStream(PATH_TO_FILE, {encoding: "utf-8"});

    const hash = createHash("sha256");

    file.on("readable", () => {
        const data = file.read();
        if (data) {
            hash.update(data);
        } else {
            console.log(`${(hash.digest("hex"))}`);
        }
    });
};

await calculateHash();