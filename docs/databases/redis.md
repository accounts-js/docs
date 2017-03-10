# Redis

[Github](https://github.com/js-accounts/redis) | [npm](https://www.npmjs.com/package/@accounts/redis)

*Redis adaptor for accounts*

## Install

```
yarn add @accounts/redis
```

## Usage

```javascript
import AccountsServer from '@accounts/server';
import RedisBInterface from '@accounts/redis';

// You can pass an optional object wich is passed to ioredis
const redisOptions = {};

AccountsServer.config({
}, new RedisDBInterface(redisOptions));
```
