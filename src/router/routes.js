const Router = require('koa-router')
// const musicCtrl = require('../controller/music')   // 这里引入controller

module.exports = app => {
    const router = new Router()

    const apiRouter = new Router()

    router.get('/', async(ctx,next) => {
        ctx.type = 'text/html'
        ctx.body = `<h1>这里是Koa首页</h1>`
    })

    // apiRouter.get('/music/focuslist',musicCtrl.focuslist)  //取焦点图列表

    //设定api路由为router的子路由
    router.use('/api', apiRouter.routes(), apiRouter.allowedMethods())
    
    //如果匹配不到路由则返回404
    router.all('/*', async (ctx, next) => {
        ctx.response.status = 404;
        ctx.response.body = `<h1>~~oops page not found!</h1>`
    })
    app.use(router.routes()).use(router.allowedMethods())
}