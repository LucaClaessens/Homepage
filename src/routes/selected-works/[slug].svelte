<script context="module">
    export async function preload({ params, query }) {
        // the `slug` parameter is available because
        // this file is called [slug].svelte
        const res = await this.fetch(`_selected-works/${params.slug}.md`);

        if (res.status === 200) {
            return { postMd: await res.text() };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    import fm from "front-matter";
    import { fade } from "svelte/transition";
    import { extractYear } from "../../services/formatDate.service";
    import ArrowButton from "./../../components/ArrowButton.svelte";
    import MarkdownRenderer from "./../../components/article/MarkdownRenderer.svelte";

    export let postMd;

    const formatDate = extractYear;

    $: frontMatter = fm(postMd);
    $: post = {
        ...frontMatter.attributes,
        markdown: frontMatter.body,
    };
</script>

<svelte:head>
    <title>{post.title}</title>
    <meta name="Description" content="{post.title} | {post.description}" />
</svelte:head>

<div
    class="post"
    in:fade={{ delay: 400, duration: 400 }}
    out:fade={{ duration: 400 }}>
    <div class="banner-image">
        <div class="controls">
            <ArrowButton dir="back" size="small" />
            <ArrowButton dir="forward" size="small" />
        </div>
    </div>
    <div class="banner-description">
        <span class="mini-title">Some description of a thing</span>
    </div>

    <table>
        <tr>
            <th class="mini-title uppercase" align="left">Title</th>
            <th class="mini-title uppercase" align="right">Year</th>
        </tr>
        <tr>
            <td class="title" align="left">
                <h6>{post.title}</h6>
            </td>
            <td class="when" align="right">{formatDate(post.date)}</td>
        </tr>
    </table>

    <div class="description">
        <p class="mini-title uppercase">Description</p>
        <p class="text-body">{post.description}</p>
    </div>
    <MarkdownRenderer markdown={post.markdown} />
</div>
