const express = require("express");
const { sql, poolPromise } = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Permite recibir información en formato JSON
app.use(express.json());

app.get("/api/productos", async (req, res) => {
  try {
    const pool = await poolPromise;

    const result = await pool.request().query(`
      SELECT ID, Nombre, Precio, Stock
      FROM dbo.Producto
      ORDER BY ID
    `);

    res.json(result.recordset);
  } catch (error) {
    console.error("Error al consultar los productos:", error);

    res.status(500).json({
      mensaje: "Error al consultar los productos",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor disponible en http://localhost:${PORT}`);
});
