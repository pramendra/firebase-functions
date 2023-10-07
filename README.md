# README

## Setup Dev environment

### Pre Setup

```bash
$ npm install -g firebase-tools
$ firebase login
```

### Clone boilerplace template

```bash
$ git@github.com:pramendra/firebase-functions.git
$ cd firebase-functions
```

### Install npm packages

```bash
$ nvm use $(cat functions/.nvmrc)
$ npm --prefix ./functions install
```

### Prepare data

#### Prepare service account

```bash
mv functions/example-service-account.json functions/service-account.json
```

> download service file from https://console.firebase.google.com/project/[PRODUCT-ID]/settings/serviceaccounts/adminsdk

#### Prepare runtime configuration

```bash

$ firebase functions:config:get > .runtimeconfig.json
```

## Deployment

## Prepare environment

```bash
$ firebase functions:config:set sheets.spreadsheetid=key
$ firebase use production
$ firebase deploy --only functions:helloWorld --debug

```

## Fixes

### Google Sheets API has not been used in project 131414788416 before or it is disabled

Go to the URL provided in the error message: [Google Sheets API Overview](https://console.developers.google.com/apis/api/sheets.googleapis.com/overview?project=131414788416)
