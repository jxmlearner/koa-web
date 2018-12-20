const sequelize = require('./mysqldb.js')
/*  测试是否可以连接成功 */
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });