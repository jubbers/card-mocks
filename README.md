![card mocks logo](https://github.com/saint-justin/card-mocks/blob/main/src/assets/logo.png?raw=true)

🃏Card Mocks🃏 is a tool to help card game developers generate large batches of card images according to templates they set up. All they need to do is create a component for each part of the template where they want data displayed (a string of text, a number, an image, etc.), set up IDs correlating spreadsheet columns to those components, and then pass in the spreadsheet to automatically generate all of their cards which follow that template. They'll get a set of cards all generated exactly to the specification that they defined in their template. This expedites the process of beta testing new card games by removing the work of generating cards one step at a time and replacing it with just plopping the entire card data spreadsheet into this tool!

![card mocks screenshot](https://github.com/saint-justin/card-mocks/blob/main/src/assets/MockCardsScreenshot_2023-09-19.png?raw=true)

## Built on the Nano React App Default Typescript Template

The project is build on the [nano-react-app](https://github.com/nano-react-app/nano-react-app) Typescript template.

- `npm start` — This will spawn a development server with a default port of `3000`.
- `npm run build` — This will output a production build in the `dist` directory.
- `npm run preview` — This will run the production build locally with a default port of `5173` (this will not work if you haven't generated the production build yet).
- `npm run typecheck` — This will run `tsc --noEmit` which basically just typechecks your project.
- `npm run typewatch` — This will run `tsc --noEmit --watch` which will typecheck your project as you make changes.

## Typechecking

Unfortunately, ViteJS does not perform typechecking. So you will need to make use of the `typecheck` and `typewatch` scripts above.

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- --port 1234
```

Or edit the `start` script directly:

```
vite --port 1234
```

## Adding styles

_(Recommended)_
Use the [styled components](https://github.com/styled-components/styled-components) package to style components in-line for each given component. For example, to style the text color of a button component, you'd use the following:
```js
const Button = styled.button`
  color: grey;
`;
```
For more examples and details, see the [styled components page](https://styled-components.com/) or their extensive [documentation](https://styled-components.com/docs).

_(Only when styled-components doesn't work)_
You can use CSS files with simple ES2015 `import` statements anywhere in your Javascript:

```js
import "./index.css";
```

## Babel transforms

The Babel preset [babel-preset-nano-react-app](https://github.com/nano-react-app/babel-preset-nano-react-app) is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an external `.babelrc` file, so if you want to use `.babelrc` remember to delete the `babel` property inside `package.json`.


## Deploy to GitHub Pages

You can also deploy your project using GitHub pages.
First install the `gh-pages` [package](https://github.com/tschaub/gh-pages):

`npm i -D gh-pages`

With Parcel's `--public-url` flag, use the following scripts for deployment:

```
"scripts": {
  "start": "vite",
  "build": "vite build",
  "predeploy": "rm -rf dist && vite build",
  "deploy": "gh-pages -d dist"
},
```

Then follow the normal procedure in GitHub Pages and select the `gh-pages` branch.


## Attributions:
- Close Icon designed by [Pixel Perfect from Flaticon](https://www.flaticon.com/authors/pixel-perfect).

- Cancel Icon designed by [Fingerprint Designs from Flaticon](https://www.flaticon.com/authors/fingerprint-designs).

- Playing Card Icon designed by [Freepik from Flaticon](https://www.freepik.com/). Updated and remixed for logo design.

- Save Diskette Icon designed by [Yogi Aprelliyanto from Flaticon](https://www.flaticon.com/authors/yogi-aprelliyanto)

- Other Icons designed by me (or I forgot who made them and I'm sorry. If it's yours, please shoot me a DM and I'll update the credits here)