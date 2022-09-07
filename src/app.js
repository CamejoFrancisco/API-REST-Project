import express from "express";
import db from "./config/dbConnect.js";
import users from "./models/User.js"
import routes from "./routes/index.js"

//Connection 
db.on("error", console.log.bind(console, 'Erro de conexão'))

//Open connection
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso');
})

const app = express();

app.use(express.json())

routes(app);

app.get('/', (req, res) => {
    res.status(200).send('Welcome');
})


export default app