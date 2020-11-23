<script>
  import ArrowButton from "./ArrowButton";

  export let segment;
</script>

<header>
  {#if segment !== undefined}
    <ArrowButton dir="back" />
  {/if}
  <p class="title">Luca his archive of ramblings.</p>
</header>
