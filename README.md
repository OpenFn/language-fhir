# language-fhir [<img src="https://avatars2.githubusercontent.com/u/9555108?s=200&v=4)" alt="alt text" height="20">](https://www.openfn.org) [![Build Status](https://travis-ci.org/OpenFn/language-fhir.svg?branch=master)](https://travis-ci.org/OpenFn/language-fhir)

An OpenFn **_adaptor_** for building integration jobs for use with the HAPI FHIR
API.

## Documentation

- View the documentation at https://openfn.github.io/adaptor/
- To update the documentation site, run:
  `./node_modules/.bin/jsdoc --readme ./README.md ./lib -d docs`

## Technical Documentation

#### Sample State

> See [credential schema ](./credential-schema.json)

```json
{
  "configuration": {
    "resource": "resource_url",
    "authType": "Basic",
    "token": "supersecrettoken"
  }
}
```

#### Creates a resource in a destination system using a POST request

```js
create('/endpoint', { foo: 'bar' });
```

#### Creates a transactionBundle for HAPI FHIR

```js
createTransactionBundle({
  entry: [transactionBundle],
});
```

#### To be removed

```js
post({
  "url": "api/v1/forms/data/wide/json/formId",
  "body": {"a":1}
  "headers": {}
})
```

## Development

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project using `npm run build`.
