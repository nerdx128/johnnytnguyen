# My personal website app

This is personal playground to test out packages and ideas with React.js

## Packages that I've played with and used

 [React.js](https://www.npmjs.com/package/react)
```shell
npm i react
```

[Material UI](https://www.npmjs.com/package/@material-ui/core)
```shell
npm i @material-ui/core
npm i @material-ui/icons
npm i @material-ui/styles
```

[React Material UI Carousel](https://www.npmjs.com/package/react-material-ui-carousel)

React Material UI Carousel requires Material UI
```shell
npm i react-material-ui-carousel --save
```

[Tailwindcss](https://www.npmjs.com/package/tailwindcss)
[Tailwindcss Website](https://tailwindcss.com/)

Tailwindcss does require a little bit of other extra work to install. Requires PostCSS, but since Create React App 
doesn't support PostCSS 8 yet, you will need the Tailwind CSS v2.0 PostCSS 7 Compatibility build. Tailwind CSS
also require autoprefixer (We'll use v9) and Craco. You can go [here](https://tailwindcss.com/docs/guides/create-react-app)
for more info.

```shell
npm i -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npm install @craco/craco

```
