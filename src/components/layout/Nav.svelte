<script>
  import { stores } from "@sapper/app";
  import { derived } from "svelte/store";
  import { fly } from "svelte/transition";
  import ArrowButton from "./../ArrowButton.svelte";
  import CategorySelector from "./../CategorySelector.svelte";

  const { page } = stores();

  const parentPath = derived(page, ($page) => {
    const idx = $page.path.lastIndexOf("/");
    return $page.path.slice(0, idx);
  });

  export let segment;
</script>

<header>
  {#if segment !== undefined}
    <a href={$parentPath} transition:fly={{ x: -200, duration: 250 }}>
      <ArrowButton dir="back" />
    </a>
  {/if}
  <p class="title">
    Luca his archive of
    {#if segment == undefined || segment == 'info'}
      <span
        in:fly={{ delay: 500, duration: 250, y: -50 }}
        out:fly={{ duration: 250, y: -50 }}>
        ramblings
      </span>
    {:else}
      <span
        in:fly={{ delay: 500, duration: 250, y: -50 }}
        out:fly={{ duration: 250, y: -50 }}>
        <CategorySelector
          size="small"
          activated={true}
          category={segment.replace('-', ' ')}
          icon="icons/{segment}.svg" /></span>
    {/if}
  </p>
</header>
