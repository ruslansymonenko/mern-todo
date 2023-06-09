const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

const LOGIN = process.env.LOGIN;
const PASS = process.env.PASSWORD;

app.use(cors());
app.use(express.json({extended: true}));
app.use('/api/auth/registration', require('./routes/auth.route.js'));


async function start () {
  try{ 
    await mongoose.connect(`mongodb+srv://${LOGIN}:${PASS}@cluster0.xllyz1u.mongodb.net/?retryWrites=true&w=majority`)

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`)
    })

  } catch (err) {console.log(err)}
}

start();