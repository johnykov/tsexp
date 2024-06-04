import {delay} from "./delay";

(async () => {
    console.log('hello')
    await delay(2_000)
    console.log('hello 2')
})()
