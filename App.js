const koa = require('koa');

const app = new koa();

function main(params) {
console.log('main');
}

function mindeware(params) {
    // hoxfix main branch
}
app.use(main);

app.listen(3001);