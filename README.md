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
cp functions/example-service-account.json functions/service-account.json
```

> download service file from https://console.firebase.google.com/project/[PROJECT-ID]/settings/serviceaccounts/adminsdk

#### Prepare runtime configuration

```bash
cd ./functions
$ firebase functions:config:get > .runtimeconfig.json
```

##### alternatively

```bash
cp functions/example-.runtimeconfig.json functions/.runtimeconfig.json
```

### prepare 
code ./.firebaserc
```
{
  "projects": {
    "default": "[PROJECT-ID]"
  }
}

```

## Run functions locally

#### run firebase function on watch mode

```bash
$ npm run dev
```

#### run emulators

```bash
$ npm run emulators
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

## vscode setup

1. Launch VSCode.
2. Open the Command Palette by pressing Ctrl + P.
3. paste `ext install esbenp.prettier-vscode`

## Testing functions

### add test user

```bash
$ npm run dev
$ firebase emulators:start
$ curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"email": "testuser@example.com", "password": "testPassword"}' \
     http://127.0.0.1:5001/[project_id]/us-central1/addTestUser
```
