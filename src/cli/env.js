import pc from "node:process";

const parseEnv = () => {
    const arr = [];
    const data = pc.env;
    const keys = Object.keys(data);

    keys.forEach((key) => {
        if (key.includes("RSS_")) {
            arr.push(`${key}=${data[key]}`);
        }
    });

    console.log(arr.join("; "));
};

parseEnv();
