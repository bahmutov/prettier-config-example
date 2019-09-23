# Prettier support for other languages

This folder has JavaScript, CSS, HTML, JSON and even this Markdown file all formatted using Prettier

Note that while formatting [index.js](index.js) Prettier uses 2 spaces per tab, but in the Markdown code blocks it uses 4 spaces.

```js
const code = true
if (code) {
    console.log('code is on')
}
```

This is because we override options inside the [.prettierrc.json](.prettierrc.json) file.
