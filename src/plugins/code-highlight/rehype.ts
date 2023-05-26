import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { applyMarkings, isTerminal } from './api'

const rehypePlugin: Plugin = function () {
  return (tree, file) => {
    visit(tree, 'element', (element) => {
      const tagName = element.tagName
      if (tagName !== 'CodeSnippets')
        return

      let { lang, title = '', lineMarkings = '', inlineMarkings = '' }: {
        lang: string
        title: string
        lineMarkings: string
        inlineMarkings: string
      } = element.properties

      title = decodeURIComponent(title).replace(/([\\/])/g, "$1<wbr/>")

      const children: Array<unknown> = element.children
      const codeRaw: string = children[0].value

      let hasTitle = false
      let langIsTerminal = isTerminal(lang)

      const transformedCodeRaw = applyMarkings(codeRaw, lineMarkings, inlineMarkings)
      children[0].value = transformedCodeRaw

      if (title && title.trim()) {
        hasTitle = true
        const headerEl = {
          type: 'raw',
          value: `<div class="header">${title}</div>`
        }
        children.unshift(headerEl)
      }

      element.tagName = 'div'
      element.properties = {
        className: [
          hasTitle && 'has-title',
          langIsTerminal && 'is-terminal',
          `lang-${lang}`,
          'code-snippet'
        ].filter(Boolean).join(' ')
      }
    })
  }
}

export {
  rehypePlugin as rehypeCodeSnippets
}
