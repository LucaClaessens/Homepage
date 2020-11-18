<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`projects.json`)
      .then((r) => r.json())
      .then((entries) => {
        return { entries };
      });
  }
</script>

<script>
  import Latest from "./../components/Latest.svelte";
  import Nav from "./../components/Nav.svelte";
  import Section from "./../components/Section.svelte";
  import Shortdesc from "./../components/Shortdesc.svelte";
  import Table from "./../components/Table.svelte";

  export let entries;
  export let latestEntry = entries[0];
</script>

<svelte:head>
  <title>Luca Claessens</title>
  <meta
    name="Description"
    content="Developer and digital designer, based in Eindhoven." />
</svelte:head>

<Nav />
<Shortdesc />

<Section tagline="↘︎ Latest rambling" id="latest-rambling">
  <Latest entry={latestEntry} />
</Section>

<Section tagline="All ramblings" id="all-ramblings">
  <Table {entries} />
</Section>
