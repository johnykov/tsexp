import express from 'express'
import * as routes from './components/routes'
// npx tsx --watch src/app.ts

const app = express()
Object.values(routes).forEach(el => el(app))

app.listen(9123, ()=>{
  console.log(`Server is listening on ${9123}`);
});
