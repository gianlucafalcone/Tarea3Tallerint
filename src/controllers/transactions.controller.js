const express = require('express');
const router = express.Router();



router.post('/', async (req, res) => {
  try {
    // Obtener el mensaje recibido
    const message = req.body.message;

    // Extraer los datos relevantes del mensaje
    const attributes = message.attributes;
    const data = message.data;
    const messageId = message.messageId;
    const publishTime = message.publishTime;

    // Decodificar el campo "data" en Base64
    const decodedData = Buffer.from(data, 'base64').toString('utf-8');

    await transaccion.create({
      type: parseInt(decodedData.slice(0,4)),
      id: parseInt(decodedData.slice(4,14)),
      sourceBank : parseInt(decodedData.slice(14,21)),
      sourceAccount : parseInt(decodedData.slice(21,31)),
      destinationBank : parseInt(decodedData.slice(31,38)),
      destinationAccount : parseInt(decodedData.slice(38,48)),
      amount : parseInt(decodedData.slice(48,64)),
      publishTime: publishTime,
      });
    

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error en el endpoint /transacciones:', error);
    res.status(500).json({ success: false, error: 'Error en el servidor' });
  }
});

module.exports = router;