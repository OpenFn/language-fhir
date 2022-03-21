# language-template [<img src="https://avatars2.githubusercontent.com/u/9555108?s=200&v=4)" alt="alt text" height="20">](https://www.openfn.org) [![Build Status](https://travis-ci.org/OpenFn/language-template.svg?branch=master)](https://travis-ci.org/OpenFn/language-template)

An OpenFn **_adaptor_** for building integration jobs for use with the \_\_\_\_ API.

## Documentation

- View the documentation at https://openfn.github.io/adaptor/
- To update the documentation site, run: `./node_modules/.bin/jsdoc --readme ./README.md ./lib -d docs`

## post

#### sample configuration

```json
{
  "username": "taylor@openfn.org",
  "password": "supersecret"
}
```

#### sample expression using operation

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