const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');

const app = new express();

app.use(cors());

const URL = "mongodb+srv://admin:admin123@cluster0-lsvbs.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URL);

mongoose.connection.once('open', () => {
  console.log('mongoose connected');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Server listening on 4000');
});
