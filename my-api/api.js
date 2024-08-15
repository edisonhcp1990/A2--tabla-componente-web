// server.js
const express = require('express');
const app = express();
const port = 3000;

// CORS middleware para permitir solicitudes desde otros orígenes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Ruta para obtener una lista de carros
app.get('/cars', (req, res) => {
    const cars = [
      { id: 1, make: 'Toyota', model: 'Corolla', year: 2020 },
      { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
      { id: 3, make: 'Ford', model: 'Mustang', year: 2021 },
      { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018 },
      { id: 5, make: 'Nissan', model: 'Altima', year: 2022 },
      { id: 6, make: 'BMW', model: '3 Series', year: 2020 },
      { id: 7, make: 'Audi', model: 'A4', year: 2019 },
      { id: 8, make: 'Hyundai', model: 'Elantra', year: 2021 },
      { id: 9, make: 'Mazda', model: 'CX-5', year: 2018 },
      { id: 10, make: 'Volkswagen', model: 'Jetta', year: 2022 }
    ];
    res.json(cars);
  });

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
