const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
    user: process.env.POSTGRES_USER || "myuser",
    host: "db",
    database: process.env.POSTGRES_DB || "mydatabase",
    password: process.env.POSTGRES_PASSWORD || "mypassword",
    port: 5432,
});

app.use(express.json());

app.get("/", (req, res) => {
    res.send("¡API funcionando!");
});

app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
});

app.post("/users", async (req, res) => {
    const { name, email } = req.body;

    try {
        await pool.query(
            "INSERT INTO users (name, email) VALUES ($1, $2)",
            [name, email]
        );
        res.status(201).send("Usuario agregado correctamente");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al agregar usuario");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
