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
    import VimeoEmbed from "../../components/article/VimeoEmbed.svelte";
    import { extractYear } from "../../services/formatDate.service";
    import ImageGallery from "./../../components/article/ImageGallery.svelte";
    import MarkdownRenderer from "./../../components/article/MarkdownRenderer.svelte";

    export let postMd;
    let frontMatter, post;

    const formatDate = extractYear;

    $: frontMatter = fm(postMd);
    $: post = {
        ...frontMatter.attributes,
        markdown: frontMatter.body,
    };
</script>

<svelte:head>
    <title>✍🏼 {post.title}</title>
    <meta
        name="Description"
        content="{post.title} | {post.short_description}" />
</svelte:head>

<div
    class="post"
    in:fade={{ delay: 400, duration: 400 }}
    out:fade={{ duration: 400 }}>
    {#if post.featured_media === 'image'}
        <ImageGallery images={post.images} alt={post.featured_media_subtitle} />
    {:else if post.featured_media === 'vimeo_embed'}
        <VimeoEmbed videoId={post.embed_id} />
    {/if}
    {#if post.featured_media_subtitle}
        <div class="banner-description">
            <span class="mini-title">{post.featured_media_subtitle}</span>
        </div>
    {/if}
    <table>
        <tr>
            <th class="mini-title uppercase" align="left">Title</th>
            <th class="mini-title uppercase" align="right">Year</th>
        </tr>
        <tr>
            <td class="title" align="left">
                {#if post.url}
                    <div class="description">
                        <a href={post.url} class="external-link"><h6>
                                {post.title}
                            </h6></a>
                    </div>
                {:else}
                    <h6>{post.title}</h6>
                {/if}
            </td>
            <td class="when" align="right">{formatDate(post.date)}</td>
        </tr>
    </table>
    {#if post.responsibilities}
        <table>
            <tr>
                <th class="mini-title uppercase" align="left">
                    Responsibilities
                </th>
            </tr>
            <tr>
                <td class="title" align="left">
                    <p class="text-body">{post.responsibilities}</p>
                </td>
            </tr>
        </table>
    {/if}
    <MarkdownRenderer markdown={post.markdown} />
</div>
