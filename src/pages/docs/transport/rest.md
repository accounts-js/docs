---
title: "Rest"
---

# Rest

[Github](https://github.com/js-accounts/rest) | [npm](https://www.npmjs.com/package/@accounts/rest-express)

*REST server for js-accounts*

## Express

### Install

```
yarn add @accounts/rest-express
```

### Usage

```javascript
import express from 'express';
import AccountsServer from '@accounts/server';
import accountsExpress from '@accounts/rest-express';

const accountsServer = new AccountsServer(...);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(accountsExpress(accountsServer));

app.listen(3000);
```
