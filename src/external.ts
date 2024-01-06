import { log } from "console";

function example() {
    log('initialize')
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("connection init done!"), 1000);
    });
  
    // let result = await promise; // wait till the promise resolves (*)
  const work = "processing"
    // log(result); // "done!"
    return {
      init: ()=>promise,
      work
    }
  }
  
  export let external_instance = example();