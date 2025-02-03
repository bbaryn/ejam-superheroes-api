## Project description

The application was written using the NestJS framework, which allows you to quickly put up a backend application.

It has the standard structure suggested by the NestJS documentation, which in my opinion was sufficient.

## How to start

Steps needed to run apliaction (replace your-tag with your own tag):

1. Install NestJS client using command `npm i -g @nestjs/cli`
2. Run `npm install`
3. Run `npm run star:dev`

## Cooperation and development of the task

I would first determine with my teammates what frameworks and libraries we will use to write the API. Then we would create an architecture concept and a database model (SQL/NoSQL), how we would otet the application and how we would secure it against unauthorized use.

In terms of developing this task, I would first of all add a requirement to connect to any database (I recommend MongoDB) to dispute how the candidate handles databases. I would add a wholehy CRUD as a wyamgany, as these are sub-state operations that every developer should know an out. I would ask to add authorization after APiKey (it won't take much time, and it will show how the developer uses Guards).

## Project structure

- `common` includes types and constants
- `utils` contains multiple helper functions
- `superheroes` includes module called superheroes and controller and service
  - `dto` validators for requests

## Core libraries

- [`nestjs`](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [`class-validator`](https://github.com/typestack/class-validator) - Allows use of decorator and non-decorator based validation

## If I had more time

- [ ] Error handler should be able to handle more complicated scenarios
- [ ] Eslint/Prettier/TS have default settings provided by the NestJS framework. They should be reviewed and brought up to the latest standards
- [ ] Implement documentation using swagger
- [ ] Write e2e tests
- [ ] Implement basic authentication
- [ ] Adding a database e.g. mongoDB