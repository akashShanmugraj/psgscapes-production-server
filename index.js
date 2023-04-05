import app from './server.js'
import mongodb from "mongodb"
import Attedance from "./server/attendance.js"

const MongoClient = mongodb.MongoClient
const uri = "mongodb+srv://devakash:S2KKc9cHdiWPGS1X@cluster0.wr2no1s.mongodb.net/"

const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await Attedance.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    } )