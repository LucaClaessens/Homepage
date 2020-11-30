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
    import Article from "../../components/article/Article.svelte";

    export let postMd;

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

<Article {post} />
