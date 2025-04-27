import pc from "node:process";

const parseArgs = () => {
    const data = pc.argv;

    const filterRes = data.filter((value) => value.slice(0, 2) === "--");
    const res = filterRes
        .map((val) => `${val.slice(2)} is ${data[data.indexOf(val) + 1]}`)
        .join(", ");

    console.log(res);
};

parseArgs();
