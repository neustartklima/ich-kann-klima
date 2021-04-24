# Developing #ich-kann-klima

This is a monorepo, containing both, server and frontend.
So, to run #ich-kann-klima on your local machine, clone the repository, install dependencies in `/server` and `/frontend`, and start both, server and fronted:

```
git clone https://github.com/neustartklima/ich-kann-klima.git
cd ich-kann-klima

cd server
npm install
npm run dev &

cd ../frontend
npm install
npm run dev
```

The server runs on port 3000 by default (can be changed by setting environment variable `PORT`), the frontend uses port 3001 (actually, it also tries to use port 3000, but since this is already in use, it uses the next available one).

## Building and running a production version

Each part (frontend and server) can be built, to have a version that can be used without transpiling anything:

```bash
cd server
npm run build
cd ../frontend
npm run build
```

After that, the built version can be run with the "serve" npm target in the server folder:

```bash
cd server
npm run serve
```

The server serves the frontend as well, so that it is not necessary to start the built frontend separately.

## Docker image

You can build a docker image by using the `package.json` scripts in the project folder itself:

```bash
npm build
npm start
```
