# carbon-footprint-survey-be

carbon-footprint-survey-be allows you to store and retreive questions and possible answers for multiple choice surverys.

See the [frontend repo here](https://github.com/AnatDean/carbon-footprint-survey-fe)

## Prerequesities

- Node (ideally v14);
- PostgreSQL

## Seeding

To seed the database (only test database provided) make sure postgres is running on your computer and then run the following command

```bash
npm run seed
```

You can now view the database `survey_test` in postgres on your computer.

## Run tests

To run tests locally install dependencies using the following command (this might take a minute or two).

```bash
npm install
```

Make sure postgres is running on your computer. Tests will automatically reseed the database for you.

Then run the tests using

```bash
npm test
```

## Running Locally

To run the server locally make sure you have installed the dependencies (instructions in `Run Tests`).

Then run the command

```bash
npm start
```

This will start the server on port 9090. You will now be able to make requests through any client at `http:/localhost:9090/api...`

## Endpoints

Currently there are 2 endpoints:

1. `/api/questions` which retrieves all currently stored questions with their possible answers
2. `api/questions/:id` which retreives a single question with its possible answers

## Built using

- express
- pg
- supertest
- mocha
- chai
- cors
