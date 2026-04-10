const express = require('express');
const {connectDB, sequelize} = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cors = require('cors')

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)

const startServer = async () => {

    try {
        await connectDB();

            await sequelize.sync({ force: false }); 
            console.log('Database synchronized successfully');
        
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
}  

startServer();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})