## 1. 初始化
`npm init -y`

## 2. 安装koa的常用基础包
```
yarn add koa koa-router koa-json kcors koa-bodyparser koa-static koa-logger

// 安装 koa-art-template 模板引擎
yarn add koa-art-template
// 使用 koa-art-template中间件 必然要先安装 art-template
yarn add art-template
```

## 3. src/app.js 搭建基本的koa 代码  
1. //src/router/routes.js  基本的路由
```
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
```
2. //src/config/config.js 基本的配置
```
const env = process.env.NODE_ENV || 'development'

let port,database;

if(env === 'development') { // 如果是开发环境
    port = 5000
    database = {
        host: 'localhost',
        database: 'koa-test',
        username: 'root',
        password: '123456'
    }
}

if(env === 'production') {  //如果是生产环境
    
}

module.exports = {
    port,
    database
}
```
3. //src/app.js  koa基本代码
```
const Koa = require('koa')
const path = require('path')
const koalogger = require('koa-logger')
const cors = require('kcors')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const render = require('koa-art-template')           //art-template模板引擎
const static = require('koa-static')                 //静态资源
const { port } = require('./config/config')
const router = require('./router/routes')
// const { formatDate } = require('./util/formatdate')


const app=new Koa()
render(app, {
    root: path.join(__dirname,'view'),   //视图存放地址
    extname:'.html',
    debug: process.env.NODE_ENV !== 'production'
})
app.use(static(path.join( __dirname,  './public')))
app.use(cors({credentials: true}))       //允许跨域,并且允许附带cookie
app.use(koalogger())
app.use(json())
app.use(bodyparser())

// 加载路由
router(app)

app.listen(port, ()=> {
    console.log(`server is running at http://localhost:${port}`)
})
```
## 4. 安装开发环境的nodemon 并在package.json中配置启动脚本
`yarn add nodemon -D`
```
"scripts": {
    "dev": "nodemon -w src src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
现在可以启动试一试：
`npm run dev`
