---
title: "Introduction"
---

# js-accounts

The js-accounts organization develops and maintains a modular accounts system
for the javascript domain. The basic idea is to have authentication view,
business logic, transport and data storage separated to multiple packages so you
can opt in and out of parts of the account system, but the whole suite should
allow the user to have a complete, generic and customizable account system.

## Prior Art

This project is inspired by Meteor's accounts suite of packages. Meteor
framework had a plug and play approach for it's monolithic framework that saved
ton of work that is traditionally done by any development team, over and over
again. Meteor's accounts system had a couple of restrictions:

* First it was published in Meteor's "atmosphere" package repository and was
  dependant on the Meteor's build tool.
* Second, Meteor is built around DDP and so it's accounts system was taking that
  as granted.
* Third, Meteor dependancy on MongoDB meant that the buisness logic was
  dependant on how the data is stored inthe database.

## FAQ

Going into this project we asked ourselves (and was asked by others) a bunch of
questions that helped us define what this project is all about. This is part of
these questions: If you have a question that you think, could shape this
project, please PR this document or open an issue!

### Why wouldn't you just use passport??

We are not here to replace passport.js. Actually, in our vision, passport.js
will be one authentication method that you can plug in. Currently, the only
problem with passport.js in that regard is that it is designed to work with
connect middlewares and adapter code is need to plug into let's say a WS
transport. We currently implemented our own local strategy just to make sense
out of basic accounts packages. In the close future it will be seperated to it's
own pakcage.

### Why not refactor out the meteor accounts suite?

Well, as explained above, Meteor's accounts system is tied to the data storage
and transport in a way that is actually harder to separate then rewriting with
those abstractions in mind. We do offer an adapter package that allows Meteor
applications an easy and gradual way to move out of Meteor's current accounts
system.

### Why do you use multiple mono-repo's?

Early on we understood that a mono-repo is required in order to have good
developer experience while adding any accounts logic. This also helps us keep
code base relatively small for using apps as you will not load in client code on
server apps and vice versa. Although having a mono repo is great, we fill that
someone maintaining the redis package should not get any notifications regarding
changes on the mongo package, or the react packages. If you are adding in a
feature that requires changes to the transport or the data store packages, we
recommend cloning all of js-accounts packages into the same directory and just
open your IDE on that directory as project root.
