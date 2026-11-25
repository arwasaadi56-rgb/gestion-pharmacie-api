const auth = require('./middleware/auth');
const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

// Import Routes
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');

// Import Database
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Routes
app.use('/api/products', auth, productRoutes);
app.use('/api/users', userRoutes);

// Accueil
app.get('/', (req, res) => {
    res.status(200).send('<h1>Page d accueil de notre API de Pharmacie !</h1>');
});

// Test
app.get('/api/test', (req, res) => {
    res.status(200).json({
        message: 'le test a fonctionne',
        success: true
    });
});

// Start Server
const startServer = async () => {
    try {
        await connectDB(MONGODB_URI);

        app.listen(PORT, () => {
            console.log(`Serveur demarre sur http://localhost:${PORT}`);
            console.log('Connecte a MongoDB avec succes !');
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

startServer();
