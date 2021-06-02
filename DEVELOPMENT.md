# Developing #ich-kann-klima

To run #ich-kann-klima on your local machine, clone the repository, install dependencies and start the frontend's dev server:

```bash
git clone https://github.com/neustartklima/ich-kann-klima.git
cd ich-kann-klima

npm install
npm run dev
```

The frontend runs on port 3000 by default, so `open http://localhost:3000` will open the browser (at least on OSX).

## Building and running a production version

To build the frontend for production use, just call `npm run build` in the top level folder.

The built frontend files are located in `dist` and need to be served by a webserver. For testing purposes,
you can run `npm run serve` which starts a simple one which should not really be used in a production environment.

## CI/CD pipeline

This repository uses GitHub Actions to build and deploy the frontend to GitHub Pages. So, every time you push to `main` branch,
a pipeline is started which runs the test, builds the production version and copies the generated files to `gh-pages` branch.
See `.github/workflows` how this is done.

## Peek Mode

In development mode "Peek" is displayed in the upper right corner. Click on it to reveal
a whole bunch of information about the current game state.
In production this can be enabled by setting the key `devMode` to `true` in
the local store of the web browser.

This can be done by selecting "Inspect" or "Untersuchen" in the context menu of the web page.
Then locate the local storage (firefox: "Web-Storage", chrome: "Application").
It should contain a key `game`.
Add a key (double click or plus sign) and change it to `devMode` and change its value to `true`.
