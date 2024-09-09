import express from 'express'
import * as dotenv from 'dotenv'
import trendsRouter from './app/trends/trends.routes.js'
import cors from 'cors'
import {prisma} from './app/prisma.js'
import {updateList} from "./app/services/trends.services.js";
import {timer} from "./app/services/Timer.js";

dotenv.config();
const PORT = process.env.PORT || 4200;
const app = express()

async function main() {
    app.use(cors())
    app.use('/api',trendsRouter)
    app.use(express.json())
    app.get('/', (req, res) => {res.json("")})
    timer.start(updateList,process.env.EVERY_X_SECOND)
    app.listen(PORT)
}

main().then(async ()=>{
    await prisma.$disconnect()
    timer.stop()
}).catch(async(e)=>{
    console.log(e)
    timer.stop()
    await prisma.$disconnect()
    process.exit(1)
})