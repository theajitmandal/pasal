import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './src/config/dbconnect';
import bodyParser from 'body-parser'; // to handle JSON data

// importing routes
import categoryRoutes from './src/routes/categoryRoutes'

// to load environment variables from a .env file into process.env
dotenv.config({ quiet: true });
const port = process.env.PORT;

// for database connection
dbConnect();

const app = express();
    
// middleware
app.use(bodyParser.json())

// Routes
app.use('/api/categories', categoryRoutes)

// listen to port
app.listen(port, () => {
    console.log(`Server started successfully on the port ${port}`);
} )

    
