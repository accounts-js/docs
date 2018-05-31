---
title: "Emails"
---

# Emails

- [Configuration](#configuration)
- [Overwrite the email templates](#overwrite-the-email-templates)
- [Example using emailjs](#example-using-emailjs)

> By default accounts-js will print the emails json in the console.

## Configuration

```javascript
const options = {
  // You can handle sending the emails by providing an optional sendMail function
  sendMail: ({ from, subject, to, text, html }): Promise<void>
};
```

## Overwrite the email templates

To overwrite the email templates:

```javascript
const options = {
  emailTemplates: {
    from: 'my-app <no-reply@my-app.com>',
    verifyEmail: {
      subject: (user) => `Verify your account email ${user.profile.lastname}`,
      text: (user, url) => `To verify your account email please click on this link: ${url}`,
    },
    resetPassword: // Same as verifyEmail
    enrollAccount: // Same as verifyEmail
  },
};

const accountsServer = new AccountsServer(options);
```

## Example using [emailjs](https://github.com/eleith/emailjs)

```javascript
import emailjs from 'emailjs';

// inititate emailjs
const server = email.server.connect({ ...myOptions });

const options = {
  sendMail: ({ from, subject, to, text, html }) => {
    return new Promise((resolve, reject) => {
      server.send(
        {
          text,
          from,
          to,
          subject,
        },
        err => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        }
      );
    });
  },
};

const accountsServer = new AccountsServer(options);
```
