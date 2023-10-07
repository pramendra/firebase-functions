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
cp functions/example-service-account.json functions/service-account-dev.json
```

> download service file from https://console.firebase.google.com/project/[PROJECT-ID]/settings/serviceaccounts/adminsdk

#### Prepare runtime configuration

```bash
$ cp functions/example-env.json functions/env.dev.json
$ firebase functions:config:set env="$(cat functions/env.dev.json)"
$ cd functions
$ firebase functions:config:get > .runtimeconfig.json
```

##### alternatively

```bash
cp functions/example-.runtimeconfig.json functions/.runtimeconfig.json
```

### prepare firebase project

```bash
$ firebase use --add
```

> select project(s)

## Run functions locally

#### run firebase function on watch mode

```bash
$ firebase use dev
$ npm run dev
```

#### run emulators

```bash
$ npm run emulators
```

## Deployment

## Prepare environment

#### production deployment

```bash
$ firebase use production
$ firebase functions:config:set env="$(cat ./functions/env.production.json)"
$ firebase deploy --only functions --debug

```

#### dev deployment

```bash
$ firebase use dev
$ firebase functions:config:set env="$(cat ./functions/env.dev.json)"
$ firebase deploy --only functions --debug

```

## Fixes

### Google Sheets API has not been used in project [PROJECT-ID] before or it is disabled

Go to the URL provided in the error message: [Google Sheets API Overview](https://console.developers.google.com/apis/api/sheets.googleapis.com/overview?project=[PROJECT-ID])

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

## Note

### Set Env Environment to production

https://console.firebase.google.com/project/[PROJECT-ID]/settings/general

### add client_email from service account to google sheet as editor

### Issue: Failed to configure trigger for event-type:providers/firebase.auth/eventTypes/user.create

Enable email provider at

> https://console.firebase.google.com/project//[PROJECT-ID]/authentication/providers

### chagne file permission

```
$ chmod +x functions/predeploy.sh
```
