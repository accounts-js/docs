# Password

[Github](https://github.com/js-accounts/accounts) | [npm](https://www.npmjs.com/package/@accounts/password)

*Password Strategy for js-accounts*

## Install

```
yarn add @accounts/password
```

## Usage

```javascript
import AccountsServer from '@accounts/server';
import AccountsPassword from '@accounts/password';

const password = new AccountsPassword(...config);
const accountsServer = new AccountsServer(...config, {
  password: password
});
```
