import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './src/config/dbConfig';
import bodyParser from 'body-parser'; // to handle JSON data
// import cors from 'cors';
import path from 'path'; // to see static files while uploading

// importing routes
import categoryRoutes from './src/routes/categoryRoutes'
import productRoutes from './src/routes/productRoutes'

// to load environment variables from a .env file into process.env
dotenv.config({ quiet: true });
const port = process.env.PORT;

// for database connection
dbConnect();

// The express() function, when called, returns an instance of an Express application. 
// This instance, assigned to the app variable, represents your web application and provides 
// access to all the functionalities offered by the Express framework.
const app = express();
    
// middleware
app.use(bodyParser.json())
// app.use(cors); 
// or below code for using cors for more specific configuration
// app.use(
//   cors({
//     origin: ['http://localhost:3000', 'https://your-production-app.com'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true, // if you need to allow cookies
//   })
// );
// Serve static files from uploads directory
// app.use('/public/uploads', express.static('public/uploads'));
app.use('/public/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Routes
app.use('/api/categories', categoryRoutes)
app.use('/api/products', productRoutes)

// listen to port
app.listen(port, () => {
    console.log(`Server started successfully on the port ${port}`);
} )

    
