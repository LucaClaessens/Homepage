<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`_posts/${params.slug}.md`);

    if (res.status === 200) {
      return { postMd: await res.text() };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import fm from "front-matter";
  import MarkdownRenderer from "../../components/article/MarkdownRenderer.svelte";
  import FeaturedImage from "./components/FeaturedImage.svelte";
  import PostMeta from "./components/PostMeta.svelte";

  export let postMd;

  $: frontMatter = fm(postMd);
  $: post = {
    ...frontMatter.attributes,
    markdown: frontMatter.body,
  };
</script>

<style lang="scss">
  .post {
    margin: 0 auto;
    max-width: 800px;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <meta name="Description" content="{post.title} | {post.description}" />
</svelte:head>

<div class="post">
  <PostMeta {post} />
  <FeaturedImage image={post.featuredImage} />

  <MarkdownRenderer markdown={post.markdown} />
</div>
