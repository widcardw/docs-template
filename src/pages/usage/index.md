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

> This method is not fully tested. When the repo name is not `<YOUR_NAME>.github.io`, the css and js will fail to load.

Create `.github/workflows/deploy-docs.yml`. For more information, please refer to [GitHub Actions](https://github.com/features/actions).

```yaml
name: Deploy docs

on:
  push:
    tags:
      - 'v*'

# Allow this job to clone the repo and create a page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v3
      - name: Install, build, and upload your site
        uses: withastro/action@v0
        with:
            path: . # The root location of your Astro project inside the repository. (optional)
            node-version: 16 # The specific version of Node that should be used to build your site. Defaults to 16. (optional)
            package-manager: pnpm # The Node package manager that should be used to install dependencies and build your site. Automatically detected based on your lockfile. (optional)

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

Go to _GitHub > Repo Settings > Environment > github-pages_, set the **branches allowed > `main`** to **`v*`**.

Set _Repo Settings > Pages > Build and deployment > Source_ to **GitHub Actions**.

When you **push a tag** (for example, `v1.0.0`) to remote, action will be triggered and the docs will be built within a few minutes.

### Deploy manually

Build the docs on your PC.

```sh
pnpm run build
```

Then you can distribute the `dist` folder to your server or CDN (with Nginx or other tools).
