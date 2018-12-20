const Sequelize = require('sequelize')
const { database } = require('../config/config')   //配置文件

const sequelize = new Sequelize(database.database, database.username, database.password, {
    host: database.host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,   // 连接池中最大连接数量
        min: 0,
        acquire: 30000,
        idle: 10000  // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    },
    define: {
        freezeTableName: true,  // 如果为 true 则表的名称和 model 相同，即 user  为 false MySQL创建的表名称会是复数 users
        timestamps: false
    }
})

/*  测试是否可以连接成功
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
*/
module.exports = sequelize