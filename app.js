const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const fs = require('fs');
const path = require('path');

//const index = require('./routes/index');
//const users = require('./routes/users');
const COMMENTS_FILE = path.join(__dirname, './json/comments.json');
let env = process.env.NODE_ENV || 'production';

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/'));

app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

console.log(COMMENTS_FILE);

// logger
app.use(async(ctx, next) => {
  const start = new Date();
  await next();

  ctx.state = {
    title: 'Karas',
    _env: env
  };
  await ctx.render('index', {});

  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.get('/json/comments', async(ctx, next) => {
  ctx.type = 'application/JSON';
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(data)
    ctx.body = data;
  });
  await next();
});

router.post('/json/comments', async(ctx, next) => {
  ctx.type = 'application/JSON';
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    let comments = data;
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    let newComment = {
      id: Date.now(),
      author: ctx.request.body.author,
      text: ctx.request.body.text,
      time: ctx.request.body.time,
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      ctx.body = comments;
    });
  });
  await next();
});

//router.use('/', index.routes(), index.allowedMethods());
//router.use('/users', users.routes(), users.allowedMethods());

//app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;