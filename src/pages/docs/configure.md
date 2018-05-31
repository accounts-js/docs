---
title: "Configure"
---

# Configure

accounts-js offer a huge amount of customization options on the client and
server.

## Basic configuration

### Client (Rest, No view layer)

```javascript
import { AccountsClient } from '@accounts/client';
import { RestClient } from '@accounts/rest-client';

const restClient = new RestClient({
  apiHost: 'https://server.com', // your server url or http://localhost:3000
  rootPath: '/accounts',
});

const clientOptions = {}; // Defaults are provided for all mendatory options
// So you don't have to pass in anything.

const accountsClient = new AccountsClient(clientOptions, restClient);
```

### Server (Express, Mongo)

```javascript
import express from 'express';
import bodyParser from 'body-parser';
import { AccountsServer } from '@accounts/server';
import accountsExpress from '@accounts/rest-express';
import { MongoClient } from 'mongodb';
import { Mongo } from '@accounts/mongo';

const db =  await mongodb.MongoClient.connect(process.env.MONGO_URL);

const serverOptions = {
  tokenConfigs: {
    accessToken: {
      expiresIn: '1d',
    },
    refreshToken: {
      expiresIn: '14d',
    },
  }
};

const accountsServer = new AccountsServer({
  db: new Mongo(db)
});

const app = express();

app.use(bodyParser.json());
// Here we inject the express middleware
app.use(accountsExpress(accountsServer));

app.listen(PORT, () => console.log('Listening on port', PORT));
```
