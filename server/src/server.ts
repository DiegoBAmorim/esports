import express from 'express';

const app = express();

app.get('/games', (req, res) => {
  return res.json([]);
});

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
});

app.get('/games/:id/ads', (req, res) => {
  const gameId = req.params.id;

  return res.json({
    id: gameId,
  });
});

app.get('/ads/:id/discord', (req, res) => {
  const adID = req.params.id;

  return res.json({
    id: adID,
  });
});

app.listen(3333);
