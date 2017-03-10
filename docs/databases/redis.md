# Redis

[Github](https://github.com/js-accounts/redis) | [npm](https://www.npmjs.com/package/@accounts/redis)

*Redis data store for js-accounts*

## Install

```
yarn add @accounts/redis
```

## Usage

```javascript
import AccountsServer from '@accounts/server';
import RedisDBInterface from '@accounts/redis';

// You can pass an optional object wich is passed to ioredis (https://github.com/luin/ioredis)
const redisOptions = {};

AccountsServer.config({
}, new RedisDBInterface(redisOptions));
```
