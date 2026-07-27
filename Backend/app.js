const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const ConnectDB = require('./db/db')
const authRoutes = require('./routes/authRoutes')
dotenv.config();

const app = express();

app.use(cors({
    origin: "http/localhost:3001",
}))

ConnectDB();

app.use('/auth', authRoutes)

const PORT = process.env.PORT;
app.listen(PORT, ()=> {
    console.log(`The server is running on http://localhost${PORT}`)
})
