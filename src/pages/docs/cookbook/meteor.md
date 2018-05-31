---
title: "Meteor"
---

# Meteor

Coming soon ...

<!--
_accounts-js adapter for MeteorJS: override and extends Meteor methods and
publication with accounts-js authentication._

## Install

```
yarn add @accounts/meteor-adapter
```

## Use in Meteor client-side

To use with Meteor client-side, use your `AccountsClient` instance and `Meteor`
instance, and use this package on your Meteor's client-side entry point (usually
`client/main.js`):

```js
import { Meteor } from 'meteor/meteor';
import AccountsClient from '@accounts/client';
import { wrapMeteorClient } from '@accounts/meteor-adapter';

AccountsClient.config({}); // Config your accounts client

wrapMeteorClient(Meteor, AccountsClient);
```

Now, each time you call `Meteor.call` or `Meteor.subscribe` - the accounts-js
`accessToken` will be appended to your request, and your server will be able to
validate it.

## Use in Meteor server-side

To use with Meteor client-side, use your `AccountsServer` instance and `Meteor`
instance, and use this package on your Meteor's client-side entry point (usually
`server/main.js`):

```js
import { Meteor } from 'meteor/meteor';
import AccountsServer from '@accounts/server';
import { wrapMeteorServer } from '@accounts/meteor-adapter';

AccountsServer.config({}); // Config your accounts server

wrapMeteorServer(Meteor, AccountsServer);

Meteor.startup(() => {
  // ...
});
```

Now, each time you call `Meteor.methods` or `Meteor.publish` - the accounts-js
`accessToken` will parsed and validated, and the `user` and `userId` will be
available for use inside your callback, for example:

```js
Meteor.publish('myPulication', function() {
  const user = this.user(); // accounts-js user, or null if there is no user at all
  const userId = this.userId(); // accounts-js user id, or null if there is no user at all
});

Meteor.methods({
  myFunc: function() {
    const user = this.user(); // accounts-js user, or null if there is no user at all
    const userId = this.userId(); // accounts-js user id, or null if there is no user at all
  },
});
```

Note that if there method is called without an authenticated use in the client
side, the `user` and `userId` will return `null` values - so you should check it
inside your method. If the user specified a token but it's not valid - the
method/pulication will fail with the accounts-js error.
-->
