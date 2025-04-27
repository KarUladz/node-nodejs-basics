import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const returnPathToFolder = (folderName) => {
    return join(__dirname, folderName);

};
export const returnPathToFile = (folderName, fileName) => {
    return join(__dirname, folderName, fileName);
};
