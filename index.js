import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import users from "./routers/users.js"
import mongoose from "mongoose"
import notifications from './routers/notifications.js'
import films from './routers/films.js'
const URL ="mongodb+srv://admin:0wreENVg3XetPq1q@cluster0.qv7ba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const app = express()
const PORT =process.env.port||4040;

app.use(bodyParser.json({limit:"30mb"}));
app.use(bodyParser.urlencoded({extended:true,limit:"30mb"}))
app.use(cors())

app.use("/users",users)
app.use("/notifications",notifications)
app.use("/films",films)
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,})
.then(()=>{
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});
})
.catch((err)=> {
    console.log("err :",err)
}
)
