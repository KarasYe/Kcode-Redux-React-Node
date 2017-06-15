let router = require('koa-router')()

router.get('/', async function(ctx, next) {
  ctx.state = {
    title: 'Karas',
    _env: 'production'
  };

  await ctx.render('index', {});
})
module.exports = router