# _⚠️ MOVED TO [OpenFn/adaptors](https://github.com/OpenFn/adaptors)! ⚠️_

**N.B.: New versions are available at:
https://github.com/OpenFn/adaptors/tree/main/packages/fhir**

# Language FHIR (Archived)

An OpenFn **_adaptor_** for building integration jobs for use with the HAPI FHIR
API.

## FHIR Documentation

The Restfull API can be seen here: https://www.hl7.org/fhir/http.html

## Documentation

- View the documentation at https://openfn.github.io/adaptor/
- To update the documentation site, run:
  `./node_modules/.bin/jsdoc --readme ./README.md ./lib -d docs`

## Technical Documentation

#### Sample State

> See [credential schema ](./credential-schema.json)

```json
{
  "resource": "resource_url",
  "authType": "Basic",
  "token": "supersecrettoken"
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

## Development

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project using `npm run build`.
