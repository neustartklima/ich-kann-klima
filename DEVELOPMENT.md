# Developing #ich-kann-klima

This is a monorepo, containing three components:

- The current **frontend** in /frontend
- A **server** component (not yet used) in /server
- The old **prototype** frontend from the hackathon in /hackathon

To run #ich-kann-klima on your local machine, clone the repository, install dependencies in `/server` and `/frontend`, and start at least the current frontend:

```bash
git clone https://github.com/neustartklima/ich-kann-klima.git
cd ich-kann-klima

cd ../frontend
npm install
npm run dev
```

The frontend runs on port 3000 by default, so `open http://localhost:3000` will open the browser (at least on OSX).

If you also want to use the backend (which is not yet called), run

```bash
cd server
npm install
npm run dev
```

The server uses port 3001 (can be changed by setting environment variable `PORT`).

## Building and running a production version

To build both, the frontend and the server for production use, just call `npm run build` in the top level folder.

Each part can also be built separately

```bash
cd server
npm run build
```

or

```bash
cd ../frontend
npm run build
```

Running `npm run build` in the root folder will build both parts.

If you started the server as well, the built version can be run with the "serve" npm target in the server folder:

```bash
cd server
npm run serve
```

The server serves the frontend as well, so that it is not necessary to start the built frontend separately.

## Docker image

You can also build a docker image by using the top level scripts in the root folder:

```bash
npm run docker:build
npm docker:start
```
