const connection = require("../app/database")

class CommentService {

    async create(content,momentId,userId){

        const statement = 'INSERT INTO comment (content,moment_id,user_id) value (?,?,?);'

        const [result] = await connection.execute(statement,[content,momentId,userId])

        return result
    }
}


module.exports = new CommentService