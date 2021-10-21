const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDb = require('./database');
const schema = require('./schema');
const app = express();

connectDb();

app.get('/', (req, res) => {
  res.json({
    message: 'Api with Graphql',
  });
});

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(3000, () => {
  console.log('Listening in port 3000');
});
