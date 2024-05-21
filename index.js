const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./database/db')
const cors = require('cors');


const app = express(); // Define application

const corsOptions = {
    origin: true,
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

dotenv.config() // Env Configuration

connectDB(); // Database Connection

app.use(express.json()); //JSON middleware

const port = process.env.PORT || 3000;  // Port

app.listen(port, () => {
    console.log(`App running at port: ${port}`)
}) // start server

app.get('/test', (req, res) => {
    res.send('Fine!')
})

app.use('/api/company', require('./routes/companyRoutes')) //Company Routes
app.use('/api/distributor', require('./routes/distributorRoutes')) //Company Routes
app.use('/api/product', require('./routes/productRoutes')) //Company Routes

