import {delay} from "./delay";
import {AppDataSource} from "./datasource";

(async () => {
    AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    console.log('hello')
    await delay(2_000)
    console.log('hello 2')
})()
