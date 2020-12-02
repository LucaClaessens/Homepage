<script>
    import hljs from "highlight.js";
    import MarkdownIt from "markdown-it";
    import markdownItAbbr from "markdown-it-abbr";
    import markdownItFootnote from "markdown-it-footnote";
    import { onMount } from "svelte";
    import markdownItExternalLinks from "../../services/markdown/markdown-it-external-links";
    import markdownItFigureAndPicture from "../../services/markdown/markdown-it-image-renderer";

    export let markdown;
    let parsedMarkdown;

    onMount(() => {
        const md = new MarkdownIt({
            html: true,
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return (
                            '<pre class="hljs"><code>' +
                            hljs.highlight(lang, str, true).value +
                            "</code></pre>"
                        );
                    } catch (__) {}
                }

                return (
                    '<pre class="hljs"><code>' +
                    md.utils.escapeHtml(str) +
                    "</code></pre>"
                );
            },
        })
            .use(markdownItAbbr)
            .use(markdownItFootnote)
            .use(markdownItExternalLinks, {
                className: "external-link",
            })
            .use(markdownItFigureAndPicture);

        parsedMarkdown = md.render(markdown);
    });
</script>

<div class="content">
    {@html parsedMarkdown}
</div>
