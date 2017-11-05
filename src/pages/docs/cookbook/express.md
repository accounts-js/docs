---
title: "Express"
---

# Express

*JSAccounts middleware for ExpressJS*

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

const accountsServer = new AccountsServer(...); // Config your accounts server

// Config express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(accountsExpress(accountsServer));

app.listen(process.env.PORT, () => console.log(
  `API Server is now running on http://localhost:${process.env.PORT}`,
));

```
