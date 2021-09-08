const koa = require('koa');

const app = new koa();


function main(params) {
console.log('main');
}
app.use(main);

app.listen(3001);