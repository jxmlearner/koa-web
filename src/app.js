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

