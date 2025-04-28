import { fork } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";


const spawnChildProcess = async (args) => {
    const fileName = "script.js";
    const folder = "files";
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const pathToFile = join(__dirname, folder, fileName);

    fork(pathToFile, args).on("message", (res) => process.stdout.write(res));
};

await spawnChildProcess(["argument-1", "argument-2", "argument-3", "argument-4"]);
