import app from './server.js'
import mongodb from "mongodb"
import Attedance from "./server/attendance.js"

const MongoClient = mongodb.MongoClient
const uri = "mongodb+srv://akash:v3621O59VW8g0BNb@psgscapes-data-ac295d1f.mongo.ondigitalocean.com/?authMechanism=DEFAULT"

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