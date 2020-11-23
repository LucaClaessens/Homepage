<script>
    import hljs from "highlight.js";
    import MarkdownIt from "markdown-it";
    import markdownItAbbr from "markdown-it-abbr";
    import markdownItFootnote from "markdown-it-footnote";
    import implicitFigures from "markdown-it-implicit-figures";
    import { onMount } from "svelte";
    import markdownItExternalLinks from "../../services/markdown/markdown-it-external-links";

    export let markdown;
    let parsedMarkdown;

    onMount(() => {
        const md = new MarkdownIt({
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
            .use(implicitFigures, {
                dataType: true,
                figcaption: true,
            });

        parsedMarkdown = md.render(markdown);
    });
</script>

<div class="content">
    {@html parsedMarkdown}
</div>
