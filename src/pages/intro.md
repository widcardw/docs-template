---
title: Notes
layout: ~/layouts/MainLayout.astro
---

## Introduction

This is an optionated notes deployment template.

## Usage

### With Obsidian.md

You can open the vault in the directory `src/pages`. Since the static assets are put in `src/pages/public`, you should set the _`Files & Links`_ > _`New link format`_ to **Absolute path in vault**.

### Write markdown

All the markdown files are put in `src/pages`. You can also create directories and put md files in them.

Insert the frontmatter at the top of the markdown. These properties are required.

```yaml
title: Your Notes
layout: ~/layouts/MainLayout.astro 
# If the layout does not exist, the css will be broken.
```

Then the subtitles of one document should start with `h2` instead of `h1`.

### Before preview or deployment

Run the command to generate routes. All the dirs or files that starts with an underscore `_` will be ignored.

```sh
pnpm run route
```

> [!caution]
> This command depends on `esno` and you must install it. If you do not want to install this dep, please use `ts-node` or other tools.

### Static assets

With the help of `@flowershow`, we can use wikilink in markdown files. You can insert an image like:

```
![[public/default-og-image.png]]
```

![[public/default-og-image.png]]

## Configuration

Please edit `src/config.ts`.
