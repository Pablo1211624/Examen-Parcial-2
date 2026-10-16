CREATE DATABASE Productos;
GO

USE Productos
GO

CREATE TABLE Producto(
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Precio DECIMAL(10,2) CHECK(Precio >= 0) NOT NULL,
    Stock INT CHECK(Stock >= 0) NOT NULL

);

INSERT INTO dbo.Producto (Nombre, Precio, Stock)
SELECT Nombre, Precio, Stock
FROM
(
    VALUES
        (CAST('Raton' AS VARCHAR(50)),   CAST(15.00 AS DECIMAL(10, 2)), 10),
        (CAST('Teclado' AS VARCHAR(50)), CAST(25.00 AS DECIMAL(10, 2)), 5),
        (CAST('Audifonos' AS VARCHAR(50)), CAST(30.00 AS DECIMAL(10, 2)), 8),
        (CAST('Monitor' AS VARCHAR(50)), CAST(125.00 AS DECIMAL(10, 2)), 4),
        (CAST('Webcam' AS VARCHAR(50)),  CAST(45.00 AS DECIMAL(10, 2)), 6)
) AS Datos(Nombre, Precio, Stock)
WHERE NOT EXISTS
(
    SELECT 1
    FROM dbo.Producto AS ProductoExistente
    WHERE ProductoExistente.Nombre = Datos.Nombre
);
GO

SELECT ID, Nombre, Precio, Stock
FROM dbo.Producto;
GO


