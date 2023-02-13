const express = require('express');
const PORT = 3000;
const app = express();
const cors = require ('cors')
const database = require ('./database/index')




app.use(cors())
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const bookRouter = require ('./routes/book')
app.use('/api/books',bookRouter)




app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });