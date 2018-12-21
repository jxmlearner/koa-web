const service = require('../service/singer')
const Result=require('../models/result')

let result=new Result()

module.exports = {
    singer: async(ctx) => {    // 歌手页面
        let {index = -100, area = -100, pageIndex = 1, pageSize =80 } = ctx.query
        index=Number(index), area=Number(area), pageIndex=Number(pageIndex),pageSize=Number(pageSize) 
        let singerList = await service.getSingerList({ index, area, pageIndex, pageSize })
        let obj= {
            title: '歌手',
            singerList,
            index,
            area
        }
        await ctx.render('singer', obj)
    }
}