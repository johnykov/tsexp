import { log } from "console";
import { external_instance } from "./external";
import { sleep } from "./sleep";
    
(async () => {
    log(external_instance);

    console.log(1);
    await sleep(2000);
    const prom_res = await (external_instance.init())
    log('resolved promise', prom_res)
    log('resolved work', external_instance.work)
    console.log(2);
})()
