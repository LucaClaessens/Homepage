<script>
  import CategorySelector from "../CategorySelector.svelte";
  import ArrowButton from "./../ArrowButton.svelte";

  export let segment;
</script>

<header>
  {#if segment !== undefined}
    <ArrowButton dir="back" />
    <p class="title">
      Luca his archive of
      <CategorySelector
        size="small"
        activated={true}
        category={segment.replace('-', ' ') + '.'}
        icon="icons/{segment}.svg" />
    </p>
  {:else}
    <p class="title">Luca his archive of ramblings.</p>
  {/if}
</header>
