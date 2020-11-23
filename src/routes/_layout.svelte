<script>
  import GiveWork from "../components/GiveWork.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "./../style/main.scss";
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<GiveWork {segment} />
