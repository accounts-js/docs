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
import RestClient from '@accounts/rest-client';

const restClient = new RestClient({
  apiHost: 'http://server.com',
  rootPath: '/accounts',
});

const clientOptions = {}; // Defaults are provided for all mendatory options
// So you don't have to pass in anything.

const accountsClient = new AccountsClient(clientOptions, restClient);

accountsClient
  .loginWithPassword('userId', '123456')
  .then(() => console.log('Logged In!'))
  .catch(() => console.log('Login failed!'));
```

### Server (Express, Mongo)

```javascript
import express from 'express';
import bodyParser from 'body-parser';
import { AccountsServer } from '@accounts/server';
import accountsExpress from '@accounts/rest-express';
import { MongoClient } from 'mongodb';
import MongoAdapter from '@accounts/mongo';

const mongoAdapter = await MongoClient.connect(MONGO_URL).then(db => new MongoAdapter(db));

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

const app = express().use(bodyParser.json());

const accountsServer = new AccountsServer(serverOptions, mongo);
app.use(accountsExpress(accountsServer));

app.listen(PORT, () => console.log('Listening on port', PORT));
```

## Client Store

accounts-js client uses redux store to handle state. If you don't use redux in
your application you should not worry about it. If you do use redux, then you
probably want to initialize the redux store on your own. In that case, you can
pass in a redux store object to the AccountsClient constructor like so:

```javascript
import { AccountsClient, reducer as accounts } from '@accounts/client';
import { createStore } from 'redux';

const reduxStore = createStore(
  combineReducers({
    accounts,
    ...otherReducers,
  }),
  enhancers
);

const clientOptions = {
  store: reduxStore,
};

const accountsClient = new AccountsClient(clientOptions, restClient);
```

You can also customize the store token being used by accounts like so:

```javascript
const ACCOUNTS_STORE_KEY = 'very_complex_key';

const reduxStore = createStore(
  combineReducers({
    [ACCOUNTS_STORE_KEY]: accounts,
    ...otherReducers,
  }),
  enhancers
);

const clientOptions = {
  store: reduxStore,
  reduxStoreKey: ACCOUNTS_STORE_KEY,
};

const accountsClient = new AccountsClient(clientOptions, restClient);
```

## Customize Token Storage

## Customize Validations

## Customize Authentication

## Customize Encription

## Customize Email Handlers

## Customize User Object
