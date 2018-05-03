---
title: "Hooks"
---

# Hooks

`@accounts/server` exposes hooks that let you know about actions that just happened.

> Server side hooks does not effect the flow on the actions at all - it's just a notification.

The following hooks are available:

* `ServerHooks.LoginSuccess`
* `ServerHooks.LoginError`
* `ServerHooks.ImpersonationSuccess`
* `ServerHooks.ImpersonationError`
* `ServerHooks.RefreshTokensSuccess`
* `ServerHooks.RefreshTokensError`
* `ServerHooks.LogoutSuccess`
* `ServerHooks.LogoutError`
* `ServerHooks.ResumeSessionSuccess`
* `ServerHooks.ResumeSessionError`

> You can subscribe to each hook multiple time!

## Example

```javascript
import { AccountsServer, ServerHooks } from '@accounts/server';

const accountsServer = new AccountsServer(options);

// I start to listen to the events
const stop = accountsServer.on(ServerHooks.LoginError, (data) => {
  // data will contain the hook specific datas
  console.log(data);
});

...

// Then if later I want to stop the listener
stop();
```
