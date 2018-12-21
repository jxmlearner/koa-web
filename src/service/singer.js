const Singer = require('../models/Singer')
const sequelize = require('../util/mysqldb')
const Op = require('sequelize').Op

module.exports = {
    getSingerList: async ({ index, area, pageIndex, pageSize }) => {   //取歌手的分页数据
        let offset = (pageIndex-1)*pageSize
        let singers = await Singer.findAndCountAll({
            where: {
                index: {[Op.eq]:index},
                area: {[Op.eq]:area}
            },
            offset,
            limit: pageSize
        })
        return singers
    }
}