const express = require("express");
const dotenv = require("dotenv")
const chats = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRouts = require('./routes/userRoutes');
const chatRoutes = require("./routes/chatRoutes")
const messageRoutes = require("./routes/messageRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running Successfully")
})

app.use('/api/user', userRouts)
app.use('/api/chat', chatRoutes)
app.use('/api/message', messageRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(8000, console.log(`Server Started on PORT ${PORT}`.yellow.bold));