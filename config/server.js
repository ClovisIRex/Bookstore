module.exports = {
    port: process.env.PORT || 8080,
    isTesting() {
        return process.env.NODE_ENV !== 'production'
    },
    dbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/bookstore',
    dbConfig(){
        let autoIndexFlag = (process.env.NODE_ENV === 'production') ? false : true
        return { autoIndex: autoIndexFlag, useMongoClient: true }
    },
}