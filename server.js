const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlRouter = require('./routes/html')
const apiRouter = require('./routes/api')
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', apiRouter)
app.use('/', htmlRouter)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
