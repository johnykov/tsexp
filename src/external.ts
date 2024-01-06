import { log } from "console";

async function example() {
    log('running example')
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000);
    });
  
    let result = await promise; // wait till the promise resolves (*)
  
    log(result); // "done!"
    return result
  }
  
  export let asd = example();