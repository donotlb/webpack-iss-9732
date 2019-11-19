# webpack-iss-9732

[Multiple assets emit different content to the same filename · Issue #9732 · webpack/webpack](https://github.com/webpack/webpack/issues/9732)

## reproduction steps

1. `npm install`
2. `npx webpack --watch`
3. modify content of entry.js, then save
4. webpack shows a warning => Multiple assets emit different content to the same filename app.js.map
