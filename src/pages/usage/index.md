---
title: Usage
layout: ~/layouts/MainLayout.astro
---

## How to use this template

### Clone this template

Use `git` or `degit` to clone this repo.

```sh
git clone git@github.com:widcardw/docs-template --depth=1
# or
degit widcardw/docs-template
```

### Add document files

Put all your markdown files in `src/pages`. Notice that the homepage is `intro.md`. All the static assets are put in `src/pages/public`, and the images in `md` files are of [wikilink](usage/ob#images) format.

### Install the dependencies and preview

Use npm/yarn/pnpm to install the deps.

```sh
# ~/Documents/docs-template
pnpm i
```

Build the routes, so that the left sidebar will be properly rendered.

```sh
pnpm run route
```

Preview the docs.

```sh
pnpm run dev
```

## How to deploy

> [!caution]
> You should read the [[usage/ob|Obsidian Configuration]] chapter and [[usage/astro|Astro Configuration]] chapter before you get ready to deploy your docs. You ought to solve your own problems before you bring them to the deployment providers.

It is recommended to upload the repo to GitHub, and then use [GitHub Actions](https://github.com/features/actions) or [Vercel](https://vercel.app) or [Netlify](https://netlify.com) to make static-site generation.

### Vercel or Netlify

1. (If required) Register an account.
2. Import the repo to vercel or netlify, then they will have access to your repo.
3. Choose Nodejs as your build tool, or set the framework preset to Astro.
4. Set output directory to `dist`.
5. Deploy.
6. (Optional) Add a custom domain.

### GitHub Actions

Create `.github/workflows/deploy-docs.yml`. For more information, please refer to [GitHub Actions](https://github.com/features/actions).

```yaml
name: deploy docs

on:
  push:
    tags:
      - 'v*'

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - uses: pnpm/action-setup@v2.0.1
        name: Install pnpm
        id: pnpm-install
        with:
          version: 7
          run_install: false

      - name: Get pnpm store directory
        id: pnpm-cache
        run: |
          echo "::set-output name=pnpm_cache_dir::$(pnpm store path)"

      - uses: actions/cache@v3
        name: Setup pnpm cache
        with:
          path: ${{ steps.pnpm-cache.outputs.pnpm_cache_dir }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies and build
        run: pnpm install && pnpm build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
```

Go to _GitHub > Repo Settings > Actions > General_, set the **Workflow permissions** to **Read and write permissions**.

When you **push a tag** (for example, `v1.0.0`) to remote, action will be triggered and the docs will be built within a few minutes.

### Deploy manually

Build the docs on your PC.

```sh
pnpm run build
```

Then you can distribute the `dist` folder to your server or CDN (with Nginx or other tools).
