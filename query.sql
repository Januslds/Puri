CREATE TABLE prepago (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(255) NOT NULL,
    unidadesCompra INT NOT NULL,
    fechaCompra TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha de compra con valor predeterminado
    unidades_consumo INT NOT NULL DEFAULT 0,
    fechaConsumo TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Fecha de consumo que se actualiza automáticamente
    unidadesTotal INT NOT NULL
);

--actulizar la tabla de prepago 
UPDATE prepago
SET unidades_consumo = 2
WHERE id_cliente = 1;


ALTER TABLE inventario
ADD CONSTRAINT fk_cliente
FOREIGN KEY (id) REFERENCES prepago(id_cliente);



UPDATE inventario
SET id = (SELECT id_cliente FROM prepago WHERE nombre_cliente = 'Juan Pérez')
WHERE id = 1;

INSERT INTO inventario (id, vendor, unidades, cantidad, precio_unitario, tipo, cliente)
VALUES (5, 'Proveedor Real', 10, 5, 20, 'tipo1', 'Cliente Real');


CREATE TABLE venta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vendedor VARCHAR(255),
    unidades INT,
    cliente VARCHAR(255),
    telefono INT,
    precio_unitario INT,
    tipo VARCHAR(50),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE prepago (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    Ncliente VARCHAR(255) NOT NULL,
    unidadesCompra INT NOT NULL,
    fechaCompra TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha de compra con valor predeterminado
    unidades_consumo INT NOT NULL DEFAULT 0,
    fechaConsumo TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Fecha de consumo que se actualiza automáticamente
    unidadesTotal INT NOT NULL
);


sudo kill 38137