const koa = require("koa");
const mount = require("koa-mount");
const fs = require('fs');

const app = new koa();
app.use(
    mount('/favicon.ico', (ctx) => {
        ctx.status = 200;
    })
);

const middleKoa = new koa();

app.use(
    mount('/', (ctx) => {
        ctx.body = fs.createReadStream(__dirname + '/index.html');
    })
);

app.use(
    mount('/middle', middleKoa)
);

app.listen(3000);