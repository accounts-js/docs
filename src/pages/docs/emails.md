---
title: "Emails"
---

# Emails

Configuration:

```javascript
{
  // A valid email config object passed to emailjs
  email: // See https://github.com/eleith/emailjs#example-usage---text-only-emails
  // You can handle the send of the emails by providing an optional sendMail function
  sendMail: ({ from, to, text, html }): Promise<void>
};
```

To overwrite the email templates:

```javascript
const emailTemplates = {
  from: 'my-app <no-reply@my-app.com>',
  verifyEmail: {
    subject: (user) => `Verify your account email ${user.profile.lastname}`,
    text: (user, url) => `To verify your account email please click on this link: ${url}`,
  },
  resetPassword: // Same as verifyEmail
  enrollAccount: // Same as verifyEmail
};
```
