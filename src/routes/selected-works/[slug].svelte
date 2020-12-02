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
    import { stores } from "@sapper/app";
    import fm from "front-matter";
    import { derived } from "svelte/store";
    import Article from "../../components/article/Article.svelte";
    import { page_host } from "./../../core/config";

    const { page } = stores();

    const path = derived(page, ($page) => $page.path);

    export let postMd;

    $: frontMatter = fm(postMd);
    $: post = {
        ...frontMatter.attributes,
        markdown: frontMatter.body,
    };
</script>

<svelte:head>
    <title>✍🏼 {post.title}</title>
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.subtitle} />
    <meta property="og:image" content="{page_host}/{post.overview_image}.png" />
    <meta property="og:url" content="{page_host}{$path}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="Description" content="{post.title} | {post.subtitle}" />
</svelte:head>

<Article {post} />
