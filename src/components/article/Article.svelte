<script>
    import { fade } from "svelte/transition";
    import { extractYear } from "../../services/formatDate.service";
    import ImageGallery from "./ImageGallery.svelte";
    import MarkdownRenderer from "./MarkdownRenderer.svelte";
    import VimeoEmbed from "./VimeoEmbed.svelte";

    export let post;

    const formatDate = extractYear;
</script>

<div
    class="post"
    in:fade={{ delay: 400, duration: 400 }}
    out:fade={{ duration: 400 }}>
    <div class="post-gallery">
        {#if post.featured_media === 'image'}
            <ImageGallery
                images={post.images}
                alt={post.featured_media_subtitle} />
        {:else if post.featured_media === 'vimeo_embed'}
            <VimeoEmbed videoId={post.embed_id} />
        {/if}
    </div>
    <div class="post-content">
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
                        <div>
                            <a
                                href={post.url}
                                target="_blank"
                                rel="noopener"
                                class="external-link"><h6>{post.title}</h6></a>
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
</div>
