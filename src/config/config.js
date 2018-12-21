const env = process.env.NODE_ENV || 'development'

let port,database;

if(env === 'development') { // 如果是开发环境
    port = 5000
    database = {
        host: '192.168.4.167',
        database: 'koa-test',
        username: 'root',
        password: '123456',
        port: '3306'
    }
}

if(env === 'production') {  //如果是生产环境
    
}

module.exports = {
    port,
    database
}