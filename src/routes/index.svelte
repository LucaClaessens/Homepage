<script>
  import { fade } from "svelte/transition";
  import CategorySelector from "../components/CategorySelector.svelte";
  import Footer from "../components/layout/Footer.svelte";
  import { media } from "./../stores/media.store";

  export let segment;
  let delay = new Promise((res) => setTimeout(() => res(), 400));
</script>

<svelte:head>
  <title>Luca his archive of ramblings</title>
  <meta
    name="Description"
    content="Creative developer and digital designer, based in Eindhoven." />
</svelte:head>
<p
  class="landing-text"
  in:fade={{ delay: 800, duration: 400 }}
  out:fade={{ duration: 400 }}>
  {#await delay then awaited}
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
