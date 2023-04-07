---
title: Markdown
layout: ~/layouts/MainLayout.astro
---

## Basic features of Markdown

### Blockquote

> This is a blockquote.

### Code Block

```js
console.log('Hello, world!')
```

### GitHub Flavored Markdown

#### Autolink

This will automatically turn a literal link to `<a>` link http://github.com.

#### Table

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| apple    | banana   |     31   |
| computer | phone    |   1024   |

#### Footnote

It is based on gfm[^1].

[^1]: GitHub Flavored Markdown

#### Checked List

- [x] Buy a coffee.
- [ ] Cook the food.
- [x] Write a markdown plugin.

### Highlight Text

Surround the text with double equal sign `==`, then the text will be ==highlighted==.

### Wiki Link

With the help of `@flowershow`, we can use wikilink in markdown files. You can insert an image like

```
![[public/default-og-image.png]]
```

![[public/default-og-image.png]]

## Table of Content

Just look at the right sidebar, or go to the top on your mobile device. It is written based on SolidJS and Intersection Observer.

Note that the toc starts with `h2` instead of `h1`, since `h1` is the heading of this whole page.

## Callouts

This feature is implemented by `@flowershow`. However, There still remain some problems from my respective, for example, it is unfoldable. I will try to dive into it...

> [!tip]
> This is a callout block.

```md
> [!tip]
> This is a callout block.
```

