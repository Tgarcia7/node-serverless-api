# SERVERLESS-API

Node.js Serverless API 

##  Initial set up

### Install serverless

```
npm install serverless -g
```

### Install project dependencies 

```
npm install
```

### Set up AWS (optional)

```
export AWS_ACCESS_KEY_ID=[YOUR_ACCESS_KEY]
export AWS_SECRET_ACCESS_KEY=[YOUR_SECRET_KEY]
```
OR
```
sudo serverless config credentials --provider aws --key [YOUR_ACCESS_KEY] --secret [YOUR_SECRET_KEY]
```

## Set up environment

An environment file (named ``.env``) is needed for local development. Create one based on ``.env.example`` on project's root.

## Running locally

This command will start serverless locally

```
npm run dev
```

## Run unit test 

```
npm run test
```

## Run linter

```
npm run lint
```

Automatically fix linting errors (minor fixes) 

```
npm run lint:fix
```

### Set up and deploy to Serverless dashboard

```
serverless login
```
```
serverless deploy
```

