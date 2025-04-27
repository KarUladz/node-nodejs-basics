import fs from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";


const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const PATH_TO_FILE = join(__dirname, "files", "fileToCalculateHashFor.txt");

    const file = await fs.readFile(PATH_TO_FILE, "utf-8");
    const hashResult = crypto.createHash("sha256").update(file).digest("hex");

    console.log(hashResult);
};

await calculateHash();