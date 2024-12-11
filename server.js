const express = require('express');
const sql = require('mssql');
const dotenv = require('dotenv');

require('dotenv').config(); // Cargar las variables del archivo .env

const app = express();
const port = process.env.PORT || 3000;

// Configuración de conexión
const dbConfig = {
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
    authentication: {
        type: 'ntlm',
        options: {
            domain: '', 
            userName: '', 
            password: '',
        },
    },
};

async function testConnection() {
    try {
        const pool = await sql.connect(dbConfig);
        console.log('Conexión exitosa a la base de datos');
        await pool.close();
    } catch (err) {
        console.error('Error al conectar con la base de datos:', err);
    }
}

testConnection();

app.get('/', (req, res) => {
    res.send('Servidor corriendo correctamente');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
