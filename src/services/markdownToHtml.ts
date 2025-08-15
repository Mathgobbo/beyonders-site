import { remark } from "remark";
import html, { Options } from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, {
      sanitize: false,
    } as Options)
    .process(markdown);
  return result.toString();
}
