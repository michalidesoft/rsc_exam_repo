import express from 'express';
import cors from 'cors';

import {getSuggestions, getSuggestionsFiltered} from "./actions/suggestions";

const app = express();
const PORT = 8000;

app.use(cors());

/**
 * Nothing on root, so return a 404
 */
app.get('/', (req, res) => res.send(404));


app.get('/api/v1/suggestions/:query', (req, res) => {
  const query = req.params.query
  res.send(getSuggestions(query))
})

app.get('/api/v1/suggestions-filtered/:query', (req, res) => {
  const query = req.params.query
  res.send(getSuggestionsFiltered(query))
})

app.listen(PORT, () => {
  console.log(`[backend]: Server is running on https://localhost:${PORT}`);
});
