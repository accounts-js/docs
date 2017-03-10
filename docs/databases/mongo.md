# Mongo

[Github](https://github.com/js-accounts/mongo) | [npm](https://www.npmjs.com/package/@accounts/mongo)

*MongoDB adaptor for accounts*

## Install

```
yarn add @accounts/mongo
```

## Usage

```javascript
import AccountsServer from '@accounts/server';
import MongoDBInterface from '@accounts/mongo';

// If you are using mongoose
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

// If you are using mongodb
const db =  await mongodb.MongoClient.connect(process.env.MONGO_URL);

AccountsServer.config({
}, new MongoDBInterface(db));
```

## Options

```javascript
// Optionnal object to pass to MongoDBInterface
const options = {
  // The users collection name, default 'users'
  collectionName: string,
  // The sessions collection name, default 'sessions'
  sessionCollectionName: string,
  // The timestamps for the users and sessions collection, default 'createdAt' and 'updatedAt'
  timestamps: {
    createdAt: string,
    updatedAt: string,
  },
  // Should the collection use _id as string or ObjectId, default 'true'
  convertUserIdToMongoObjectId: boolean
};

AccountsServer.config({
}, new MongoDBInterface(db, options));
```
