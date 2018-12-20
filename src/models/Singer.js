const Sequelize=require('sequelize')
const sequelize=require('../util/mysqldb')

const Singer=sequelize.define('singer',{
  id: {
    type:Sequelize.INTEGER,     //自增主键
    primaryKey:true,
    autoIncrement:true
  },
  country:Sequelize.STRING,         //因为是手动建的表,所以model中的长度啥的都可以不定义  
  singer_id:Sequelize.STRING,
  singer_mid:Sequelize.STRING,
  singer_name:Sequelize.STRING,
  singer_pic:Sequelize.STRING,
  area:Sequelize.INTEGER,
  genre:Sequelize.INTEGER,
  index:Sequelize.INTEGER,
  sex:Sequelize.INTEGER,
  createTime:Sequelize.STRING
},{
    tableName:'tb_music_singer'
})

module.exports=Singer