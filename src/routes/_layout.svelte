<script>
  import Nav from "../components/Nav.svelte";
  import Background from "../components/Background.svelte";

  export let segment;
</script>

<style global>
  body {
    background-color: #fafafa;
    z-index: 1;
    color: #222;
    padding: 2rem;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    max-width: 1024px;
    margin: auto;
  }
  section#about {
    margin-top: 2rem;
  }
  @media (prefers-color-scheme: dark) {
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      color: #f2f2f2 !important;
    }
    body {
      background-color: #1f1f1f !important;
    }
    .smiley-circle {
      background-color: #181818 !important;
    }
    button {
      background-color: #1f1f1f !important;
    }
    button a {
      color: #f2f2f2 !important;
    }
    button svg {
      fill: #f2f2f2 !important;
    }
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Background />
