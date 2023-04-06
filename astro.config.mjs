import { resolve } from 'path'
import { defineConfig } from 'astro/config'
import solidJs from "@astrojs/solid-js"
import { remarkMark } from 'remark-mark-highlight'
import remarkCallouts from 'remark-callouts'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { remarkAsciiMath } from '@widcardw/remark-asciimath'
import { remarkWikiLink } from '@flowershow/remark-wiki-link'
import { SITE, PUBDIR } from './src/config'
import { remarkMermaid } from './src/plugins/mermaid/remark'
import { wikilinkPageResolver } from './src/plugins/wikilink/resolver'

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  resolve: {
    alias: {
      '~/': `${resolve(import.meta.url, 'src')}/`,
    },
  },
  // you should put your static assets in this directory
  publicDir: PUBDIR,
  integrations: [solidJs()],
  markdown: {
    gfm: true,
    remarkPlugins: [
      remarkMark,
      remarkCallouts,
      [remarkMermaid, { includeLoading: true }],
      remarkMath,  // used for math
      remarkAsciiMath,  // used for math
      [remarkWikiLink, { pageResolver: wikilinkPageResolver }]
    ],
    rehypePlugins: [
      rehypeKatex,  // used for math
    ],
    shikiConfig: {
      theme: 'nord',
    },
  },
});
