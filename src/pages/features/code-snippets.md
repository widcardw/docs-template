---
title: Code Snippets
layout: ~/layouts/MainLayout.astro
---

> This feature is borrowed from [Astro docs](https://github.com/withastro/docs).

## Highlight lines or regexp

Use `mark={2-5,7}` to highlight lines.

~~~md
```js title="Highlight lines" mark={1}
const hello = 'Hello, world!'
console.log(hello)
```
~~~

```js title="Highlight lines" mark={1}
const hello = 'Hello, world!'
console.log(hello)
```

Use `mark=/regexp/` to highlight matched expressions.

~~~md
```js title="Highlight expressions" mark=/hello/
const hello = 'Hello, world!'
console.log(hello)
```
~~~

```js title="Highlight expressions" mark=/hello/
const hello = 'Hello, world!'
console.log(hello)
```

## Insert lines or regexp

Use `ins={2-5,7}` to highlight inserted lines.

~~~md
```json title="package.json" ins={2}
{
    "type": "module"
}
```
~~~

```json title="package.json" ins={2}
{
    "type": "module"
}
```

Use `ins=/regexp/` to highlight inserted expressions.

~~~md
```js title="Insert semicolons" ins=/;/
const a = 1;
const b = arr.reduce((x, acc) => x + acc);
```
~~~

```js title="Insert semicolons" ins=/;/
const a = 1;
const b = arr.reduce((x, acc) => x + acc);
```

## Delete lines or regexp

Use `del={2-5,7}` to highlight deleted lines.

~~~md
```js title="Delete lines" del={2}
const hello = 'Hello, world!'
console.log(hello)
```
~~~

```js title="Delete lines" del={2}
const hello = 'Hello, world!'
console.log(hello)
```

Use `del=/regexp/` to highlight deleted expressions.

~~~md
```js title="Delete expressions" del=/hello/
const hello = 'Hello, world!'
console.log(hello)
```
~~~

```js title="Delete expressions" del=/hello/
const hello = 'Hello, world!'
console.log(hello)
```

You can also combine all of them together.

```js title="Combined usage" del=/: any/ ins={4-5} mark=/ast/
export function remarkHighlightLine() {
  return function transformer(ast: any, vFile: any, next: any) {
    visitCodeBlock(ast)
    if (typeof next === 'function')
      return next(null, ast, vFile)
    return ast
  }
}
```
