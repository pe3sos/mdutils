import { unified } from 'unified';
export type { Root, Content } from 'mdast';
export type { Plugin, VFileWithOutput, Transformer } from 'unified';
export type { Node } from 'unist-util-visit';
import rehypeSanitize from 'rehype-sanitize';
import remarkFrontmatter from 'remark-frontmatter';
import remarkToc from 'remark-toc';
import remarkGFM from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeRaw from 'rehype-raw';
import { toMarkdown } from 'mdast-util-to-markdown';
import { toMdast } from 'hast-util-to-mdast';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown, gfmToMarkdown } from 'mdast-util-gfm';
import { frontmatter } from 'micromark-extension-frontmatter';
import { frontmatterFromMarkdown, frontmatterToMarkdown } from 'mdast-util-frontmatter';
import { directive } from 'micromark-extension-directive';
declare const _default: {
    unified: typeof unified;
    rehypeSanitize: typeof rehypeSanitize;
    rehypeParse: import("unified").Plugin<[import("rehype-parse").Options] | [], string, import("hast").Root>;
    rehypeStringify: import("unified").Plugin<[] | [import("hast-util-to-html/lib/types").Options], import("hast").Root, string>;
    rehypeRaw: typeof rehypeRaw;
    remarkParse: import("unified").Plugin<[(import("mdast-util-from-markdown/lib").Options | undefined)?] | void[], string, import("mdast").Root>;
    remarkRehype: import("unified").Plugin<[] | [import("unified").Processor<any, any, any, any>, (import("mdast-util-to-hast/lib").Options | undefined)?] | [null | undefined, (import("mdast-util-to-hast/lib").Options | undefined)?] | [import("mdast-util-to-hast/lib").Options], import("mdast").Root, import("mdast").Root>;
    remarkStringify: import("unified").Plugin<void[] | [(import("remark-stringify").Options | undefined)?], import("mdast").Root, string>;
    remarkDirective: typeof remarkDirective;
    remarkFrontmatter: typeof remarkFrontmatter;
    remarkSqueezeParagraphs: typeof remarkSqueezeParagraphs;
    remarkToc: typeof remarkToc;
    remarkGFM: typeof remarkGFM;
    toMdast: typeof toMdast;
    visit: (<Tree extends import("unist").Node<import("unist").Data>, Check extends import("unist-util-is").Test>(tree: Tree, test: Check, visitor: import("unist-util-visit/complex-types").BuildVisitor<Tree, Check>, reverse?: boolean | undefined) => void) & (<Tree_1 extends import("unist").Node<import("unist").Data>>(tree: Tree_1, visitor: import("unist-util-visit/complex-types").BuildVisitor<Tree_1, string>, reverse?: boolean | undefined) => void);
    toMarkdown: typeof toMarkdown;
    fromMarkdown: ((value: import("micromark-util-types").Value, encoding: import("micromark-util-types").Encoding, options?: import("mdast-util-from-markdown/lib").Options | undefined) => import("mdast").Root) & ((value: import("micromark-util-types").Value, options?: import("mdast-util-from-markdown/lib").Options | undefined) => import("mdast").Root);
    unistFlatMap: any;
    gfm: typeof gfm;
    gfmFromMarkdown: typeof gfmFromMarkdown;
    gfmToMarkdown: typeof gfmToMarkdown;
    frontmatter: typeof frontmatter;
    frontmatterToMarkdown: typeof frontmatterToMarkdown;
    frontmatterFromMarkdown: typeof frontmatterFromMarkdown;
    directive: typeof directive;
    directiveFromMarkdown: Partial<import("mdast-util-from-markdown/lib").NormalizedExtension>;
    directiveToMarkdown: import("mdast-util-to-markdown/lib/types").Options;
};
export default _default;
//# sourceMappingURL=lib.d.ts.map