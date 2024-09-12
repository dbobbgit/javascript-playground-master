# JavaScript Playground

The purpose of this repository is to provide just enough scaffolding to get started building _something_ and not waste too much time. 

What we decide to build together and how far we get towards "complete" isn't too important. What IS important is that we get a good idea of what it looks like to work and learn together at a technical level. 

We've got some ideas towards the bottom of this README that might be good starting points or they might be horrible ideas. Let's find out together! :joy:

## Libraries

- [axios](https://www.npmjs.com/package/axios) for making API requests
- [dotenv](https://www.npmjs.com/package/dotenv) for loading configuration from `.env` files
- [express](https://www.npmjs.com/package/express) is our web application "framework"
- [knex](https://www.npmjs.com/package/knex) is our query builder on top of [sqlite3](https://www.npmjs.com/package/sqlite3), which we use in this project for simplicity sake

## Installation

```
npm install
npx knex migrate:latest
npm run dev
```

**VS Code Launch Configurations**

There are two launch configs in `.vscode/launch.json`:

1. `UI` launches a debug browser so that you can use breakpoints in front-end code.
2. `API` launches `api/server.js` with debugger-attached.

There is also a compound launch config (`All`) which launches both.

## Ideas

- Do something fun with NASA's APIs (https://api.nasa.gov/)
- Build user authentication, but instead of passwords we use doodles drawn on an HTML `<canvas>`
- Build a real-time chat application but no typing! (implement speech recognition and dictation)
- ???

The goal is to pick something none of us really know the "answer" to and work together on a solution. 
