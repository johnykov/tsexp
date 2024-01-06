import { log } from "console";
import { asd } from "./external";

(async () => {
    log(asd);

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    console.log(1);
    await sleep(2000);
    log('resolved promise', await asd);
    console.log(2);
})()
