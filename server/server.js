const express = require('express');
const path = require('path');
const db = require('./config/connection');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas'); 
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');
const { signToken, authMiddleware } = require('./utils/auth');

// Get the JWT secret from your auth file
const secret = 'mysecretsshhhhh';

const app = express();
const PORT = process.env.PORT || 3001;

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // Get the token from the Authorization header
      const token = req.headers.authorization || "";
      let user = null;
  
      if (token && token.startsWith("Bearer ")) {
          // Extract just the token
          const splitToken = token.split(" ")[1];
  
          try {
              // Decode the token using the correct secret
              const decodedToken = jwt.verify(splitToken, secret);
              user = decodedToken.data;
          } catch (err) {
              console.error("JWT Verification failed", err);
              throw new AuthenticationError('Invalid token.');
          }
      } else {
          // If there's no token, we just return an empty context
          return {};
      }
  
      return { user };
    }
  });

  // Need to await server.start()
  await server.start();

  server.applyMiddleware({ app });

  return { server, app };
}

startApolloServer(typeDefs, resolvers).then(({ server, app }) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}${server.graphqlPath}`));
  });
});
