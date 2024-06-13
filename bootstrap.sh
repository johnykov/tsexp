#!/bin/zsh

mkdir newproject
cd newproject

#Required node 21, jq, sponge
#asdf current
#asdf local nodejs 20.6.1
#brew install jq sponge

npm init -y
#npm install -S convict convict-format-with-validator fastify fastify-type-provider-zod zod
#npm i -D @types/convict
#slonik slonik-interceptor-field-name-transformation
#todo
# redisom
#npm install fastify typeorm sqlite3
#npm install -S typeorm sqlite3
npm install -D @tsconfig/node21 tsx typescript @types/node
mkdir src
touch tsconfig.json
npm i -S express
npm i -D @types/express
cat << EOF > .env
PROPERTY=value
EOF

cat << EOF > tsconfig.json
{
  "extends": "@tsconfig/node21/tsconfig.json",
  "compilerOptions": {
    "rootDirs": [
      "src"
    ],
    "outDir": "dist"
  },
  "exclude": [
    "node_modules"
  ]
}

EOF

#add to package json, requires jq, sponge
jq '.scripts.dev="tsx watch --env-file=.env src/index.ts"' package.json | sponge package.json
jq '.scripts.build="tsc"' package.json | sponge package.json

cat << EOF > src/index.ts
import {delay} from "./delay";

(async () => {
    console.log('hello')
    await delay(2_000)
    console.log('hello 2')
})()
EOF

cat << EOF > src/delay.ts
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
EOF
npm run build
#npm i fastify-plugin @fastify/mongodb
#create and start docker-compose?
#docker run --name some-mongo -p 27017:27017 -d mongo
#docker start $(docker ps -aqf "name=mongo")
