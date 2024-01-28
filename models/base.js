const conn = require('../utils/db')

class BaseSQLModel {
    constructor(tableName) {
        this.tableName = tableName;
    }

    executeQuery(query, params) {
        return new Promise((resolve, reject) => {
            conn.query(query, params, (error, results) => {
                if (error) {
                    reject (error);
                } else {
                    resolve(results);
                } 
            });
        });
    } 

    async findAll() {
        const query = `select * from ${this.tableName}`
        const results = await this.executeQuery(query)
        return results
    }

    async findByID(id) {
        const query = `select * from ${this.tableName} where id = ?`
        const results  = await this.executeQuery(query, [id])
        return results[0]
    }

    async findOne(where, value) {
        const query = `select * from ${this.tableName} where ${where}="${value}"`
        const results = await this.executeQuery(query, [where, value])
        return results[0] 
    }
    async create(data) {
        const query = `insert into ${this.tableName} set ?`
        const result = await this.executeQuery(query, data)
        return result.insertId
    }

    async update(id, data) {
        const query = `update ${this.tableName} set ? where id = ?`
        const result = await this.executeQuery(query, [data, id])
        return result.affectedRows
    }

    async delete(id) {
        const query = `delete from ${this.tableName} where id = ?`
        const result = await this.executeQuery(query, [id])
        return result.affectedRows
    }
}

module.exports = BaseSQLModel