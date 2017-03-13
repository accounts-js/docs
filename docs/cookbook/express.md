# Express

*JSAccounts adapter for Expressjs*

## Install

```
yarn add @accounts/rest-express
```

## Usage

```javascript
import express from 'express';
import bodyParser from 'body-parser';
import AccountsServer from '@accounts/server';
import accountsExpress from '@accounts/rest-express';

AccountsServer.config({}); // Config your accounts server

// Config express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(accountsExpress(AccountsServer));

app.listen(process.env.PORT, () => console.log(
  `API Server is now running on http://localhost:${process.env.PORT}`,
));

```
