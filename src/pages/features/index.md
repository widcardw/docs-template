---
title: Features
layout: ~/layouts/MainLayout.astro
---

## Routes

### Sidebar

The left sidebar is written with SolidJS. However, before you preview or build the site, please run

```sh
pnpm run route
```

first. This command[^2] will generate the valid routes of this site, then the program will read the generated route and build up
the left side bar.

[^2]: This command runs on `esno`. If you do not have this cli, you can install it with `pnpm add -g esno`.

### File routes

If there is a `index.md` in some dir, for example, `features/index.md`, then there will be the route map

```
features/index.md    ==>  /features
features/basic.md    ==>  /features/basic
features/math.md     ==>  /features/math
features/mermaid.md  ==>  /features/mermaid
```

The left sidebar will also recognize `Features` label as a link.

If there is no `index.md` in some dir, the label will be a collapsible category.

```
features          ==> Not a navigator
  +---basic.md    ==> /features/basic
  +---math.md     ==> /features/math
  +---mermaid.md  ==> /features/mermaid
```

## Other features

Please check out more in the left sidebar of **Features** category.
