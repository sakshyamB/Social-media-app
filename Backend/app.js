const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

const app = express();

app.use(cors({
    origin: "http/localhost:3001",
}))

const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`The server is running on http://localhost${PORT}`)
})
