<script>
  import { fade } from "svelte/transition";
  import CategorySelector from "../components/CategorySelector.svelte";
  import Footer from "../components/layout/Footer.svelte";
  import { page_host } from "./../core/config";
  import { media } from "./../stores/media.store";

  export let segment;
  let delay = new Promise((res) => setTimeout(() => res(), 400));
</script>

<style>
  .crawler-content {
    display: none;
  }
</style>

<svelte:head>
  <title>Luca his archive of ramblings</title>
  <meta property="og:title" content="Luca his archive of ramblings" />
  <meta
    property="og:description"
    content="Creative developer and digital designer, based in Eindhoven." />
  <meta property="og:image" content="{page_host}/logo-512.png" />
  <meta property="og:url" content={page_host} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="Description"
    content="Creative developer and digital designer, based in Eindhoven." />
</svelte:head>
<p
  class="landing-text"
  in:fade={{ delay: 800, duration: 400 }}
  out:fade={{ duration: 400 }}>
  {#await delay}
    <div class="crawler-content">
      <a hidden href="/selected-works" class="hidden-link">🕷</a>
      <a hidden href="/experiments" class="hidden-link">🕷</a>
    </div>
  {:then awaited}
    {#if !$media.medium}
      Hi, this is where I share
      <a href="/selected-works" class="category-link">
        <CategorySelector
          category="selected works"
          icon="icons/selected-works.svg" />
      </a>
      and keep track of<br />
      my
      <a href="/experiments" class="category-link">
        <CategorySelector category="experiments" icon="icons/experiments.svg" />
      </a>
      Sometimes, I also<br />
      like to share some
      <a href="/knowledge" class="category-link category-link__disabled">
        <CategorySelector category="knowledge" icon="icons/knowledge.svg" />
      </a>
    {:else}
      Hi, this is where I share
      <a href="/selected-works" class="category-link">
        <CategorySelector
          category="selected works"
          icon="icons/selected-works.svg" />
      </a>
      and keep track of my
      <a href="/experiments" class="category-link">
        <CategorySelector category="experiments" icon="icons/experiments.svg" />
      </a>
      Sometimes, I also like to share some
      <a href="/knowledge" class="category-link category-link__disabled">
        <CategorySelector category="knowledge" icon="icons/knowledge.svg" />
      </a>
    {/if}
  {/await}
</p>

<Footer />
