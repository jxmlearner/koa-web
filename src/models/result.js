class Result {
    error(msg) {
        return { code: 100, msg: msg }
    }
    success(msg, data) {
        return { code: 200, msg: msg, data: data }
    }
    pageresult(msg, data) {   //分页数据的返回
        return { code: 200, msg: msg, rows: data.rows.map(m => m.dataValues), count: data.count }
    }
}

module.exports = Result