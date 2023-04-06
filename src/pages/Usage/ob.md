---
title: Obsidian Configurations
layout: ~/layouts/MainLayout.astro
---

## File Tree

```
+--src/
|   +---components/          Components of this project
|   +---layouts/             Custom layouts
|   +---pages/             **Open Obsidian in this directory**
|   |   +---.obsidian/       Obsidian configuration
|   |   +---dir1/
|   |   |   +---file1.md
|   |   |   +---file2.md
|   |   +---dir2/
|   |   |   +---...
|   |   +---public/        **All the static assets are put in this dir**
|   |   |   +---image1.jpg
|   |   |   +---dir3/
|   |   |       +---img2.png
|   |   +---index.astro      The entry of this site, redirect to `intro`
|   |   +---intro.md         The homepage of the site
|   +---plugins/             Custom plugins of this site
|   +---scripts/             The script that builds the left sidebar
|   +---styles/              The global styles of this site
|   +---config.ts          **The configuration file**
+---astro.config.mjs
+---package.json
```

## Basic Usage

This template is for [Obsidian](https://obsidian.md) users, you should open the vault at `src/pages`.

Since the static assets are put in `src/pages/public`, you should set the _`Files & Links`_ > _`New link format`_ to **Absolute path in vault**.

Then you should add a yaml frontmatter at the top of markdown file. Properties `title` and `layout` are required.

```md
---
title: My Notes
layout: ~/layouts/MainLayout.astro
---
```

Enjoy writing!

## Images

With the help of `@flowershow/remark-wiki-link`, you can import images like this. Caution that the image path is **absolute path in vault**.

```
![[public/default-og-image.png]]
```

![[public/default-og-image.png]]

> [!Caution]
> However, the `![](./image.png)` is not fully supported, since the path is relative to the public folder.
>
> In this page `http://example.com/Usage/file`, `![](./image.png)` will be transformed into `http://example.com/Usage/file/image.png`, thus in public folder, you should create `Usage/file` and put the image in it, which seems to be so complex. `¯\_(ツ)_/¯`

## Links

The embedded preview link is not supported here, since it's hard for me to implement the feature.
The `[[path/to/file]]` link will only be transformed into 

```html
<a href="path/to/file">path/to/file</a>
```

Here is an example. `[[features/basic]]` will be transformed to [[features/basic]]

However, the plugin of `@flowershow` will not transform `![[path/to/file]]` into a link. I will try to fix this problem.



