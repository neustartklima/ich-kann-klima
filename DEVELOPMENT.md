# Developing #ich-kann-klima

To run #ich-kann-klima on your local machine, clone the repository, install dependencies and start the frontend's dev server:

```bash
git clone https://github.com/neustartklima/ich-kann-klima.git
cd ich-kann-klima

npm install                 # Install dependencies
npm run dev                 # Run frontend
```

The frontend runs on port 3000 by default, so `open http://localhost:3000` will open the browser (at least on OSX).

## Using a local backend

To start a local backend call

```zsh
npm run server:start &
```

and configure your browser to use this backend by entering this command into your dev tools:

```javascript
localStorage.setItem("backendURL", "/api")
```

## Building and running a production version

To build backend and frontend for production use, call `npm run build`.

The built files are located in `dist` and can be used by starting `npm start`.

## Building and running with Docker

Create a docker image by calling `npm run docker:build` - it will be tagged as `ichkannklima`.

Then, run it in your own docker environment by creating a local folder to store game data and start a docker container:

```zsh
mkdir docker-data
npm run docker:start
```

Then, start a browser and open [http://localhost:3000](http://localhost:3000)

## CI/CD pipeline

This repository uses GitHub Actions to build and deploy the frontend to GitHub Pages. So, every time you push to `main` branch,
a pipeline is started which runs the test, builds the production version and copies the generated files to `gh-pages` branch.

Additionally, a Docker image is created and pushed to [Docker Hub](https://hub.docker.com/repository/docker/neustartklima/ich-kann-klima).

See `.github/workflows` how this is done.

## Peek Mode

In development mode "Peek" is displayed in the upper right corner. Click on it to reveal
a whole bunch of information about the current game state.
In production this can be enabled by setting the key `devMode` to `true` in
the local store of the web browser:

```javascript
localStorage.setItem("devMode", "true")
```

This can be done by selecting "Inspect" or "Untersuchen" in the context menu of the web page.
Then locate the local storage (firefox: "Web-Storage", chrome: "Application").
It should contain a key `game`.
Add a key (double click or plus sign) and change it to `devMode` and change its value to `true`.

## Current Work

Issues to work on can be found with this query:
[open, not marked with `later`, and not assigned](https://github.com/neustartklima/ich-kann-klima/issues?q=is%3Aissue+is%3Aopen+-label%3Alater+no%3Aassignee+sort%3Aupdated-desc).
