import { unified } from 'unified'
export type { Root, Content } from 'mdast'
export type { Plugin, VFileWithOutput, Transformer } from 'unified'
export type { Node } from 'unist-util-visit'

import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import remarkStringify from 'remark-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkToc from 'remark-toc'
import remarkGFM from 'remark-gfm'
import remarkDirective from 'remark-directive'
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import { toMarkdown } from 'mdast-util-to-markdown'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { visit } from 'unist-util-visit'
import { toMdast } from 'hast-util-to-mdast'
import { gfm } from 'micromark-extension-gfm'
import { gfmFromMarkdown, gfmToMarkdown } from 'mdast-util-gfm'
import { frontmatter } from 'micromark-extension-frontmatter'
import {
  frontmatterFromMarkdown,
  frontmatterToMarkdown,
} from 'mdast-util-frontmatter'
import { directive } from 'micromark-extension-directive'
import {
  directiveFromMarkdown,
  directiveToMarkdown,
} from 'mdast-util-directive'

const flatMap = require('unist-util-flatmap')

let x = 0
x++

export default {
  unified,
  rehypeSanitize,
  rehypeParse,
  rehypeStringify,
  rehypeRaw,
  remarkParse,
  remarkRehype,
  remarkStringify,
  remarkDirective,
  remarkFrontmatter,
  remarkSqueezeParagraphs,
  remarkToc,
  remarkGFM,
  toMdast,
  visit,
  toMarkdown,
  fromMarkdown,
  unistFlatMap: flatMap,
  gfm,
  gfmFromMarkdown,
  gfmToMarkdown,
  frontmatter,
  frontmatterToMarkdown,
  frontmatterFromMarkdown,
  directive,
  directiveFromMarkdown,
  directiveToMarkdown,
}
